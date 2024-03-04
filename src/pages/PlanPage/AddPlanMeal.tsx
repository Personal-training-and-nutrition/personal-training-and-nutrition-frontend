import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import PlanPageLayot, { PlanInputType } from '../../components/PlanPageLayot/PlanPageLayot';
import { useCreateDietPlanMutation } from '../../redux/services/dietApi';
import { useRetrieveUserQuery } from '../../redux/services/userApi';
import { openModal } from '../../redux/slices/modalsSlice';
import { useAppDispatch } from '../../redux/store';
import { PATH_MEAL_PLAN_UNAUTH, mealData } from '../../utils/constants';
import { preparePlan } from '../../utils/processPlans';

const AddPlanMeal: React.FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const specialistId = query.get('specId');
  const client = query.get('client');

  const [create, { data: meal, isSuccess, isError }] = useCreateDietPlanMutation();
  const { data: clientData } = useRetrieveUserQuery(client!);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm<PlanInputType>({
    mode: 'onBlur',
  });

  useEffect(() => {
    if (isSuccess && !isError) {
      // const link = `${BASE_URL}${PATH_MEAL_PLAN_UNAUTH}?id=${meal?.id!}`
      const link = meal?.id
        ? `http://localhost:5173${PATH_MEAL_PLAN_UNAUTH}?id=${meal.id}`
        : `http://localhost:5173${PATH_MEAL_PLAN_UNAUTH}`;
      dispatch(
        openModal({
          modalId: 'tooltipModal',
          title: 'План питания сохранен',
          subtitle: 'Отправьте его клиенту',
          btnText: 'Скопировать ссылку',
          link,
          phoneNumber: clientData?.phone_number?.replace(/[^0-9]/g, ''),
          isIcons: true,
        }),
      );
      //   setTimeout(() => {
      //     dispatch(closeModal())
      //     navigate(`${PATH_MEAL_ALL_PLANS}?id=${client}`)
      //   }, 3000)
      // }
      // if(!isSuccess && isError) {
      //   console.log(error)
      //   dispatch(
      //     openModal({
      //       modalId: 'tooltipModal',
      //       isTraining: true,
      //       title: 'Произошла ошибка',
      //       subtitle: `${error}`,
      //       btnText: 'Закрыть',
      //     }),
      //   );
    }
  }, [isSuccess, isError]);

  const onSubmit = handleSubmit((rawData) => {
    if (!client || !specialistId) return;
    create({ ...preparePlan(rawData), specialist: specialistId, user: client });
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
