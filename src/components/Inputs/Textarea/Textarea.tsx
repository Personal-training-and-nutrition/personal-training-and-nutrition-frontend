import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import styles from './Textarea.module.scss';

type Props<TFormValues extends FieldValues> = {
  placeholder: string;
  name: Path<TFormValues>;
  register: UseFormRegister<TFormValues>;
  maxLength: number;
  minLength: number;
};

const Textarea = <TFormValues extends FieldValues>({
  placeholder,
  name,
  register,
  maxLength,
  minLength,
}: Props<TFormValues>) => {
  return (
    <>
      <textarea
        className={styles.textarea__input}
        placeholder={placeholder}
        {...register(name, {
          maxLength: {
            value: maxLength,
            message: 'error message',
          },
          minLength: {
            value: minLength,
            message: 'error message',
          },
        })}
      ></textarea>
    </>
  );
};

export default Textarea;
