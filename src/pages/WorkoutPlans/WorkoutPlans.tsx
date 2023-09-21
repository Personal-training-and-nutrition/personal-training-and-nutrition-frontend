import PlanCard from '../../components/PlanCard/PlanCard';
import TitleBlock from '../../components/TitleBlock/TitleBlock';
import styles from './WorkoutPlans.module.scss';
import planImage from '../../assets/images/client-card/workoutPlanImage.png';

function WorkoutPlans() {
  return (
    <div className={styles.workoutPlans}>
      <TitleBlock text="планы тренировок" />
      <div className={styles.workoutPlans__list}>
        <PlanCard title="Входим в ритм!" date="Создан 27 августа 2023" image={planImage} />
        <PlanCard title="Входим в ритм!" date="Создан 27 августа 2023" image={planImage} />
        <PlanCard title="Выходим из ритма!" date="Создан 27 августа 2023" image={planImage} />
      </div>
    </div>
  );
}

export default WorkoutPlans;
