/* eslint-disable no-useless-escape */
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { InputsType } from '../../../pages/ProfilePage/Profile';
import styles from './InputEmail.module.scss';

type Props<TFormValues extends FieldValues> = {
  name: Path<TFormValues>;
  placeholder: string;
  isLabel?: boolean;
  label?: string;
  register: UseFormRegister<TFormValues>;
  isInvalid: boolean;
};

const InputEmail = <TFormValues extends FieldValues>({
  name,
  placeholder,
  isLabel,
  label,
  register,
  isInvalid,
}: Props<TFormValues>) => {
  return (
    <>
      {isLabel ? (
        <div className={styles.inputs__wrapper}>
          <label className={styles.inputs__label} htmlFor="phone">
            {label}
          </label>
          <input
            className={isInvalid ? `${styles.inputs__input} ${styles.inputs__input_invalid}` : styles.inputs__input}
            type="text"
            placeholder={placeholder}
            {...register(`${name}` as never, {
              required: true,
              pattern: {
                value: /[\w\.\-]+@[\w\.\-]+\.[\w\.\-]{2,}/gi,
                message: 'Введите корректный Email',
              },
            })}
          />
        </div>
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          className={isInvalid ? `${styles.inputs__email} ${styles.inputs__email_invalid}` : styles.inputs__email}
          {...register(name, {
            required: true,
            pattern: {
              value: /[\w\.\-]+@[\w\.\-]+\.[\w\.\-]{2,}/gi,
              message: 'Введите корректный Email',
            },
          })}
        />
      )}
    </>
  );
};

export default InputEmail;
