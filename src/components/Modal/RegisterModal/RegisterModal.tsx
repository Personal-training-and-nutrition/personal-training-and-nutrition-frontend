import styles from './RegisterModal.module.scss';
import Modal from '../Modal';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '../../Button/Button';
import InputEmail from '../../Inputs/InputEmail/InputEmail';
import InputPassword from '../../Inputs/InputPassword/InputPassword';
import InputCheckbox from '../../Inputs/InputCheckbox/InputCheckbox';
import { useEffect } from 'react';
import { useRegisterUserMutation } from '../../../redux/services/authApi';
import { useForm } from 'react-hook-form';
import { InputsType } from '../../../pages/ProfilePage/Profile.tsx';

const RegisterModal = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const redirectTo = location.state?.from.pathname || '/login';

  const [registerUser, { isLoading, isSuccess }] = useRegisterUserMutation();

  useEffect(() => {
    console.log('logging in...');
    if (isSuccess) {
      console.log('login successfull');
      navigate(redirectTo);
    }
  }, [isLoading]);

  const {
    register,
    handleSubmit,
    setError,
    formState: { isDirty, isValid, errors },
  } = useForm<InputsType>({ mode: 'all' });

  const onSubmit = handleSubmit(async (data) => {
    if (data.password !== data.retrypassword) {
      return setError('retrypassword', { type: 'string', message: 'Убедитесь, что пароли совпадают' });
    }
    try {
      await registerUser({
        email: data.email,
        password: data.password,
        re_password: data.retrypassword,
      });
    } catch (err) {
      console.error('register failed', err);
    }
  });
  const errorVisible = `${styles.registerModal__error} ${styles.registerModal__error_active}`;
  const errorInvisible = `${styles.registerModal__error}`;
  return (
    <Modal>
      <h2 className={styles.registerModal__title}>Регистрация</h2>
      <p className={styles.registerModal__text}>Уже есть аккаунт?</p>
      <Link to="/login" className={styles.registerModal__link}>
        Войти
      </Link>
      <form className={styles.registerModal__form} onSubmit={onSubmit}>
        <InputEmail
          name="email"
          placeholder="Электронная почта"
          register={register}
          isInvalid={Boolean(errors.email)}
        />
        <span className={errors?.email ? errorVisible : errorInvisible}>{errors?.email?.message || ''}</span>
        <InputPassword
          name="password"
          placeholder="Придумайте пароль"
          register={register}
          isInvalid={Boolean(errors.password)}
        />
        <span className={errors?.password ? errorVisible : errorInvisible}>{errors?.password?.message || ''}</span>
        <InputPassword
          name="retrypassword"
          placeholder="Повторите пароль"
          register={register}
          isInvalid={Boolean(errors.retrypassword)}
        />
        <span className={errors?.retrypassword ? errorVisible : errorInvisible}>
          {errors?.retrypassword?.message || ''}
        </span>
        <InputCheckbox register={register} />
        <Button textBtn="Зарегистрироваться" type="submit" isDirty={isDirty} isValid={isValid} />
      </form>
    </Modal>
  );
};

export default RegisterModal;
