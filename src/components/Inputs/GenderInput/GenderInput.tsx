import styles from './GenderInput.module.scss';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

const GenderInput = <TFormValues extends FieldValues>({
  name,
  register,
}: {
  name: Path<TFormValues>;
  register: UseFormRegister<TFormValues>;
}) => {
  console.log();
  return (
    <div className={styles.gender__label}>
      <h3 className={styles.gender__title}>Пол</h3>
      <div className={styles.gender__wrap}>
        <label className={styles.gender__radio}>
          <input type="radio" value="1" {...register(name)} />
          <p>Женский</p>
        </label>
        <label className={styles.gender__radio}>
          <input type="radio" value="2" {...register(name)} />
          <p>Мужской</p>
        </label>
      </div>
    </div>
  );
};

export default GenderInput;
