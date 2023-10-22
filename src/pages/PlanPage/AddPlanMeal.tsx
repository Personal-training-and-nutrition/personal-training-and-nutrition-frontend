import React, { useEffect } from 'react';
import PlanPageLayot, { PlanInputType } from '../../components/PlanPageLayot/PlanPageLayot';
import { mealData } from '../../utils/constants';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { useCreateDietPlanMutation } from '../../redux/services/dietApi';
import { useLocation, useNavigate } from 'react-router-dom';
import { preparePlan } from '../../utils/processPlans';
import { closeModal, openModal } from '../../redux/slices/modalsSlice';

const AddPlanMeal: React.FC = () => {
  const { id } = useAppSelector((store) => store.user);
  const navigate = useNavigate();
  const [create, {isSuccess, isError, error}] = useCreateDietPlanMutation();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const query = new URLSearchParams(location.search);
  const client = query.get('client');

  const {
    register,
    setValue,
    handleSubmit,
    formState: { isDirty, isValid, errors },
  } = useForm<PlanInputType>({
    mode: 'onBlur',
  });

  useEffect(() => {
    if (isSuccess && !isError) {
      dispatch(
        openModal({
          modalId: 'tooltipModal',
          isTraining: true,
          title: 'План питания создан',
          subtitle: 'Вы будете перенаправлены на страницу планов клиента',
          btnText: 'Закрыть',
        }),
      );
      setTimeout(() => {
        dispatch(closeModal())
        navigate(`/meal-plans?id=${client}`)
      }, 3000)
    }
    if(!isSuccess && isError) {
      console.log(error)
      dispatch(
        openModal({
          modalId: 'tooltipModal',
          isTraining: true,
          title: 'Произошла ошибка',
          subtitle: `${error}`,
          btnText: 'Закрыть',
        }),
      );
    }
  }, [isSuccess, isError]);
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
