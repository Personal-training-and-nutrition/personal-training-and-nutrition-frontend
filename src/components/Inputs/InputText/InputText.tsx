import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import styles from './InputText.module.scss';

type Props<TFormValues extends FieldValues> = {
  name: Path<TFormValues>;
  label: string;
  minLength?: number;
  maxLength?: number;
  placeholder?: string;
  register: UseFormRegister<TFormValues>;
  textError?: string;
  isInvalid?: boolean;
  textErrorPattern?: string;
  pattern?: RegExp;
};
const InputText = <TFormValues extends FieldValues>({
  name,
  label,
  maxLength,
  minLength,
  placeholder,
  register,
  textError,
  textErrorPattern,
  pattern,
  isInvalid,
}: Props<TFormValues>) => {
  return (
    <div className={styles.inputText__wrapper}>
      <label className={styles.inputText__label} htmlFor={name}>
        {label}
      </label>
      <input
        className={
          isInvalid ? `${styles.inputText__input} ${styles.inputText__input_invalid}` : styles.inputText__input
        }
        type="text"
        placeholder={placeholder}
        {...register(name, {
          required: textError || '',
          maxLength: { value: maxLength!, message: textError || '' },
          minLength: { value: minLength!, message: textError || '' },
          pattern: {
            value: pattern!,
            message: textErrorPattern || '',
          },
        })}
      />
    </div>
  );
};

export default InputText;
