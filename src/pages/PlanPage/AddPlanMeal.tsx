import React from 'react';
import PlanPageLayot, { PlanInputType } from '../../components/PlanPageLayot/PlanPageLayot';
import { mealData } from '../../utils/constants';
import { useForm } from 'react-hook-form';
import { useAppSelector } from '../../redux/store';
import { useCreateDietPlanMutation } from '../../redux/services/dietApi';

// const daysOfWeek: Record<string, string> = {
//   monday: '1',
//   tuesday: '2',
//   wednesday: '3',
//   thursday: '4',
//   friday: '5',
//   saturday: '6',
//   sunday: '7',
// };

const AddPlanMeal: React.FC = () => {
  const { id } = useAppSelector((store) => store.user);
  const [create] = useCreateDietPlanMutation();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm<PlanInputType>({
    mode: 'onBlur',
  });

  const onSubmit = handleSubmit((rawData) => {
    // const diet = [];
    // for (const key of Object.keys(rawData)) {
    //   if (key in daysOfWeek && rawData[key]) {
    //     diet.push({
    //       weekday: daysOfWeek[key],
    //       spec_comment: rawData[key],
    //     });
    //   }
    // }
    const data = {
      specialist: id!,
      user: 9,
      // name: rawData.namePlan,
      // describe: rawData.recomendations,
      ...rawData
    };
    console.log(rawData)
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
