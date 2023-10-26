import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import styles from './InputNumber.module.scss';

type Props<TFormValues extends FieldValues> = {
  name: Path<TFormValues>;
  label: string;
  placeholder: string;
  register: UseFormRegister<TFormValues>;
};

const InputNumber = <TFormValues extends FieldValues>({ name, label, placeholder, register }: Props<TFormValues>) => {
  return (
    <div className={styles.inputNum__wrapper}>
      <label className={styles.inputNum__label} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.inputNum__input}
        type="number"
        placeholder={placeholder}
        {...register(name, { maxLength: 3, minLength: 1 })}
      />
    </div>
  );
};

export default InputNumber;
