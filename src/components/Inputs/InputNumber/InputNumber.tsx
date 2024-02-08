import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import styles from './InputNumber.module.scss';

type Props<TFormValues extends FieldValues> = {
  name: Path<TFormValues>;
  label: string;
  placeholder: string;
  register: UseFormRegister<TFormValues>;
  textError?: string;
  maxValue?: number;
  isInvalid?: boolean;
};

const InputNumber = <TFormValues extends FieldValues>({
  name,
  label,
  placeholder,
  register,
  maxValue,
  textError,
  isInvalid,
}: Props<TFormValues>) => {
  return (
    <div className={styles.inputNum__wrapper}>
      <label className={styles.inputNum__label} htmlFor={name}>
        {label}
      </label>
      <input
        className={isInvalid ? `${styles.inputNum__input} ${styles.inputNum__input_invalid}` : styles.inputNum__input}
        type="number"
        placeholder={placeholder}
        {...register(name, {
          maxLength: 3,
          minLength: 1,
          max: { value: maxValue!, message: textError || '' },
        })}
      />
    </div>
  );
};

export default InputNumber;
