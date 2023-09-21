import React from 'react';
import PlanPageLayot, { PlanInputType } from '../../components/PlanPageLayot/PlanPageLayot';
import { mealData } from '../../utils/constants';
import { useForm } from 'react-hook-form';

const EditPlanMeal: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm<PlanInputType>({
    mode: 'onBlur',
    defaultValues: {
      namePlan: 'Входим в ритм!',
      // recomendations: data.recomendations,
    },
  });
  const onSubmit = handleSubmit((data) => {
    return data;
    console.log(data);
  });

  return (
    <PlanPageLayot
      textTitle="РЕДАКТИРОВАНИЕ ПЛАНA ПИТАНИЯ"
      namePlan="питания"
      data={mealData}
      register={register}
      onSubmit={onSubmit}
      isDirty={isDirty}
      isValid={isValid}
    />
  );
};
export default EditPlanMeal;
