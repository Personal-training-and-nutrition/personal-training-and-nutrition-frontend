import PlanReportBlock from '../../components/PlanReportBlock/PlanReportBlock';
import TitleBlock from '../../components/TitleBlock/TitleBlock';
import styles from './TrainingReport.module.scss';
import { useRetrieveTrainingPlanQuery } from '../../redux/services/trainingApi';

function TrainingReport() {
  const url = new URLSearchParams(location.search);
  const id = Number(url.get('id'));

  const { data: plan } = useRetrieveTrainingPlanQuery(id)

  return (
    <div className={styles.trainingReport}>
      <TitleBlock text="отчет о тренировках" isBack isEdit path={`/workout-plan/edit?id=${id}`} />
      <h1 className={styles.trainingReport__mainTitle}>{plan?.name || ''}</h1>

      {plan?.training?.map((plan) => {
        return <PlanReportBlock key={plan.id} plan={plan} text={'Отчет клиента за этот день'}/>;
      })}
    </div>
  );
}

export default TrainingReport;
