import TitleBlock from '../../components/TitleBlock/TitleBlock';
import styles from './MealPlan.module.scss';
import { tempMealPlan } from '../../utils/constants';
import PlanReportBlock from '../../components/PlanReportBlock/PlanReportBlock';
import DescriptionBlock from '../../components/DescriptionBlock/DescriptionBlock';
import CaloriesSection from '../../components/CaloriesSection/CaloriesSection';

function MealPlan() {
  return (
    <div className={styles.mealPlan}>
      <TitleBlock text="план питания" isBack />

      <div className={styles.mealPlan__header}>
        <h1 className={styles.mealPlan__mainTitle}>{tempMealPlan[0].name}</h1>

        <CaloriesSection />

        <DescriptionBlock title="Рекомендации">
          Смело пиши мне в любое время, делись ощущениями, если что-то идет не так, не переживай, скорректируем)
        </DescriptionBlock>
      </div>

      {tempMealPlan[0].training.map((plan, index) => {
        return (
          <PlanReportBlock
            isLoggedIn={true}
            key={index}
            plan={plan}
            text="Твой план тренировки на этот день. Поделись ощущениями в конце."
          />
        );
      })}

      <button className={styles.mealPlan__deleteBtn}>Удалить</button>
    </div>
  );
}

export default MealPlan;
