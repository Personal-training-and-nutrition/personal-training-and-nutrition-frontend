import styles from './GenderInput.module.scss';
import { UseFormRegister } from 'react-hook-form';
import { InputsType } from '../../../pages/ProfilePage/Profile';

const GenderInput = ({ register }: { register: UseFormRegister<InputsType> }) => {
  console.log();
  return (
    <div className={styles.gender__label}>
      <span className={styles.gender__title_big}>Пол</span>
      <div className={styles.gender__wrap}>
        <label className={styles.gender__radio}>
          <input type="radio" checked={true} value="Женский" {...register('gender')} />
          <p>Женский</p>
        </label>
        <label className={styles.gender__radio}>
          <input type="radio" value="Мужской" {...register('gender')} />
          <p>Мужской</p>
        </label>
      </div>
    </div>
  );
};

export default GenderInput;
