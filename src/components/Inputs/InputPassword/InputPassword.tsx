/* eslint-disable no-useless-escape */
import { useState } from 'react';
import styles from './InputPassword.module.scss';
import { UseFormRegister } from 'react-hook-form';
import { InputsType } from '../../../pages/ProfilePage/Profile';

type Props = {
  name: string;
  placeholder: string;
  minLength?: number;
  maxLenght?: number;
  register: UseFormRegister<InputsType>;
  isInvalid: boolean;
};

const InputPassword = ({ name, placeholder, register, isInvalid }: Props) => {
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
          required: true,
          pattern:{value: /^([A-Za-z0-9\[\]\/\.\$\^\|\?\*\+\(\)\{\}\&\%\#\@\;\:]){8,25}$/g, message: 'Введите не менее 8 символов'},
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
