import styles from './ForgotPasswordModal.module.scss';
import Modal from '../Modal';
import InputEmail from '../../Inputs/InputEmail/InputEmail';
import Button from '../../Button/Button';

const ForgotPasswordModal = () => {
  return (
    <Modal>
      <h2 className={styles.forgotPassword__title}>Восстановление пароля</h2>
      <p className={styles.forgotPassword__text}>
        Укажите адрес электронной почты, который вы использовали при регистрации. И мы вышлем инструкцию по
        восстановлению
      </p>
      <form action="" className={styles.forgotPassword__form}>
        <InputEmail name="email" placeholder="Электронная почта" />
        <Button textBtn="Воссттановить" type="submit" isValid={true} isDirty={true}></Button>
      </form>
    </Modal>
  );
};

export default ForgotPasswordModal;
