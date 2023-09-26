import styles from './RegisterModal.module.scss';
import Modal from '../Modal';
import { Link } from 'react-router-dom';
import Button from '../../Button/Button';
import InputEmail from '../../Inputs/InputEmail/InputEmail';
import InputPassword from '../../Inputs/InputPassword/InputPassword';
import InputCheckbox from '../../Inputs/InputCheckbox/InputCheckbox';
import { useEffect } from 'react';
import { useRegisterUserMutation } from '../../../redux/api/authApi';

const RegisterModal = () => {
  const [registerUser, { isLoading, isSuccess }] = useRegisterUserMutation();

  function handleSubmit(evt: React.FormEvent) {
    evt.preventDefault();
    const target = evt.target as any;
    registerUser({
      email: target.email.value,
      password: target.password.value,
      re_password: target.rePassword.value,
    });
  }

  useEffect(() => {
    if (isSuccess) console.log('successful');
  }, [isLoading]);

  return (
    <Modal>
      <h2 className={styles.registerModal__title}>Регистрация</h2>
      <p className={styles.registerModal__text}>Уже есть аккаунт?</p>
      <Link to="/authModal" className={styles.registerModal__link}>
        Войти
      </Link>
      <form className={styles.registerModal__form} onSubmit={handleSubmit}>
        <InputEmail name="email" placeholder="Электронная почта" />
        <InputPassword name="password" placeholder="Придумайте пароль" minLength={8} maxLenght={30} />
        <InputPassword name="rePassword" placeholder="Повторите пароль" minLength={8} maxLenght={30} />
        <InputCheckbox />
        <Button textBtn="Зарегистрироваться" type="submit" isValid={true} isDirty={true}></Button>
      </form>
    </Modal>
  );
};

export default RegisterModal;
