import React, {useEffect, useState} from 'react';
import styles from "./Registration.module.scss";
import InputPassword from "../Inputs/InputPassword/InputPassword.tsx";
import InputCheckbox from "../Inputs/InputCheckbox/InputCheckbox.tsx";
import Button from "../Button/Button.tsx";
import {useAppDispatch} from "../../redux/store.ts";
import {useRegisterUserMutation} from "../../redux/services/authApi.ts";
import {closeModal, openModal} from "../../redux/slices/modalsSlice.ts";
import {useForm} from "react-hook-form";
import {InputsType} from "../../pages/ProfilePage/Profile.tsx";

const EnterPassword: React.FC = () => {

  const dispatch = useAppDispatch();
  const [registerUser, { isLoading, isSuccess, isError, error }] = useRegisterUserMutation();
  const [errMessage, setErrMessage] = useState<string | null>(null);

  useEffect(() => {
    console.log('registering user...');
    setErrMessage('');
    if (isSuccess) {
      setTimeout(() => {
        dispatch(closeModal());
        dispatch(openModal({ modalId: 'modalAuth' }));
      }, 1000);
    }
    if (isError && !isSuccess) {
      console.log(error);
      // setErrMessage(error?.data.detail || 'Что-то пошло не так.');
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

  const errorVisible = `${styles.registration__error} ${styles.enterPassword__error_active}`;
  const errorInvisible = `${styles.registration__error}`;
  const errorRemoved = `${styles.registration__error_removed}`;

  return (
    <>
      <h2 className={styles.registration__title}>Придумайте пароль</h2>
      <p className={styles.registration__text}>Пароль должен содержать от 8 до 25 знаков и может включать латиницу, цифры и любые спецсимволы</p>
      <form className={styles.registration__form} onSubmit={onSubmit}>
        <InputPassword
          name="password"
          placeholder="Пароль"
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
    </>
  );
};

export default EnterPassword;
