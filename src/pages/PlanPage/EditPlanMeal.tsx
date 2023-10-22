import React, { useEffect } from 'react';
import PlanPageLayot, { PlanInputType } from '../../components/PlanPageLayot/PlanPageLayot';
import { mealData } from '../../utils/constants';
import { useForm } from 'react-hook-form';
import { parsePlan, preparePlan } from '../../utils/processPlans';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRetrieveDietPlanQuery, useUpdateDietPlanMutation } from '../../redux/services/dietApi';
import { useAppSelector } from '../../redux/store';

const EditPlanMeal: React.FC = () => {
  const { id: specialistId } = useAppSelector((store) => store.user);
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const planId = query.get('id');
  const { data: plan, isSuccess } = useRetrieveDietPlanQuery(planId!, { skip: !planId });
  const [planUpdateTrigger] = useUpdateDietPlanMutation();

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
    }).then(() => navigate(`/nutrition-report?id=${planId}`));
  });

  useEffect(() => {
    if (isSuccess) {
      reset(parsePlan(plan));
    }
  }, [isSuccess]);

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
    />
  );
};
export default EditPlanMeal;
