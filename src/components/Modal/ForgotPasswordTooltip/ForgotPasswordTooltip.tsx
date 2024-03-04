import { closeModal } from '../../../redux/slices/modalsSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import Button from '../../Button/Button';
import Modal from '../Modal';
import styles from './ForgotPasswordTooltip.module.scss';

const ForgotPasswordTooltipModal = () => {
  const dispatch = useAppDispatch();

  const { isOpen, modalId } = useAppSelector((state) => state.modal);
  const isForgotPass = modalId === 'forgotPasswordTooltipModal' ? 'forgotPasswordTooltipModal' : '';

  const handleClick = () => {
    dispatch(closeModal());
  };

  return (
    <Modal isOpen={isOpen} modalId={isForgotPass}>
      <div className={styles.forgotPasswordTool__wrapper}>
        <h2 className={styles.forgotPasswordTool__title}>Восстановление пароля</h2>
        <p className={styles.forgotPasswordTool__text}>
          Ссылка на восстановление пароля отправлена на ваш email. Проверьте почту
        </p>
        <Button onCLick={handleClick} textBtn="Закрыть" type="button" isValid={true} isDirty={true}></Button>
      </div>
    </Modal>
  );
};

export default ForgotPasswordTooltipModal;
