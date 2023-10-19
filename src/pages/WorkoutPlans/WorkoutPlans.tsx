import PlanCard from '../../components/PlanCard/PlanCard';
import TitleBlock from '../../components/TitleBlock/TitleBlock';
import styles from './WorkoutPlans.module.scss';
import planImage from '../../assets/images/client-card/workoutPlanImage.png';
import { Link } from 'react-router-dom';
import { useGetTrainingPlansListQuery } from '../../redux/services/trainingApi';
import { useAppSelector } from '../../redux/store';

function WorkoutPlans() {
  const { data, isSuccess } = useGetTrainingPlansListQuery();
  const currentClient = useAppSelector((state) => state.currentClient.client);
  const isSpecialist = useAppSelector((state) => state.user.isSpecialist);
  const path = isSpecialist ? '/workout-report' : '/workout-plan';
  return (
    <main className="App__container">
      <div className={styles.workoutPlans}>
        <TitleBlock text="планы тренировок" />
        <div className={styles.workoutPlans__list}>
          {isSuccess && (
            data?.map(
              (plan) => plan.user === currentClient.id && (
                <Link to={`${path}?id=${plan.id}`} className={styles.workoutPlans__link} key={plan.id}>
                  <PlanCard title={plan.name || 'Без названия'} date={plan.describe || ''} image={planImage} />
                </Link>
              )
            ))
            }
        </div>
      </div>
    </main>
  );
}

export default WorkoutPlans;
