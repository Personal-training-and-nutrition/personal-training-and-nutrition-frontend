import TitleBlock from '../../components/TitleBlock/TitleBlock';
import styles from './MealPlan.module.scss';
import PlanReportBlock from '../../components/PlanReportBlock/PlanReportBlock';
import DescriptionBlock from '../../components/DescriptionBlock/DescriptionBlock';
import CaloriesSection from '../../components/CaloriesSection/CaloriesSection';
import { useLocation } from 'react-router-dom';
import { useRetrieveDietPlanQuery } from '../../redux/services/dietApi';
import { useEffect } from 'react';

function MealPlan() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const plan = query.get('id');
  const { data, isSuccess } = useRetrieveDietPlanQuery(plan!, { skip: !plan });

  useEffect(() => {
    if (isSuccess) console.log(data);
  }, [isSuccess]);

  if (!isSuccess) return <p>Loading...</p>;

  return (
    <main className="App__container">
      <div className={styles.mealPlan}>
        <TitleBlock text="план питания" isBack />

        <div className={styles.mealPlan__header}>
          <h1 className={styles.mealPlan__mainTitle}>{data?.name || 'Без названия'}</h1>

          <CaloriesSection {...data} />

          {data.describe && <DescriptionBlock title="Рекомендации">{data.describe}</DescriptionBlock>}
        </div>

        {data?.diet?.map((plan, index) => {
          return (
            <PlanReportBlock
              isLoggedIn={true}
              key={index}
              plan={plan}
              text="Твой план питания на этот день. Поделись ощущениями в конце."
            />
          );
        })}

        <button className={styles.mealPlan__deleteBtn}>Удалить этот план</button>
      </div>
    </main>
  );
}

export default MealPlan;
