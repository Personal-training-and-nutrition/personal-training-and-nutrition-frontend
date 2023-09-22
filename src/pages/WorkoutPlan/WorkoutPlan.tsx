import TitleBlock from '../../components/TitleBlock/TitleBlock';
import styles from './WorkoutPlan.module.scss';
import { tempWorkoutPlan } from '../../utils/constants';
import PlanReportBlock from '../../components/PlanReportBlock/PlanReportBlock';
import DescriptionBlock from '../../components/DescriptionBlock/DescriptionBlock';

function WorkoutPlan() {
  return (
    <div className={styles.workoutPlan}>
      <TitleBlock text="план тренировок" isBack />

      <div className={styles.workoutPlan__header}>
        <h1 className={styles.workoutPlan__mainTitle}>{tempWorkoutPlan[0].name}</h1>
        <DescriptionBlock title="Рекомендации">
          Смело пиши мне в любое время, делись ощущениями, если что-то идет не так, не переживай, скорректируем)
        </DescriptionBlock>
      </div>

      {tempWorkoutPlan[0].training.map((plan, index) => {
        return (
          <PlanReportBlock
            isLoggedIn={true}
            key={index}
            plan={plan}
            text="Твой план тренировки на этот день. Поделись ощущениями в конце."
          />
        );
      })}

      <button className={styles.workoutPlan__deleteBtn}>Удалить</button>
    </div>
  );
}

export default WorkoutPlan;
