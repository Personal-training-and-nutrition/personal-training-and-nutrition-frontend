import styles from './GenderInput.module.scss';
import { UseFormRegister } from 'react-hook-form';
import { InputsType } from '../../../pages/ProfilePage/Profile';

const GenderInput = ({ register }: { register: UseFormRegister<InputsType> }) => {
  console.log();
  return (
    <div className={styles.gender__label}>
      <h3 className={styles.gender__title}>Пол</h3>
      <div className={styles.gender__wrap}>
        <label className={styles.gender__radio}>
          <input type="radio" value="1" {...register('gender')} />
          <p>Женский</p>
        </label>
        <label className={styles.gender__radio}>
          <input type="radio" value="2" {...register('gender')} />
          <p>Мужской</p>
        </label>
      </div>
    </div>
  );
};

export default GenderInput;
