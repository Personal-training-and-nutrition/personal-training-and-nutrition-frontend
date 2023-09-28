import PlanCard from '../../components/PlanCard/PlanCard';
import TitleBlock from '../../components/TitleBlock/TitleBlock';
import styles from './MealPlans.module.scss';
import planImage from '../../assets/mealPlanImage.png';
import { Link } from 'react-router-dom';

function MealPlans() {
  return (
    <main className="App__container">
      <div className={styles.mealPlans}>
        <TitleBlock text="планы питания" />
        <div className={styles.mealPlans__list}>
          <Link to="/meal-plan" className={styles.mealPlans__link}>
            <PlanCard title="Минус 2кг (1 неделя)" date="Создан 28 сентября 2023" image={planImage} />
          </Link>
        </div>
      </div>
    </main>
  );
}

export default MealPlans;