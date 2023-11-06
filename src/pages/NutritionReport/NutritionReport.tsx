import PlanReportBlock from '../../components/PlanReportBlock/PlanReportBlock';
import TitleBlock from '../../components/TitleBlock/TitleBlock';
import styles from './NutritionReport.module.scss';
import CaloriesSection from '../../components/CaloriesSection/CaloriesSection';
import { useRetrieveDietPlanQuery } from '../../redux/services/dietApi';

function NutritionReport() {
  const url = new URLSearchParams(location.search);
  const id = url.get('id');

  const { data: plan } = useRetrieveDietPlanQuery(id!, { skip: !id });

  return (
    <div className={styles.nutritionReport}>
      <TitleBlock text="отчет о питании" isBack isEdit path={`/meal-plan/edit?id=${id}`} />
      <h1 className={styles.nutritionReport__mainTitle}>{plan?.name}</h1>

      <CaloriesSection {...plan} />

      {plan?.diet?.map((plan) => {
        return <PlanReportBlock key={plan.id} plan={plan} text={'Отчет клиента за этот день'} />;
      })}
    </div>
  );
}

export default NutritionReport;
