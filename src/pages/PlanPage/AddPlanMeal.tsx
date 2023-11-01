import React, {useEffect} from 'react';
import PlanPageLayot, {PlanInputType} from '../../components/PlanPageLayot/PlanPageLayot';
import {mealData} from '../../utils/constants';
import {useForm} from 'react-hook-form';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {useCreateDietPlanMutation} from '../../redux/services/dietApi';
import {useLocation} from 'react-router-dom';
import {preparePlan} from '../../utils/processPlans';
import {openModal} from '../../redux/slices/modalsSlice';
import {useRetrieveUserQuery} from "../../redux/services/userApi.ts";

const AddPlanMeal: React.FC = () => {
  const {id} = useAppSelector((store) => store.user);
  const {id: client_id} = useAppSelector((store) => store.currentClient.client.user);
  const [create, {data: meal, isSuccess, isError}] = useCreateDietPlanMutation();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const query = new URLSearchParams(location.search);
  const client = query.get('client');
  const {data: clientData} = useRetrieveUserQuery(client!);


  const {
    register,
    setValue,
    handleSubmit,
    formState: {isDirty, isValid},
  } = useForm<PlanInputType>({
    mode: 'onBlur',
  });

  useEffect(() => {
    if (isSuccess && !isError) {
      // const link = `http://wellcoaching.ru/meal-plan/unauth?id=${meal?.id!}`
      const link = `http://localhost:5173/meal-plan/unauth?id=${meal?.id!}`
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
      //     navigate(`/meal-plans?id=${client}`)
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
    console.log({...preparePlan(rawData), specialist: id, user: client_id})
    if (!client || !id) return;
    create({...preparePlan(rawData), specialist: id, user: client_id!});
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
