import styles from './InputRecommendation.module.scss';
import { UseFormRegister } from 'react-hook-form';
import { PlanInputType } from '../../PlanPageLayot/PlanPageLayot';

const Recommendation = ({ register }: { register: UseFormRegister<PlanInputType> }) => {
  return (
    <label className={styles.recommendation__label}>
      <h3 className={styles.recommendation__title}>Рекомендации</h3>
      <textarea
        className={styles.recommendation__input}
        {...register('describe')}
        placeholder="Напишите рекомендации"
      />
    </label>
  );
};
export default Recommendation;
