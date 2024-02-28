import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { InputsType } from '../../../pages/ProfilePage/Profile';
import { useLoginMutation } from '../../../redux/services/authApi';
import { useLazyGetMeQuery, useLazyRetrieveUserQuery } from '../../../redux/services/userApi';
import { closeModal, openModal } from '../../../redux/slices/modalsSlice';
import { setIsLoggedIn, setIsSpecialist, setUserId } from '../../../redux/slices/userSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { PATH_CLIENTS } from '../../../utils/constants';
import { isApiError } from '../../../utils/isApiError';
import Button from '../../Button/Button';
import InputEmail from '../../Inputs/InputEmail/InputEmail';
import InputPassword from '../../Inputs/InputPassword/InputPassword';
import SocialIcons from '../../SocialIcons/SocialIcons';
import Modal from '../Modal';
import styles from './AuthModal.module.scss';

const AuthModal = () => {
  const navigate = useNavigate();
  const [errMessage, setErrMessage] = useState<string | null>(null);
  // const redirectTo = location.state?.from.pathname || '/';
  const [login, { isSuccess, isLoading, error }] = useLoginMutation();
  const { isOpen, modalId } = useAppSelector((state) => state.modal);
  const [getMe] = useLazyGetMeQuery();
  const [retriveUser] = useLazyRetrieveUserQuery();
  const dispatch = useAppDispatch();

  const isAuth = modalId === 'modalAuth' ? 'modalAuth' : '';

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
      navigate(PATH_CLIENTS);
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
      setErrMessage(error.data.detail || 'Вход не удался, повторите попытку позднее.');
    }
  }, [isLoading]);

  // ==== testing zone ====
  /* const { data, isLoading: isLoadings } = useGetAllUsersQuery(); //testing purposes
  useEffect(() => console.log(data), [isLoadings]); */
  // ======================

  const onSubmit = handleSubmit(async (data) => {
    await login({
      email: data.email,
      password: data.password,
    });
    if (isSuccess) {
      navigate(PATH_CLIENTS);
      dispatch(closeModal());
    }
  });

  const handleFoggotPassordClick = () => {
    dispatch(closeModal());
    dispatch(openModal({ modalId: 'foggotModal' }));
  };

  const handleRegistrationClick = () => {
    dispatch(closeModal());
    dispatch(openModal({ modalId: 'registerModal' }));
  };

  const errorVisible = `${styles.authModal__error} ${styles.authModal__error_active}`;
  const errorInvisible = `${styles.authModal__error}`;
  const errorRemoved = `${styles.authModal__error_removed}`;

  return (
    <Modal isOpen={isOpen} modalId={isAuth}>
      <h2 className={styles.authModal__title}>Добро пожаловать!</h2>
      <p className={styles.authModal__text}>Первый раз с нами?</p>
      <Link to="" className={styles.authModal__link} onClick={handleRegistrationClick}>
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
        <InputPassword name="password" placeholder="Пароль" register={register} isInvalid={Boolean(errors.password)} />
        <span className={errors?.password ? errorVisible : errorInvisible}>{errors?.password?.message || ''}</span>
        <span className={errMessage ? errorVisible : errorRemoved}>{errMessage}</span>
        <Link to="" className={styles.authModal__link} onClick={handleFoggotPassordClick}>
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
