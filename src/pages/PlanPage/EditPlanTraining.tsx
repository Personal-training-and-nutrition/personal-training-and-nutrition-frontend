import React, { useEffect } from 'react';
import PlanPageLayot, { PlanInputType } from '../../components/PlanPageLayot/PlanPageLayot';
import { trainingData } from '../../utils/constants';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDestroyTrainingPlanMutation, useRetrieveTrainingPlanQuery, useUpdateTrainingPlanMutation } from '../../redux/services/trainingApi';
import { parsePlanTrain, preparePlanTrain } from '../../utils/processPlans';
import { closeModal, openModal } from '../../redux/slices/modalsSlice';

const EditPlanTraining: React.FC = () => {
  const { id: specialistId } = useAppSelector((store) => store.user);
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const planId = query.get('id');
  const { data: plan, isSuccess } = useRetrieveTrainingPlanQuery(planId!, { skip: !planId });
  const [planUpdateTrigger] = useUpdateTrainingPlanMutation();
  const [deletePlan, { isSuccess: isSuccessDelete, isError: isErrorDelete, error}] = useDestroyTrainingPlanMutation();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { isDirty, isValid },
  } = useForm<PlanInputType>({
    mode: 'onBlur'
  });
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    if (!planId || !specialistId || !plan?.user) return;
    planUpdateTrigger({
      id: parseInt(planId),
      data: { ...preparePlanTrain(data), user: plan.user, specialist: specialistId },
    }).then(() => navigate(`/workout-report?id=${planId}`));
  });

  useEffect(() => {
    if (isSuccess) {
      reset(parsePlanTrain(plan));
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
        dispatch(closeModal())
        navigate(`/workout-plans?id=${plan?.user}`)
      }, 3000)
    }
    if(!isSuccess && isErrorDelete) {
      console.log(error)
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
    deletePlan(Number(planId))
  }

  if (!isSuccess) return <p>Loading...</p>;

  return (
    <PlanPageLayot
      textTitle="РЕДАКТИРОВАНИЕ ПЛАНA ТРЕНИРОВОК"
      namePlan="тренировок"
      data={trainingData}
      register={register}
      onSubmit={onSubmit}
      isDirty={isDirty}
      isValid={isValid}
      setValue={setValue}
      onDeletePlan={handleDeletePlan}

    />
  );
};
export default EditPlanTraining;
