import styles from './RegisterModal.module.scss';
import Modal from '../Modal';
import { Link } from 'react-router-dom';
import Button from '../../Button/Button';
import InputEmail from '../../Inputs/InputEmail/InputEmail';
import InputPassword from '../../Inputs/InputPassword/InputPassword';
import InputCheckbox from '../../Inputs/InputCheckbox/InputCheckbox';
import { useEffect, useState } from 'react';
import { useRegisterUserMutation } from '../../../redux/services/authApi';
import { useForm } from 'react-hook-form';
import { InputsType } from '../../../pages/ProfilePage/Profile';
// import { isApiError } from '../../../utils/isApiError.tsx';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { closeModal, openModal } from '../../../redux/slices/modalsSlice';

const RegisterModal = () => {
  const dispatch = useAppDispatch();
  const [registerUser, { isLoading, isSuccess, isError, error }] = useRegisterUserMutation();
  const { isOpen, modalId } = useAppSelector((state) => state.modal);
  const isRegister = modalId === 'registerModal' ? 'registerModal' : '';
  const [errMessage, setErrMessage] = useState<string | null>(null);

  const handleAuthClick = () => {
    dispatch(closeModal());
    dispatch(openModal({ modalId: 'modalAuth' }));
  };

  useEffect(() => {
    console.log('registering user...');
    setErrMessage('')
    // if (isSuccess) {
    //   console.log('Registration successfull');
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
      console.log(error)
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
    <Modal isOpen={isOpen} modalId={isRegister}>
      <h2 className={styles.registerModal__title}>Регистрация</h2>
      <p className={styles.registerModal__text}>Уже есть аккаунт?</p>
      <Link to="" className={styles.registerModal__link} onClick={handleAuthClick}>
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
        <span className={errMessage ? errorVisible : errorRemoved}>{errMessage}</span>
        <Button textBtn="Зарегистрироваться" type="submit" isDirty={isDirty} isValid={isValid} />
      </form>
    </Modal>
  );
};

export default RegisterModal;
