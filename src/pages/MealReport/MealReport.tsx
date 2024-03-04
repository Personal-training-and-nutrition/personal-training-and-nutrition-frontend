import CaloriesSection from '../../components/CaloriesSection/CaloriesSection';
import PlanReportBlock from '../../components/PlanReportBlock/PlanReportBlock';
import TitleBlock from '../../components/TitleBlock/TitleBlock';
import { useRetrieveDietPlanQuery } from '../../redux/services/dietApi';
import { PATH_MEAL_PLAN_EDIT } from '../../utils/constants';
import styles from './MealReport.module.scss';

function MealReport() {
  const url = new URLSearchParams(location.search);
  const id = url.get('id');

  const { data: plan } = useRetrieveDietPlanQuery(id!, { skip: !id });

  return (
    <div className={styles.mealReport}>
      <TitleBlock text="отчет о питании" isBack isEdit path={`${PATH_MEAL_PLAN_EDIT}/?id=${id}`} />
      <h1 className={styles.mealReport__mainTitle}>{plan?.name}</h1>

      <CaloriesSection {...plan} />

      {plan?.diet?.map((plan) => {
        return <PlanReportBlock key={plan.id} plan={plan} text={'Отчет клиента за этот день'} />;
      })}
    </div>
  );
}

export default MealReport;
