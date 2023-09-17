import React from 'react';
import { useForm } from 'react-hook-form';
import PlanForm, { PlanInputType } from '../../components/PlanForm/PlanForm';
import { trainingData } from '../../utils/constants';

const AddPlanTraining: React.FC = () => {
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
      textTitle="ПЛАН ТРЕНИРОВОК"
      namePlan="тренировок"
      data={trainingData}
      register={register}
      onSubmit={onSubmit}
      isDirty={isDirty}
      isValid={isValid}
    />
  );
};
export default AddPlanTraining;
