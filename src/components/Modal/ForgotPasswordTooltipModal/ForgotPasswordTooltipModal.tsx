import styles from './ForgotPasswordTooltipModal.module.scss';
import Modal from '../Modal';
import Button from '../../Button/Button';
import {useAppDispatch, useAppSelector} from "../../../redux/store.ts";
import {closeModal} from "../../../redux/slices/modalsSlice.ts";
import {useEffect} from "react";

const ForgotPasswordTooltipModal = () => {

  const dispatch = useAppDispatch();

  const {isOpen, modalId} = useAppSelector(state => state.modal)
  const isForgotPass = modalId === 'forgotPasswordTooltipModal' ? 'forgotPasswordTooltipModal' : ''

  useEffect(() => {
    setTimeout(() => dispatch(closeModal()), 5000)
  }, [isForgotPass])

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
