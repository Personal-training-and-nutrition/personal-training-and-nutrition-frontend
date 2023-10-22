/* eslint-disable no-useless-escape */
import styles from './InputPhone.module.scss';
import { formatToPhone } from '../../../utils/formatToPhone';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { InputsType } from '../../../pages/ProfilePage/Profile';
import { useLocation } from 'react-router-dom';

type Props<TFormValues extends FieldValues> = {
  name: Path<TFormValues>;
  isInvalid?: boolean;
  register: UseFormRegister<TFormValues>;
  onBlur?: () => void;
};

const InputPhone = <TFormValues extends FieldValues>({ name, register, isInvalid, onBlur }: Props<TFormValues>) => {
  const { pathname } = useLocation();

  return (
    <div className={styles.inputTel__wrapper}>
      <label
        className={pathname === '/client/new' ? `${styles.inputTel__label}` : `${styles.inputTel__label_style}`}
        htmlFor="phone"
      >
        Телефон
      </label>
      <input
        className={isInvalid ? `${styles.inputTel__input} ${styles.inputTel__input_invalid}` : styles.inputTel__input}
        type="tel"
        {...register(name, {
          pattern: { value: /\+[7]\s\(\d{3}\)\s\d{3}\-\d{2}\-\d{2}/, message: 'Введите корректный номер телефона' },
          onBlur: onBlur,
        })}
        placeholder="+7"
        onChange={formatToPhone}
      />
    </div>
  );
};

export default InputPhone;
