import styles from './ForgotPasswordModal.module.scss';
import Modal from '../Modal';
import InputEmail from '../../Inputs/InputEmail/InputEmail';
import Button from '../../Button/Button';
import { useForm } from 'react-hook-form';
import { InputsType } from '../../../pages/ProfilePage/Profile';

const ForgotPasswordModal = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors, isDirty, isValid },
  } = useForm<InputsType>({mode: 'all'});
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <Modal>
      <h2 className={styles.forgotPassword__title}>Восстановление пароля</h2>
      <p className={styles.forgotPassword__text}>
        Укажите адрес электронной почты, который вы использовали при регистрации. И мы вышлем инструкцию по
        восстановлению
      </p>
      <form action="" className={styles.forgotPassword__form} onSubmit={onSubmit}>
        <InputEmail name="email" placeholder="Электронная почта" register={register}/>
        <Button textBtn="Воссттановить" type="submit" isValid={true} isDirty={true}></Button>
      </form>
    </Modal>
  );
};

export default ForgotPasswordModal;
