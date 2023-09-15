import styles from './ForgotPasswordTooltipModal.module.scss';
import Modal from '../Modal';
import Button from '../../Button/Button';

const ForgotPasswordTooltipModal = () => {
  return (
    <Modal>
      <div className={styles.forgotPasswordTool__wrapper}>
        <h2 className={styles.forgotPasswordTool__title}>Восстановление пароля</h2>
        <p className={styles.forgotPasswordTool__text}>
          Ссылка на восстановление пароля отправлена на ваш email. Проверьте почту
        </p>
        <Button textBtn="Закрыть" type="button" isValid={true} isDirty={true}></Button>
      </div>
    </Modal>
  );
};

export default ForgotPasswordTooltipModal;
