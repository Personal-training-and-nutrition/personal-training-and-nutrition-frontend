import styles from './AddClient.module.scss';
import TitleBlock from '../../components/TitleBlock/TitleBlock';
import { useForm } from 'react-hook-form';
import { InputsType } from '../ProfilePage/Profile';
import { useCreateClientMutation } from '../../redux/services/clientsApi.ts';
import { useAppDispatch } from '../../redux/store.ts';
import { closeModal, openModal } from '../../redux/slices/modalsSlice.ts';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ClientPageLayout from '../../components/ClientPageLayout/ClientPageLayout.tsx';

const AddClient = () => {
  const [createClient, { isSuccess, isError, error }] = useCreateClientMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid, errors },
    reset,
  } = useForm<InputsType>({
    mode: 'all',
  });

  const onSubmit = handleSubmit(async (data) => {
    const gender = data.gender === null ? '0' : data.gender;
    await createClient({
      first_name: data.first_name,
      last_name: data.last_name,
      middle_name: data.middle_name,
      email: data.email,
      phone_number: data.phone_number,
      capture: '',
      role: '0',
      dob: data.dob,
      gender: gender,
      diseases: data.diseases || null,
      exp_diets: data.exp_diets || null,
      exp_trainings: data.exp_trainings || null,
      bad_habits: data.bad_habits || null,
      notes: data.notes || null,
      food_preferences: data.food_preferences || null,
      params: {
        weight: Number(data.weight),
        height: Number(data.height),
      },
    });
  });

  useEffect(() => {
    if (isSuccess && !isError) {
      dispatch(
        openModal({
          modalId: 'tooltipModal',
          isTraining: true,
          title: 'Клиент успешно добавлен',
          subtitle: 'Вы будете перенаправлены на страницу клиента',
          btnText: 'Закрыть',
        }),
      );
      setTimeout(() => {
        dispatch(closeModal());
        navigate('/clients');
      }, 5000);
    }
    if (!isSuccess && isError) {
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
  }, [isSuccess, isError]);

  // if (isLoading) {
  //   return <h2>Загрузка...</h2>;
  // }

  return (
    <div className="App__container">
      <main className={styles.addClient__content}>
        <TitleBlock text="добавление клиента" isBack={true} />
        <ClientPageLayout />
      </main>
    </div>
  );
};

export default AddClient;
