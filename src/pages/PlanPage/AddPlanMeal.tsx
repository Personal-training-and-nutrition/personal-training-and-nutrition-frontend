import React from 'react';
import PlanForm, { PlanInputType } from '../../components/PlanForm/PlanForm';
import { mealData } from '../../utils/constants';
import { useForm } from 'react-hook-form';

const AddPlanMeal: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm<PlanInputType>({
    mode: 'onChange',
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <PlanForm
      textTitle="ПЛАН ПИТАНИЯ"
      namePlan="питания"
      data={mealData}
      register={register}
      onSubmit={onSubmit}
      isDirty={isDirty}
      isValid={isValid}
    />
  );
};
export default AddPlanMeal;
