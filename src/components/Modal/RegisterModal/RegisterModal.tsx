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

import { useForm } from 'react-hook-form';
import { InputsType } from '../../../pages/ProfilePage/Profile';

const RegisterModal = () => {
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
      <h2 className={styles.registerModal__title}>Регистрация</h2>
      <p className={styles.registerModal__text}>Уже есть аккаунт?</p>
      <Link to="/login" className={styles.registerModal__link}>
        Войти
      </Link>
      <form className={styles.registerModal__form} onSubmit={handleSubmit}>
        <InputEmail name="email" placeholder="Электронная почта" register={register}/>
        <InputPassword name="password" placeholder="Придумайте пароль" minLength={8} maxLenght={30} register={register}/>
        <InputPassword name="retrypassword" placeholder="Повторите пароль" minLength={8} maxLenght={30} register={register}/>
        <InputCheckbox register={register} />
        <Button textBtn="Зарегистрироваться" type="submit" isDirty={isDirty} isValid={isValid}/>
      </form>
    </Modal>
  );
};

export default RegisterModal;
