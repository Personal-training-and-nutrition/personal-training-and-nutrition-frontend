import styles from './AuthModal.module.scss';
import Modal from '../Modal';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '../../Button/Button';
import SocialIcons from '../../SocialIcons/SocialIcons';
import InputEmail from '../../Inputs/InputEmail/InputEmail';
import InputPassword from '../../Inputs/InputPassword/InputPassword';
import { useLoginMutation } from '../../../redux/services/authApi';
// import { useGetAllUsersQuery } from '../../../redux/api/userApi';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { InputsType } from '../../../pages/ProfilePage/Profile';

const AuthModal = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const redirectTo = location.state?.from.pathname || '/';
  const [login, { isSuccess, isLoading, isError, error }] = useLoginMutation();

  useEffect(() => {
    console.log('logging in...');
    if (isSuccess) {
      console.log('login successfull');
      navigate(redirectTo);
    } else if (isError) {
      console.error('login failed', error);
    }
  }, [isLoading]);

  // ==== testing zone ====
  /* const { data, isLoading: isLoadings } = useGetAllUsersQuery(); //testing purposes
  useEffect(() => console.log(data), [isLoadings]); */
  // ======================

  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid, errors },
  } = useForm<InputsType>({ mode: 'all' });
  const onSubmit = handleSubmit(async (data) => {
    try {
      await login({
        email: data.email,
        password: data.password,
      });
    } catch (err) {
      console.error('login failed', err);
    }
  });

  const errorVisible = `${styles.authModal__error} ${styles.authModal__error_active}`;
  const errorInvisible = `${styles.authModal__error}`;

  return (
    <Modal>
      <h2 className={styles.authModal__title}>Добро пожаловать!</h2>
      <p className={styles.authModal__text}>Первый раз с нами?</p>
      <Link to="/register" className={styles.authModal__link}>
        Зарегистрироваться
      </Link>
      <form className={styles.authModal__form} onSubmit={onSubmit}>
        <InputEmail
          name="email"
          placeholder="Электронная почта"
          register={register}
          isInvalid={Boolean(errors.email)}
        />
        <span className={errors?.email ? errorVisible : errorInvisible}>{errors?.email?.message || ''}</span>
        <InputPassword
          name="password"
          placeholder="Пароль"
          register={register}
          isInvalid={Boolean(errors.password)}
        />
        <span className={errors?.password ? errorVisible : errorInvisible}>{errors?.password?.message || ''}</span>
        <Link to="/password-recovery" className={styles.authModal__link}>
          Я не помню пароль
        </Link>
        <Button textBtn="Войти" type="submit" isDirty={isDirty} isValid={isValid}></Button>
      </form>
      <p className={`${styles.authModal__text} ${styles.authModal__text_center} `}>или использовать</p>
      <SocialIcons />
    </Modal>
  );
};

export default AuthModal;
