import { UseFormRegister } from 'react-hook-form';
import { InputsType } from '../../../pages/ProfilePage/Profile';
import styles from './InputText.module.scss';

type Props = {
  name: string;
  label: string;
  minLength?: number;
  maxLength?: number;
  placeholder?: string;
  register: UseFormRegister<InputsType>;
  textError?: string;
  isInvalid?: boolean;
};
const InputText = ({ name, label, minLength ,maxLength, placeholder, register, textError, isInvalid }: Props) => {

  return (
    <div className={styles.inputText__wrapper}>
      <label className={styles.inputText__label} htmlFor={name}>{label}</label>
      <input className={isInvalid ? `${styles.inputText__input} ${styles.inputText__input_invalid}` : styles.inputText__input} type="text" placeholder={placeholder} {...register(`${name}` as never, {required: textError, maxLength: maxLength, minLength: minLength})}/>
    </div>
  );
};

export default InputText;
