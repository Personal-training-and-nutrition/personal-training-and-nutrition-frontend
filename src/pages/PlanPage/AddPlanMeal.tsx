import React from 'react';
import PlanPageLayot, { PlanInputType } from '../../components/PlanPageLayot/PlanPageLayot';
import { mealData } from '../../utils/constants';
import { useForm } from 'react-hook-form';
import { useAppSelector } from '../../redux/store';
import { useCreateDietPlanMutation } from '../../redux/services/dietApi';
import { useLocation } from 'react-router-dom';

/* const daysOfWeek: Record<string, string> = {
  monday: '1',
  tuesday: '2',
  wednesday: '3',
  thursday: '4',
  friday: '5',
  saturday: '6',
  sunday: '7',
}; */

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
    const diet = [];
    for (let i = 1; i <= 7; i++) {
      if (rawData[i]) {
        diet.push(rawData[i] as any);
      }
    }
    const data = {
      specialist: id!,
      user: parseInt(client || '9'),
      name: rawData.namePlan,
      describe: rawData.recomendations,
      diet,
    };
    console.log(data);
    create(data);
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
