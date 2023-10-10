import styles from './ForgotPasswordModal.module.scss';
import Modal from '../Modal';
import InputEmail from '../../Inputs/InputEmail/InputEmail';
import Button from '../../Button/Button';
import { useForm } from 'react-hook-form';
import { InputsType } from '../../../pages/ProfilePage/Profile';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { closeModal, openModal } from '../../../redux/slices/modalsSlice';

const ForgotPasswordModal = () => {
  const { isOpen, modalId } = useAppSelector(state => state.modal)
  const dispatch = useAppDispatch()

  const isFoggot = modalId === 'foggotModal' ? 'foggotModal' : ''
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid, errors },
  } = useForm<InputsType>({mode: 'all'});
  const onSubmit = handleSubmit((data) => {
    dispatch(closeModal())
    dispatch(openModal('resetPasswordModal'))
    console.log(data);
  });
  return (
    <Modal isOpen={isOpen} modalId={isFoggot}>
      <h2 className={styles.forgotPassword__title}>Восстановление пароля</h2>
      <p className={styles.forgotPassword__text}>
        Укажите адрес электронной почты, который вы использовали при регистрации. И мы вышлем инструкцию по
        восстановлению
      </p>
      <form action="" className={styles.forgotPassword__form} onSubmit={onSubmit}>
        <InputEmail name="email" placeholder="Электронная почта" register={register} isInvalid = {Boolean(errors.email)}/>
        <span className={errors?.email ? `${styles.forgotPassword__error} ${styles.forgotPassword__error_active}` : `${styles.forgotPassword__error}`}>{errors?.email?.message || ''}</span>
        <Button textBtn="Восстановить" type="submit" isValid={isValid} isDirty={isDirty}></Button>
      </form>
    </Modal>
  );
};

export default ForgotPasswordModal;
