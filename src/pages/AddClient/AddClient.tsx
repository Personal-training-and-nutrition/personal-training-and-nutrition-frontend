import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import ClientPageLayout, { ClientInputType } from '../../components/ClientPageLayout/ClientPageLayout';
import TitleBlock from '../../components/TitleBlock/TitleBlock';
import { useCreateClientMutation } from '../../redux/services/clientsApi';
import { closeModal, openModal } from '../../redux/slices/modalsSlice';
import { useAppDispatch } from '../../redux/store';
import { ICreateClient } from '../../redux/types/clients';
import { PATH_CLIENTS } from '../../utils/constants';
import styles from './AddClient.module.scss';

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
        navigate(PATH_CLIENTS);
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
