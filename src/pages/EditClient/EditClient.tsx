import styles from './EditClient.module.scss';
import TitleBlock from '../../components/TitleBlock/TitleBlock';
import { useForm } from 'react-hook-form';
import {
  usePartialUpdateClientMutation,
  useRetrieveClientQuery,
} from '../../redux/services/clientsApi.ts';
import { useAppDispatch, useAppSelector } from '../../redux/store.ts';
import { closeModal, openModal } from '../../redux/slices/modalsSlice.ts';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ClientPageLayout, { ClientInputType } from '../../components/ClientPageLayout/ClientPageLayout.tsx';
import { usePartialUpdateUserMutation } from '../../redux/services/userApi.ts';

const EditClient = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const id: string | null = query.get('id');
  const client = useAppSelector((store) => store.currentClient.client);
  const idSpecialist = useAppSelector((store) => store.user.id);
  const [ partialUpdateUser ] = usePartialUpdateUserMutation();

  const { data: initialData, isSuccess: isInitialSuccess, isLoading } = useRetrieveClientQuery(id!);
  // const [updateClient, { isSuccess, isError, error }] = useUpdateClientMutation();
  const [ partialUpdateClient, { isSuccess: isSuccessPartialUpdate, isError: isErrorPartial, error }] =
    usePartialUpdateClientMutation();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // console.log(client);
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid, errors },
    reset,
  } = useForm<ClientInputType>({
    mode: 'all',
    defaultValues: {
      user: {
        last_name: initialData?.user.last_name || '',
        middle_name: initialData?.user.middle_name || '',
        first_name: initialData?.user.first_name || '',
        dob: initialData?.user.dob || '',
        gender: initialData?.user.gender || '',
        params: {
          weight: initialData?.user?.params?.weight,
          height: initialData?.user?.params?.height,
        },
        phone_number: initialData?.user.phone_number || '',
        email: initialData?.user.email || '',
      },
      notes: initialData?.notes || '',
      food_preferences: initialData?.food_preferences || '',
      bad_habits: initialData?.bad_habits || '',
      exp_trainings: initialData?.exp_trainings || '',
      exp_diets: initialData?.notes || '',
      diseases: initialData?.diseases || '',
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    // console.log(data);
    if (!id) return;
    // data.gender = data.gender === null ? '0' : data.gender;
    // delete data.dob;
    // // await updateClient({ id: parseInt(id), data });
    const customerData = {
      user: client.user.id,
      specialist: String(idSpecialist),
      notes: data.notes,
      food_preferences: data.food_preferences,
      bad_habits: data.bad_habits,
      exp_trainings: data.exp_trainings,
      exp_diets: data.notes,
      diseases: data.diseases,
    };
    const personalData ={
      first_name: data.user.first_name,
      last_name: data.user.last_name,
      middle_name: data.user.middle_name,
      // role: data.,
      email: data.user.email,
      phone_number: data.user.phone_number,
      dob: data.user.dob,
      gender: data.user.gender,
      is_specialist: true,
    }
    await partialUpdateUser({ id: client.user.id, data: personalData })
    await partialUpdateClient({ id: id, data: customerData });

  });

  useEffect(() => {
    if (isInitialSuccess) {
      // @ts-ignore
      reset({ ...initialData });
    }
  }, [isInitialSuccess, initialData]);

  useEffect(() => {
    if (isSuccessPartialUpdate && !isErrorPartial) {
      dispatch(
        openModal({
          modalId: 'tooltipModal',
          isTraining: true,
          title: 'Данные успешно изменены',
          subtitle: 'Вы будете перенаправлены на страницу клиента',
          btnText: 'Закрыть',
        }),
      );
      setTimeout(() => {
        dispatch(closeModal());
        navigate(`/client/card/${id}`);
      }, 3000);
    }
    if (!isSuccessPartialUpdate && isErrorPartial) {
      console.log(error);
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
  }, [isSuccessPartialUpdate, isErrorPartial]);

  if (isLoading) {
    return <h2>Загрузка...</h2>;
  }
  return (
    <div className="App__container">
      <main className={styles.editClient__content}>
        <TitleBlock text="редактирование клиента" isBack={true} />
        <ClientPageLayout
          register={register}
          onSubmit={onSubmit}
          isDirty={isDirty}
          isValid={isValid}
          errors={errors}
          reset={reset}
        />
      </main>
    </div>
  );
};

export default EditClient;
