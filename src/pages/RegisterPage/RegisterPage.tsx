import styles from './RegisterPage.module.scss';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import InputEmail from '../../components/Inputs/InputEmail/InputEmail';
import InputPassword from '../../components/Inputs/InputPassword/InputPassword';
import InputCheckbox from '../../components/Inputs/InputCheckbox/InputCheckbox';
import { useEffect, useState } from 'react';
import { useRegisterUserMutation } from '../../redux/services/authApi';
import { useForm } from 'react-hook-form';
import { InputsType } from '../ProfilePage/Profile';
// import { isApiError } from '../../../utils/isApiError.tsx';
import { useAppDispatch } from '../../redux/store';
import { closeModal, openModal } from '../../redux/slices/modalsSlice';
import AuthPageLayout from '../../components/AuthPageLayout/AuthPageLayout';

const RegisterPage = () => {
  const dispatch = useAppDispatch();
  const [registerUser, { isLoading, isSuccess, isError, error }] = useRegisterUserMutation();
  const [errMessage, setErrMessage] = useState<string | null>(null);

  useEffect(() => {
    console.log('registering user...');
    setErrMessage('');
    // if (isSuccess) {
    //   console.log('registration successfull');
    // } else if (isApiError(error)) {
    //   if (error.data.email) {
    //     setError('email', { message: error.data.email });
    //   }
    //   if (error.data.password) {
    //     setError('password', { message: error.data.password });
    //   }
    // }
    if (isSuccess) {
      setTimeout(() => {
        dispatch(closeModal());
        dispatch(openModal({ modalId: 'modalAuth' }));
      }, 1000);
    }
    if (isError && !isSuccess) {
      console.log(error);
      setErrMessage(error?.data.detail || 'Что-то пошло не так.');
    }
  }, [isLoading, isError, isSuccess]);

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
    await registerUser({
      email: data.email,
      password: data.password,
      re_password: data.retrypassword,
    });
  });

  const errorVisible = `${styles.registerModal__error} ${styles.registerModal__error_active}`;
  const errorInvisible = `${styles.registerModal__error}`;
  const errorRemoved = `${styles.registerModal__error_removed}`;

  return (
    <AuthPageLayout text='pегистрация'>
      <h2 className={styles.registerPage__title}>Регистрация</h2>
      <p className={styles.registerPage__text}>Уже есть аккаунт?</p>
      <Link to="/sign-in" className={styles.registerPage__link}>
        Войти
      </Link>
      <form className={styles.registerPage__form} onSubmit={onSubmit}>
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
        <span className={errMessage ? errorVisible : errorRemoved}>{errMessage}</span>
        <Button textBtn="Зарегистрироваться" type="submit" isDirty={isDirty} isValid={isValid} />
      </form>
    </AuthPageLayout>
  );
};

export default RegisterPage;
