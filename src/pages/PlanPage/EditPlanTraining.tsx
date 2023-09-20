import React from 'react';
import PlanPageLayot, { PlanInputType } from '../../components/PlanPageLayot/PlanPageLayot';
import { trainingData } from '../../utils/constants';
import { useForm } from 'react-hook-form';

const EditPlanTraining: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm<PlanInputType>({
    mode: 'onBlur',
    // defaultValues: {
    //   namePlan: data.namePlan,
    //   recomendations: data.recomendations,
    //   height: data?.height + ' см' || '',
    // },
  });
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <PlanPageLayot
      textTitle="РЕДАКТИРОВАНИЕ ПЛАНA ТРЕНИРОВОК"
      namePlan="тренировок"
      data={trainingData}
      register={register}
      onSubmit={onSubmit}
      isDirty={isDirty}
      isValid={isValid}
    />
  );
};
export default EditPlanTraining;
