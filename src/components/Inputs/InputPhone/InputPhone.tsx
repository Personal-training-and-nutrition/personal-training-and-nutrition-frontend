import styles from './InputPhone.module.scss';
import { formatToPhone } from '../../../utils/formatToPhone';

type Props = {
  name: string;
}

const InputPhone = ({ name }: Props) => {

  return (
    <div className={styles.inputTel__wrapper}>
      <label className={styles.inputTel__label} htmlFor='phone'>Телефон</label>
      <input className={styles.inputTel__input} type="tel" name={name}  placeholder='+7' onChange={formatToPhone} />
    </div>
  );
};

export default InputPhone;
