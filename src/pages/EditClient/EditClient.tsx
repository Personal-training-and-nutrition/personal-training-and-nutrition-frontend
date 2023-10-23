import styles from './EditClient.module.scss';
import TitleBlock from '../../components/TitleBlock/TitleBlock';
import { useForm } from 'react-hook-form';
// import { InputsType } from '../ProfilePage/Profile';
import {
  usePartialUpdateClientMutation,
  useRetrieveClientQuery,
  useUpdateClientMutation,
} from '../../redux/services/clientsApi.ts';
import { useAppDispatch } from '../../redux/store.ts';
import { closeModal, openModal } from '../../redux/slices/modalsSlice.ts';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ClientPageLayout, { ClientInputType } from '../../components/ClientPageLayout/ClientPageLayout.tsx';

const EditClient = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const id = query.get('id');
  const { data: initialData, isSuccess: isInitialSuccesss, isLoading } = useRetrieveClientQuery(id!, { skip: !id });
  const [updateClient, { isSuccess, isError, error }] = useUpdateClientMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid, errors },
    reset,
  } = useForm<ClientInputType>({
    mode: 'all',
  });

  const onSubmit = handleSubmit(async (data) => {
    if (!id) return;
    data.gender = data.gender === null ? '0' : data.gender;
    delete data.dob;
    // await updateClient({ id: parseInt(id), data });
    console.log(data);
  });

  useEffect(() => {
    if (isInitialSuccesss) console.log(initialData);
    reset(initialData);
  }, [isInitialSuccesss]);

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
