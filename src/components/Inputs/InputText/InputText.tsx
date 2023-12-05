import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import styles from './InputText.module.scss';

type Props<TFormValues extends FieldValues> = {
  name: Path<TFormValues>;
  label?: string;
  minLength?: number;
  maxLength?: number;
  placeholder?: string;
  register: UseFormRegister<TFormValues>;
  textError?: string;
  isInvalid?: boolean;
};
const InputText = <TFormValues extends FieldValues>({
  name,
  label,
  minLength,
  maxLength,
  placeholder,
  register,
  textError,
  isInvalid,
}: Props<TFormValues>) => {
  return (
    <div className={styles.inputText__wrapper}>
      {label &&
        <label className={styles.inputText__label} htmlFor={name}>
        {label}
      </label>}
      <input
        className={
          isInvalid ? `${styles.inputText__input} ${styles.inputText__input_invalid}` : styles.inputText__input
        }
        type="text"
        placeholder={placeholder}
        {...register(name, { required: textError, maxLength: maxLength, minLength: minLength })}
      />
    </div>
  );
};

export default InputText;
