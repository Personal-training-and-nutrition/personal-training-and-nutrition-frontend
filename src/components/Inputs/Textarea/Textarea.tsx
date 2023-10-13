import { UseFormRegister } from 'react-hook-form';
import { InputsType } from '../../../pages/ProfilePage/Profile';
import styles from './Textarea.module.scss';

type Props = {
  placeholder: string;
  name: string;
  register: UseFormRegister<InputsType>;
};

const Textarea = ({ placeholder, name, register }: Props) => {
  return (
    <>
      <textarea
        className={styles.textarea__input}
        placeholder={placeholder}
        {...register(`${name}` as never)}
      ></textarea>
    </>
  );
};

export default Textarea;
