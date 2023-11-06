import PlanCard from '../../components/PlanCard/PlanCard';
import TitleBlock from '../../components/TitleBlock/TitleBlock';
import styles from './WorkoutPlans.module.scss';
import planImage from '../../assets/images/client-card/workoutPlanImage.png';
import { Link } from 'react-router-dom';
import { useGetTrainingPlansListQuery } from '../../redux/services/trainingApi';
import { useAppSelector } from '../../redux/store';

function WorkoutPlans() {
  const { data, isSuccess } = useGetTrainingPlansListQuery();

  const url = new URLSearchParams(location.search);
  const idURL = url.get('id');

  const isSpecialist = useAppSelector((state) => state.user.isSpecialist);
  const path = isSpecialist ? '/workout-report' : '/workout-plan';

  const currentClientPlans = data?.filter((plan) => plan.user === idURL && plan);


  return (
    <main className="App__container">
      <div className={styles.workoutPlans}>
        <TitleBlock text="планы тренировок" isBack={true}/>
        {currentClientPlans && currentClientPlans.length > 0 ? (
          <div className={styles.workoutPlans__list}>
            {isSuccess &&
              currentClientPlans?.map((train) => (
                <Link to={`${path}?id=${train.id}`} className={styles.workoutPlans__link} key={train.id}>
                  <PlanCard title={train.name || 'Без названия'} date={train.describe || ''} image={planImage} />
                </Link>
              ))}
          </div>
        ) :(
          <p className={'App__not-found-element'}>У вас пока нет ни одного плана :(</p>
        )}
      </div>
    </main>
  );
}

export default WorkoutPlans;
