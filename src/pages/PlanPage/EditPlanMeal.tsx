import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import PlanPageLayot, { PlanInputType } from '../../components/PlanPageLayot/PlanPageLayot';
import {
  useDestroyDietPlanMutation,
  useRetrieveDietPlanQuery,
  useUpdateDietPlanMutation,
} from '../../redux/services/dietApi';
import { closeModal, openModal } from '../../redux/slices/modalsSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { PATH_MEAL_ALL_PLANS, PATH_MEAL_REPORT, mealData } from '../../utils/constants';
import { parsePlan, preparePlan } from '../../utils/processPlans';

const EditPlanMeal: React.FC = () => {
  const { id: specialistId } = useAppSelector((store) => store.user);
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const planId = query.get('id');
  const { data: plan, isSuccess } = useRetrieveDietPlanQuery(planId!, { skip: !planId });
  const [planUpdateTrigger] = useUpdateDietPlanMutation();
  const [deletePlan, { isSuccess: isSuccessDelete, isError: isErrorDelete, error }] = useDestroyDietPlanMutation();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { isDirty, isValid },
  } = useForm<PlanInputType>({
    mode: 'onBlur',
    defaultValues: {
      namePlan: 'Входим в ритм!',
      // recomendations: data.recomendations,
    },
  });
  const onSubmit = handleSubmit((data) => {
    if (!planId || !specialistId || !plan?.user) return;
    planUpdateTrigger({
      id: parseInt(planId),
      data: { ...preparePlan(data), user: plan.user, specialist: specialistId },
    }).then(() => navigate(`${PATH_MEAL_REPORT}?id=${planId}`));
  });

  useEffect(() => {
    if (isSuccess) {
      reset(parsePlan(plan));
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isSuccessDelete && !isErrorDelete) {
      dispatch(
        openModal({
          modalId: 'tooltipModal',
          isTraining: true,
          title: 'План удален',
          subtitle: 'Вы будете перенаправлены на страницу планов клиента',
          btnText: 'Закрыть',
        }),
      );
      setTimeout(() => {
        dispatch(closeModal());
        navigate(`${PATH_MEAL_ALL_PLANS}?id=${plan?.user}`);
      }, 3000);
    }
    if (!isSuccess && isErrorDelete) {
      console.log(error);
      dispatch(
        openModal({
          modalId: 'tooltipModal',
          isTraining: true,
          title: 'Произошла ошибка',
          subtitle: `${error}`,
          btnText: 'Закрыть',
        }),
      );
    }
  }, [isSuccessDelete, isErrorDelete]);

  const handleDeletePlan = () => {
    deletePlan(Number(planId));
  };

  if (!isSuccess) return <p>Loading...</p>;

  return (
    <PlanPageLayot
      textTitle="РЕДАКТИРОВАНИЕ ПЛАНA ПИТАНИЯ"
      namePlan="питания"
      data={mealData}
      register={register}
      onSubmit={onSubmit}
      isDirty={isDirty}
      isValid={isValid}
      setValue={setValue}
      onDeletePlan={handleDeletePlan}
    />
  );
};
export default EditPlanMeal;
