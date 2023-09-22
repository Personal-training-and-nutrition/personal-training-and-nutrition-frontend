import PlanCard from '../../components/PlanCard/PlanCard';
import TitleBlock from '../../components/TitleBlock/TitleBlock';
import styles from './WorkoutPlans.module.scss';
import planImage from '../../assets/images/client-card/workoutPlanImage.png';
import { Link } from 'react-router-dom';

function WorkoutPlans() {
  return (
    <main className="App__container">
    <div className={styles.workoutPlans}>
      <TitleBlock text="планы тренировок" />
      <div className={styles.workoutPlans__list}>
        <Link to='/workout-plan' className={styles.workoutPlans__link}><PlanCard title="Входим в ритм!" date="Создан 27 августа 2023" image={planImage} /></Link>
        <Link to='/workout-plan' className={styles.workoutPlans__link}><PlanCard title="Входим в ритм!" date="Создан 27 августа 2023" image={planImage} /></Link>
        <Link to='/workout-plan' className={styles.workoutPlans__link}><PlanCard title="Входим в ритм!" date="Создан 27 августа 2023" image={planImage} /></Link>
      </div>
    </div>
    </main>
  );
}

export default WorkoutPlans;
