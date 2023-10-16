import React, { useEffect } from 'react';
import PlanPageLayot, { PlanInputType } from '../../components/PlanPageLayot/PlanPageLayot';
import { mealData } from '../../utils/constants';
import { useForm } from 'react-hook-form';

const EditPlanMeal: React.FC = () => {
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
    console.log(data);
  });

  useEffect(() => {}, []);

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
