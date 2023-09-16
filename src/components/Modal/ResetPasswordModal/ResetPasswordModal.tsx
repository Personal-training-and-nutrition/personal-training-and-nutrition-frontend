import Button from '../../Button/Button';
import InputPassword from '../../Inputs/InputPassword/InputPassword';
import Modal from '../Modal';
import styles from './ResetPasswordModal.module.scss';

const ResetPasswordModal = () => {
  return (
    <Modal>
      <h2 className={styles.resetPassword__title}>Восстановление пароля</h2>
      <form action="" className={styles.resetPassword__form}>
        <InputPassword name="newPass" placeholder="Введите новый пароль" minLength={8} maxLenght={30} />
        <InputPassword name="newPassAgain" placeholder="Повторите новый пароль" minLength={8} maxLenght={30} />
        <Button textBtn="Закрыть" type="submit" isValid={true} isDirty={true}></Button>
      </form>
    </Modal>
  );
};

export default ResetPasswordModal;
