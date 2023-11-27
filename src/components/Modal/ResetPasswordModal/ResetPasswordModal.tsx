import {useForm} from 'react-hook-form';
import {InputsType} from '../../../pages/ProfilePage/Profile';
import Button from '../../Button/Button';
import InputPassword from '../../Inputs/InputPassword/InputPassword';
import Modal from '../Modal';
import styles from './ResetPasswordModal.module.scss';
import {useAppDispatch, useAppSelector} from '../../../redux/store';
import {useUsersResetPasswordConfirmMutation} from "../../../redux/services/userApi";
import {useEffect, useState} from "react";
import {closeModal, openModal} from "../../../redux/slices/modalsSlice";
import {useSearchParams} from "react-router-dom";
import {IUserResetPasswordConfirm} from "../../../redux/types/user";

const ResetPasswordModal = () => {
  const [resetPassword, {isSuccess, isError, error, isLoading}] = useUsersResetPasswordConfirmMutation();
  const dispatch = useAppDispatch();
  const [errMessage, setErrMessage] = useState<string | null>(null);

  let [searchParams] = useSearchParams();
  const uid = searchParams?.get('uid');
  const token = searchParams?.get('token');


  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: {isDirty, isValid, errors},
  } = useForm<InputsType>({mode: 'all'});

  const {isOpen, modalId} = useAppSelector(state => state.modal)

  const isResetPass = modalId === 'resetPasswordModal' ? 'resetPasswordModal' : ''

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
  }, [isSuccess]);

  const onSubmit = handleSubmit(async (data) => {
    if (data.new_password !== data.re_new_password) {
      return setError('re_new_password', {type: 'string', message: 'Убедитесь, что пароли совпадают'});
    }
    await resetPassword({
      uid,
      token,
      new_password: data.password
    } as IUserResetPasswordConfirm);
  });


  const errorVisible = `${styles.resetPassword__error} ${styles.resetPassword__error_active}`;
  const errorInvisible = `${styles.resetPassword__error}`;
  return (
    <Modal isOpen={isOpen} modalId={isResetPass}>
      <h2 className={styles.resetPassword__title}>Восстановление пароля</h2>
      <form action="" className={styles.resetPassword__form} onSubmit={onSubmit}>
        <InputPassword name="password" placeholder="Введите новый пароль" register={register}
                       isInvalid={Boolean(errors.password)}/>
        <span className={errors?.password ? errorVisible : errorInvisible}>{errors?.password?.message || ''}</span>
        <InputPassword name="retrypassword" placeholder="Повторите новый пароль" register={register}
                       isInvalid={Boolean(errors.retrypassword)}/>
        <span
          className={errors?.retrypassword ? errorVisible : errorInvisible}>{errors?.retrypassword?.message || 'Ошибка!'}</span>

        <Button textBtn="Восстановить" type="submit" isValid={isValid} isDirty={isDirty}></Button>
      </form>
    </Modal>
  );
};

export default ResetPasswordModal;
