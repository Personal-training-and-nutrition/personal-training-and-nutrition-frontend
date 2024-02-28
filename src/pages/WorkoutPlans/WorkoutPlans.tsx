import { Link } from 'react-router-dom';
import planImage from '../../assets/images/client-card/workoutPlanImage.png';
import PlanCard from '../../components/PlanCard/PlanCard';
import TitleBlock from '../../components/TitleBlock/TitleBlock';
import { useGetTrainingPlansListQuery } from '../../redux/services/trainingApi';
import { useAppSelector } from '../../redux/store';
import { PATH_WORKOUT_PLAN, PATH_WORKOUT_REPORT } from '../../utils/constants';
import styles from './WorkoutPlans.module.scss';

function WorkoutPlans() {
  const { data, isSuccess } = useGetTrainingPlansListQuery();

  const url = new URLSearchParams(location.search);
  const idURL = url.get('id');

  const isSpecialist = useAppSelector((state) => state.user.isSpecialist);
  const path = isSpecialist ? PATH_WORKOUT_REPORT : PATH_WORKOUT_PLAN;

  const currentClientPlans = data?.filter((plan) => plan.user === idURL && plan);

  return (
    <main className="App__container">
      <div className={styles.workoutPlans}>
        <TitleBlock text="планы тренировок" isBack={true} />
        {currentClientPlans && currentClientPlans.length > 0 ? (
          <div className={styles.workoutPlans__list}>
            {isSuccess &&
              currentClientPlans?.map((train) => (
                <Link to={`${path}?id=${train.id}`} className={styles.workoutPlans__link} key={train.id}>
                  <PlanCard title={train.name || 'Без названия'} date={train.describe || ''} image={planImage} />
                </Link>
              ))}
          </div>
        ) : (
          <p className={'App__not-found-element'}>У вас пока нет ни одного плана :(</p>
        )}
      </div>
    </main>
  );
}

export default WorkoutPlans;
