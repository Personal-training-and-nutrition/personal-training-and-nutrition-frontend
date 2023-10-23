import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { InputsType } from '../../../pages/ProfilePage/Profile';
import styles from './Textarea.module.scss';

type Props<TFormValues extends FieldValues> = {
  placeholder: string;
  name: Path<TFormValues>;
  register: UseFormRegister<TFormValues>;
};

const Textarea = <TFormValues extends FieldValues>({ placeholder, name, register }: Props<TFormValues>) => {
  return (
    <>
      <textarea className={styles.textarea__input} placeholder={placeholder} {...register(name)}></textarea>
    </>
  );
};

export default Textarea;
