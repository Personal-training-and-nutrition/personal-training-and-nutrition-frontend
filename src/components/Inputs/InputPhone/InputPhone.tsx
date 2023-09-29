import styles from './InputPhone.module.scss';
import { formatToPhone } from '../../../utils/formatToPhone';
import { UseFormRegister } from 'react-hook-form';
import { InputsType } from '../../../pages/ProfilePage/Profile';
import { useLocation } from 'react-router-dom';

type Props = {
  name: string;
  isInvalid?: boolean;
  register: UseFormRegister<InputsType>
}

const InputPhone = ({ name, register, isInvalid }: Props) => {
const { pathname } = useLocation()

  return (
    <div className={styles.inputTel__wrapper}>
      <label className={pathname === '/client/new' ? `${styles.inputTel__label}` : `${styles.inputTel__label_style}`} htmlFor='phone'>Телефон</label>
      <input className={isInvalid ? `${styles.inputTel__input} ${styles.inputTel__input_invalid}` : styles.inputTel__input} type="tel" {...register(`${name}` as never, {required: true})}  placeholder='+7' onChange={formatToPhone} />
    </div>
  );
};

export default InputPhone;
