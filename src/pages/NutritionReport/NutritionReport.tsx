import PlanReportBlock from '../../components/PlanReportBlock/PlanReportBlock';
import TitleBlock from '../../components/TitleBlock/TitleBlock';
import styles from './NutritionReport.module.scss';
import { tempMealPlan } from '../../utils/constants';
import CaloriesSection from '../../components/CaloriesSection/CaloriesSection';

function NutritionReport() {
  return (
    <div className={styles.nutritionReport}>
      <TitleBlock text="отчет о питании" isBack isEdit path="/meal-plan/edit" />
      <h1 className={styles.nutritionReport__mainTitle}>{tempMealPlan[0].name}</h1>

      <CaloriesSection />

      {tempMealPlan[0].training.map((plan, index) => {
        return <PlanReportBlock isLoggedIn={true} key={index} plan={plan} text={'Отчет клиента за этот день'} />;
      })}
    </div>
  );
}

export default NutritionReport;
