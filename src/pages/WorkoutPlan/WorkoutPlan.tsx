import TitleBlock from '../../components/TitleBlock/TitleBlock';
import styles from './WorkoutPlan.module.scss';
import { tempWorkoutPlan } from '../../utils/constants';
import PlanReportBlock from '../../components/PlanReportBlock/PlanReportBlock';
import DescriptionBlock from '../../components/DescriptionBlock/DescriptionBlock';
import { useRetrieveTrainingPlanQuery } from '../../redux/services/trainingApi';

function WorkoutPlan() {

  const url = new URLSearchParams(location.search);
  const id = url.get('id');
  const { data: plan } = useRetrieveTrainingPlanQuery(id!)

  return (
    <div className={styles.workoutPlan}>
      <TitleBlock text="план тренировок" isBack />

      <div className={styles.workoutPlan__header}>
        <h1 className={styles.workoutPlan__mainTitle}>{tempWorkoutPlan[0].name}</h1>
        <DescriptionBlock title="Рекомендации">{plan?.describe || ''}</DescriptionBlock>
      </div>

       {plan?.training?.map((plan) => {
        return (
          <PlanReportBlock
            key={plan.id}
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
