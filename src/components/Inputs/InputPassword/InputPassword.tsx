/* eslint-disable no-useless-escape */
import { useState } from 'react';
import styles from './InputPassword.module.scss';
import { UseFormRegister } from 'react-hook-form';
import { InputsType } from '../../../pages/ProfilePage/Profile';

type Props = {
  name: string;
  placeholder: string;
  minLength: number;
  maxLenght: number;
  register: UseFormRegister<InputsType>;
  isInvalid: boolean;
  textError?: string;
};

const InputPassword = ({ name, placeholder, minLength, maxLenght, register, isInvalid, textError }: Props) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  function onShowBtnClick() {
    setIsShowPassword(!isShowPassword);
  }
  return (
    <div className={styles.inputs__wrapper}>
      <input
        type={!isShowPassword ? 'password' : 'text'}
        placeholder={placeholder}
        className={
          isInvalid ? `${styles.inputs__password} ${styles.inputs__password_invalid}` : styles.inputs__password
        }
        {...register(`${name}` as never, {
          required: textError,
          minLength: {value: minLength, message: 'Пароль должен быть не менее 8 символов'},
          maxLength: {value: maxLenght, message: 'Пароль должен быть не более 25 символов'},
          pattern: /[A-Za-z\d\[\]\/\.\$\^\|\?\*\+\(\)\{\}]*/gi,
        })}
      />
      <button
        type="button"
        className={isShowPassword ? `${styles.inputs__showBtn}` : `${styles.inputs__hideBtn}`}
        onClick={onShowBtnClick}
      ></button>
    </div>
  );
};

export default InputPassword;
