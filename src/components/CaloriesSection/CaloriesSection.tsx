import styles from './CaloriesSection.module.scss';
import { useLocation } from 'react-router-dom';
const CaloriesSection = () => {
  const location = useLocation();
  const unauthPage = location.pathname === '/workout-plan/unauth' || location.pathname === '/meal-plan/unauth';

  return (
    <section className={`${styles.caloriesSection__calories} ${unauthPage && styles.caloriesSection__unauth}`}>
      <div className={styles.caloriesSection__item}>
        <h4>Калории</h4>
        <p>1700 ккал</p>
      </div>
      <div className={styles.caloriesSection__item}>
        <h4>Белки</h4>
        <p>66 г</p>
      </div>
      <div className={styles.caloriesSection__item}>
        <h4>Жиры</h4>
        <p>54 г</p>
      </div>
      <div className={styles.caloriesSection__item}>
        <h4>Углеводы</h4>
        <p>146г</p>
      </div>
    </section>
  );
};
export default CaloriesSection;
