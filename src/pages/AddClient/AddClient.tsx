import styles from './AddClient.module.scss';
import TitleBlock from '../../components/TitleBlock/TitleBlock';
import { useForm } from 'react-hook-form';
import { useCreateClientMutation } from '../../redux/services/clientsApi';
import { useAppDispatch } from '../../redux/store';
import { closeModal, openModal } from '../../redux/slices/modalsSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ClientPageLayout, { ClientInputType } from '../../components/ClientPageLayout/ClientPageLayout';
import {ICreateClient} from "../../redux/types/clients";

const AddClient = () => {
  const [createClient, { isSuccess, isError, error }] = useCreateClientMutation();
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
    data.user.gender = data.user.gender === null ? '0' : data.user.gender;
    createClient(data as ICreateClient);
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

  return (
    <div className="App__container">
      <main className={styles.addClient__content}>
        <TitleBlock text="добавление клиента" isBack={true} />
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

export default AddClient;
