import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import PlanPageLayot, { PlanInputType } from '../../components/PlanPageLayot/PlanPageLayot';
import { useCreateTrainingPlanMutation } from '../../redux/services/trainingApi';
import { useRetrieveUserQuery } from '../../redux/services/userApi';
import { openModal } from '../../redux/slices/modalsSlice';
import { useAppDispatch } from '../../redux/store';
import { PATH_WORKOUT_PLAN_UNAUTH, trainingData } from '../../utils/constants';
import { preparePlanTrain } from '../../utils/processPlans';

const AddPlanTraining: React.FC = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  const query = new URLSearchParams(location.search);
  const client = query.get('client');
  const specialistId = query.get('specId');

  const { data: clientData } = useRetrieveUserQuery(client!);
  const [createWorkout, { data: workout, isSuccess, isError }] = useCreateTrainingPlanMutation();

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
      // const link = `${BASE_URL}${${PATH_WORKOUT_PLAN_UNAUTH}}?id=${workout?.id!}`
      const link = workout?.id
        ? `http://localhost:5173${PATH_WORKOUT_PLAN_UNAUTH}?id=${workout.id}`
        : `http://localhost:5173${PATH_WORKOUT_PLAN_UNAUTH}`;
      dispatch(
        openModal({
          modalId: 'tooltipModal',
          isTraining: true,
          title: 'План тренировок сохранен',
          subtitle: 'Отправьте его клиенту',
          btnText: 'Скопировать ссылку',
          link,
          isIcons: true,
          phoneNumber: clientData?.phone_number?.replace(/[^0-9]/g, ''),
        }),
      );
      // setTimeout(() => {
      //   dispatch(closeModal())
      //   navigate(`${PATH_WORKOUT_ALL_PLANS}?id=${client}`)
      // }, 3000)
    }
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
    // }
  }, [isSuccess, isError]);

  const onSubmit = handleSubmit(async (data) => {
    if (!client || !specialistId) return;
    await createWorkout({ ...preparePlanTrain(data), user: client, specialist: specialistId });
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
