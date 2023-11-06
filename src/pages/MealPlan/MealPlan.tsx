import TitleBlock from '../../components/TitleBlock/TitleBlock';
import styles from './MealPlan.module.scss';
import PlanReportBlock from '../../components/PlanReportBlock/PlanReportBlock';
import DescriptionBlock from '../../components/DescriptionBlock/DescriptionBlock';
import CaloriesSection from '../../components/CaloriesSection/CaloriesSection';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  useDestroyDietPlanMutation,
  useRetrieveDietPlanQuery,
  useUpdateDietPlanMutation,
} from '../../redux/services/dietApi';

function MealPlan() {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const plan = query.get('id');
  const { data, isSuccess } = useRetrieveDietPlanQuery(plan!, { skip: !plan });
  const [commentTrigger] = useUpdateDietPlanMutation();
  const [deleteTrigger] = useDestroyDietPlanMutation();

  function generateCommentHandler(day: string) {
    return function (message: string) {
      if (!data?.diet || !data.id) return;
      const diet = data.diet.map((plan) => (plan.weekday === day ? { ...plan, user_comment: message || null } : plan));
      const body = { ...data, diet };
      commentTrigger({ id: data.id, data: body });
    };
  }
  function handleDelete() {
    if (plan) deleteTrigger(plan).then(() => navigate('/meal-plans'));
  }

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
              key={index}
              plan={plan}
              handleComment={generateCommentHandler(plan.weekday)}
              text="Твой план питания на этот день. Поделись ощущениями в конце."
            />
          );
        })}

        <button className={styles.mealPlan__deleteBtn} onClick={handleDelete}>
          Удалить этот план
        </button>
      </div>
    </main>
  );
}

export default MealPlan;
