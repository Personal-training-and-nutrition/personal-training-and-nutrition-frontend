import React from 'react';
import PlanPageLayot, { PlanInputType } from '../../components/PlanPageLayot/PlanPageLayot';
import { mealData } from '../../utils/constants';
import { useForm } from 'react-hook-form';
import { useAppSelector } from '../../redux/store';
import { useCreateDietPlanMutation } from '../../redux/services/dietApi';
import { useLocation } from 'react-router-dom';
import { preparePlan } from '../../utils/processPlans';

const AddPlanMeal: React.FC = () => {
  const { id } = useAppSelector((store) => store.user);
  const [create] = useCreateDietPlanMutation();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const client = query.get('client');

  const {
    register,
    setValue,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm<PlanInputType>({
    mode: 'onBlur',
  });

  const onSubmit = handleSubmit((rawData) => {
    if (!client || !id) return;
    create({ ...preparePlan(rawData), specialist: id, user: parseInt(client) });
  });

  return (
    <PlanPageLayot
      textTitle="ПЛАН ПИТАНИЯ"
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
export default AddPlanMeal;
