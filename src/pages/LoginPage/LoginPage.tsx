import styles from './LoginPage.module.scss';
// import Modal from '../Modal';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import SocialIcons from '../../components/SocialIcons/SocialIcons';
import InputEmail from '../../components/Inputs/InputEmail/InputEmail';
import InputPassword from '../../components/Inputs/InputPassword/InputPassword';
import { useLoginMutation } from '../../redux/services/authApi';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { InputsType } from '../ProfilePage/Profile';
import { isApiError } from '../../utils/isApiError';
import { useAppDispatch } from '../../redux/store';
import { closeModal, openModal } from '../../redux/slices/modalsSlice';
import { setIsLoggedIn, setIsSpecialist, setUserId } from '../../redux/slices/userSlice';
import { useLazyGetMeQuery, useLazyRetrieveUserQuery } from '../../redux/services/userApi';
import AuthPageLayout from '../../components/AuthPageLayout/AuthPageLayout';

const LoginPage = () => {
  const navigate = useNavigate();
  const [errMessage, setErrMessage] = useState<string | null>(null);
  const [login, { isSuccess, isLoading, error }] = useLoginMutation();
  const [getMe] = useLazyGetMeQuery();
  const [retriveUser] = useLazyRetrieveUserQuery();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid, errors },
  } = useForm<InputsType>({ mode: 'all' });

  useEffect(() => {
    console.log('logging in...');
    setErrMessage(null);
    if (isSuccess) {
      console.log('login successfull');
      navigate('/clients');
      dispatch(closeModal());
      getMe()
        .unwrap()
        .then((res) => {
          dispatch(setUserId(res.id));
          dispatch(setIsLoggedIn(true));
          retriveUser(res.id)
            .unwrap()
            .then((userData) => {
              dispatch(setIsSpecialist(userData.is_specialist!));
            });
        });
    } else if (isApiError(error)) {
      // setErrMessage(error.data.detail || 'Вход не удался, повторите попытку позднее.');
    }
  }, [isLoading]);

  const onSubmit = handleSubmit(async (data) => {
    await login({
      email: data.email,
      password: data.password,
    });
    if (isSuccess) {
      navigate('/clients');
      dispatch(closeModal());
    }
  });

  const handleFoggotPassordClick = () => {
    dispatch(closeModal());
    dispatch(openModal({ modalId: 'foggotModal' }));
  };

  const errorVisible = `${styles.loginPage__error} ${styles.loginPage__error_active}`;
  const errorInvisible = `${styles.loginPage__error}`;
  const errorRemoved = `${styles.loginPage__error_removed}`;

  return (
    <AuthPageLayout text='вход'>
      <h2 className={styles.loginPage__title}>Добро пожаловать!</h2>
      <p className={styles.loginPage__text}>Первый раз с нами?</p>
      <Link to="/sign-up" className={styles.loginPage__link}>
        Зарегистрироваться
      </Link>
      <form className={styles.loginPage__form} onSubmit={onSubmit}>
        <InputEmail
          name="email"
          placeholder="Электронная почта"
          register={register}
          isInvalid={Boolean(errors.email)}
        />
        <span className={errors?.email ? errorVisible : errorInvisible}>{errors?.email?.message || ''}</span>
        <InputPassword name="password" placeholder="Пароль" register={register} isInvalid={Boolean(errors.password)} />
        <span className={errors?.password ? errorVisible : errorInvisible}>{errors?.password?.message || ''}</span>
        <span className={errMessage ? errorVisible : errorRemoved}>{errMessage}</span>
        <Link to="" className={styles.loginPage__link} onClick={handleFoggotPassordClick}>
          Я не помню пароль
        </Link>
        <Button textBtn="Войти" type="submit" isDirty={isDirty} isValid={isValid}></Button>
      </form>
      <p className={`${styles.loginPage__text} ${styles.loginPage__text_center} `}>или использовать</p>
      <SocialIcons />
    </AuthPageLayout>
  );
};

export default LoginPage;
