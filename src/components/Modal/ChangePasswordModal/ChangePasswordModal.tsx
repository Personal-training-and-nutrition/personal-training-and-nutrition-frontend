import { useForm } from 'react-hook-form';
import { InputsType } from '../../../pages/ProfilePage/Profile';
import Button from '../../Button/Button';
import InputPassword from '../../Inputs/InputPassword/InputPassword';
import Modal from '../Modal';
import styles from './ChangePasswordModal.module.scss';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { useUsersSetPasswordMutation } from '../../../redux/services/userApi';
import { useEffect, useState } from 'react';
import { closeModal, openModal } from '../../../redux/slices/modalsSlice';

const ChangePasswordModal = () => {
  const [changePassword, { isSuccess, isError, error, isLoading }] = useUsersSetPasswordMutation();
  const dispatch = useAppDispatch();
  const [errMessage, setErrMessage] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { isDirty, isValid, errors },
  } = useForm<InputsType>({ mode: 'all' });

  const { isOpen, modalId } = useAppSelector((state) => state.modal);

  const isChangePass = modalId === 'changePassModal' ? 'changePassModal' : '';

  const onSubmit = handleSubmit(async (data) => {
    if (data.new_password !== data.re_new_password) {
      return setError('re_new_password', { type: 'string', message: 'Убедитесь, что пароли совпадают' });
    }
    await changePassword(data);
    // console.log(data);
  });

  useEffect(() => {
    setErrMessage('');
    reset();
  }, [isOpen]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(closeModal());
      reset();
      setErrMessage('');
      dispatch(openModal({
        modalId: 'tooltipModal',
        isTraining: true,
        title: 'Пароль успешно изменен',
        btnText: 'Закрыть',
      }))
      setTimeout(() => {
        dispatch(closeModal())
      }, 3000)
    }
    if (isError) {
      console.log(error);
      setErrMessage('Вход не удался, повторите попытку позднее.');
    }
  }, [isLoading]);

  const errorVisible = `${styles.changePassword__error} ${styles.changePassword__error_active}`;
  const errorInvisible = `${styles.changePassword__error}`;
  const errorRemoved = `${styles.changePassword__error_removed}`;
  return (
    <Modal isOpen={isOpen} modalId={isChangePass}>
      <h2 className={styles.changePassword__title}>Смена пароля</h2>
      <form action="" className={styles.changePassword__form} onSubmit={onSubmit}>
        <InputPassword
          name="current_password"
          placeholder="Введите старый пароль"
          register={register}
          isInvalid={Boolean(errors.current_password)}
        />
        <span className={errors?.current_password ? errorVisible : errorInvisible}>
          {errors?.current_password?.message || ''}
        </span>
        <InputPassword
          name="new_password"
          placeholder="Введите новый пароль"
          register={register}
          isInvalid={Boolean(errors.new_password)}
        />
        <span className={errors?.new_password ? errorVisible : errorInvisible}>
          {errors?.new_password?.message || ''}
        </span>
        <InputPassword
          name="re_new_password"
          placeholder="Повторите новый пароль"
          register={register}
          isInvalid={Boolean(errors.re_new_password)}
        />

        <span className={errors?.re_new_password ? errorVisible : errorInvisible}>
          {errors?.re_new_password?.message || ''}
        </span>
        <span className={errMessage ? errorVisible : errorRemoved}>{errMessage}</span>

        <Button textBtn="Изменить" type="submit" isValid={isValid} isDirty={isDirty}></Button>
      </form>
    </Modal>
  );
};

export default ChangePasswordModal;
