import PlanCard from '../../components/PlanCard/PlanCard';
import TitleBlock from '../../components/TitleBlock/TitleBlock';
import styles from './MealPlans.module.scss';
import planImage from '../../assets/mealPlanImage.png';
import { Link } from 'react-router-dom';
import { useGetDietPlansListQuery } from '../../redux/services/dietApi';
// import { useEffect } from 'react';
import { useAppSelector } from '../../redux/store';

function MealPlans() {
  const { data, isSuccess, isLoading } = useGetDietPlansListQuery();

  const url = new URLSearchParams(location.search);
  const idURL = url.get('id');
  const isSpecialist = useAppSelector((state) => state.user.isSpecialist);
  const path = isSpecialist ? '/nutrition-report' : '/meal-plan';

  const plansCurrentClient = data?.map(
    (plan) =>
      plan.user === idURL && (
        <Link to={`${path}?id=${plan.id}`} className={styles.mealPlans__link} key={plan.id}>
          <PlanCard title={plan.name || 'Без названия'} date={plan.describe || ''} image={planImage} />
        </Link>
      ),
  );

  // useEffect(() => {
  //   if (isSuccess) console.log(data);
  // }, [isSuccess]);

  if (isLoading) {
    return <h2>Загрузка...</h2>;
  }

  return (
    <main className="App__container">
      <div className={styles.mealPlans}>
        <TitleBlock text="планы питания" isBack={true}/>
        <div className={styles.mealPlans__list}>{isSuccess && plansCurrentClient}</div>
      </div>
    </main>
  );
}

export default MealPlans;
