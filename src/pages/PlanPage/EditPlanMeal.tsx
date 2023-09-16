import React from 'react';
import PlanForm, { PlanInputType } from '../../components/PlanForm/PlanForm';
import { trainingData } from '../../utils/constants';
import { useForm } from 'react-hook-form';

const EditPlanMeal: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm<PlanInputType>({
    mode: 'onChange',
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
    <PlanForm
      textTitle="РЕДАКТИРОВАНИЕ ПЛАНA ПИТАНИЯ"
      namePlan="питания"
      data={trainingData}
      register={register}
      onSubmit={onSubmit}
      isDirty={isDirty}
      isValid={isValid}
    />
  );
};
export default EditPlanMeal;
