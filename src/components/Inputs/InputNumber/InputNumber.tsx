import { UseFormRegister } from 'react-hook-form';
import { InputsType } from '../../../pages/ProfilePage/Profile';
import styles from './InputNumber.module.scss';

type Props = {
  name: string;
  label: string;
  placeholder: string;
  register: UseFormRegister<InputsType>
};

const InputNumber = ({ name, label, placeholder, register }: Props) => {
  return (
    <div className={styles.inputNum__wrapper}>
      <label className={styles.inputNum__label} htmlFor={name}>{label}</label>
      <input className={styles.inputNum__input} type="number" placeholder={placeholder} {...register(`${name}` as never, { maxLength: 3, minLength: 2})}/>
    </div>
  );
};

export default InputNumber;
