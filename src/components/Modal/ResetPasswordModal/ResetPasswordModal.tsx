import { useForm } from 'react-hook-form';
import { InputsType } from '../../../pages/ProfilePage/Profile';
import Button from '../../Button/Button';
import InputPassword from '../../Inputs/InputPassword/InputPassword';
import Modal from '../Modal';
import styles from './ResetPasswordModal.module.scss';

const ResetPasswordModal = () => {
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm<InputsType>({mode: 'all'});
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <Modal>
      <h2 className={styles.resetPassword__title}>Восстановление пароля</h2>
      <form action="" className={styles.resetPassword__form} onSubmit={onSubmit}>
        <InputPassword name="newPass" placeholder="Введите новый пароль" minLength={8} maxLenght={30} register={register}/>
        <InputPassword name="newPassAgain" placeholder="Повторите новый пароль" minLength={8} maxLenght={30} register={register}/>
        <Button textBtn="Закрыть" type="submit" isValid={isValid} isDirty={isDirty}></Button>
      </form>
    </Modal>
  );
};

export default ResetPasswordModal;
