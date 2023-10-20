import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import PlanPageLayot, { PlanInputType } from '../../components/PlanPageLayot/PlanPageLayot';
import { trainingData } from '../../utils/constants';
import { useCreateTrainingPlanMutation } from '../../redux/services/trainingApi';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { useNavigate } from 'react-router-dom';
import { closeModal, openModal } from '../../redux/slices/modalsSlice';
import { preparePlanTrain } from '../../utils/processPlans';

const AddPlanTraining: React.FC = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const [createWorkout, {isSuccess, isError, error}] = useCreateTrainingPlanMutation();
  const clientId = useAppSelector((state) => state.currentClient.client.id);
  const specialistId = useAppSelector((state) => state.user.id);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { isDirty, isValid },
  } = useForm<PlanInputType>({
    mode: 'onBlur',
  });

  useEffect(() => {
    if (isSuccess && !isError) {
      dispatch(
        openModal({
          modalId: 'tooltipModal',
          isTraining: true,
          title: 'План тренировок создан',
          subtitle: 'Вы будете перенаправлены на страницу планов клиента',
          btnText: 'Закрыть',
        }),
      );
      setTimeout(() => {
        dispatch(closeModal())
        navigate('/workout-plans')
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

  const onSubmit = handleSubmit((data) => {
    console.log({...preparePlanTrain(data), user: clientId, specialist: specialistId});

    createWorkout({...preparePlanTrain(data), user: clientId, specialist: specialistId})

    // if (!client || !id) return;
    // create({ ...preparePlan(rawData), specialist: id, user: parseInt(client) }).then(() => navigate('/meal-plans'));

  });

  return (
    <PlanPageLayot
      textTitle="ПЛАН ТРЕНИРОВОК"
      namePlan="тренировок"
      data={trainingData}
      register={register}
      onSubmit={onSubmit}
      isDirty={isDirty}
      isValid={isValid}
      setValue={setValue}
    />
  );
};
export default AddPlanTraining;
