import PlanReportBlock from '../../components/PlanReportBlock/PlanReportBlock';
import TitleBlock from '../../components/TitleBlock/TitleBlock';
import { useRetrieveTrainingPlanQuery } from '../../redux/services/trainingApi';
import { PATH_WORKOUT_PLAN_EDIT } from '../../utils/constants';
import styles from './TrainingReport.module.scss';

function TrainingReport() {
  const url = new URLSearchParams(location.search);
  const id = url.get('id');

  const { data: plan } = useRetrieveTrainingPlanQuery(id!);

  return (
    <div className={styles.trainingReport}>
      <TitleBlock text="отчет о тренировках" isBack isEdit path={`${PATH_WORKOUT_PLAN_EDIT}?id=${id}`} />
      <h1 className={styles.trainingReport__mainTitle}>{plan?.name || ''}</h1>

      {plan?.training?.map((plan) => {
        return <PlanReportBlock key={plan.id} plan={plan} text={'Отчет клиента за этот день'} />;
      })}
    </div>
  );
}

export default TrainingReport;
