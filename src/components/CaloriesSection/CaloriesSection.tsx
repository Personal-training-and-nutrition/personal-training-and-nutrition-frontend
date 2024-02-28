import { useLocation } from 'react-router-dom';
import { PATH_MEAL_PLAN_UNAUTH, PATH_WORKOUT_PLAN_UNAUTH } from '../../utils/constants';
import styles from './CaloriesSection.module.scss';

type CaloriesProps = {
  kkal?: number;
  protein?: number;
  fat?: number;
  carbo?: number;
};

const CaloriesSection = ({ kkal, protein, fat, carbo }: CaloriesProps) => {
  const location = useLocation();
  const unauthPage =
    location.pathname === `${PATH_WORKOUT_PLAN_UNAUTH}` || location.pathname === `${PATH_MEAL_PLAN_UNAUTH}`;

  return (
    <section className={`${styles.caloriesSection__calories} ${unauthPage && styles.caloriesSection__unauth}`}>
      <div className={styles.caloriesSection__item}>
        <h4>Калории</h4>
        <p>{kkal} ккал</p>
      </div>
      <div className={styles.caloriesSection__item}>
        <h4>Белки</h4>
        <p>{protein} г</p>
      </div>
      <div className={styles.caloriesSection__item}>
        <h4>Жиры</h4>
        <p>{fat} г</p>
      </div>
      <div className={styles.caloriesSection__item}>
        <h4>Углеводы</h4>
        <p>{carbo} г</p>
      </div>
    </section>
  );
};
export default CaloriesSection;
