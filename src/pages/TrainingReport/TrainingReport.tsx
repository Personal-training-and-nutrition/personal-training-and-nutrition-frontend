import PlanReportBlock from '../../components/PlanReportBlock/PlanReportBlock';
import TitleBlock from '../../components/TitleBlock/TitleBlock';
import styles from './TrainingReport.module.scss';
import { tempWorkoutPlan } from '../../utils/constants';

function TrainingReport() {
  return (
    <div className={styles.trainingReport}>
      <TitleBlock text="отчет о тренировках" isBack isEdit path="/editPlanTrain" />
      <h1 className={styles.trainingReport__mainTitle}>{tempWorkoutPlan[0].name}</h1>

      {tempWorkoutPlan[0].training.map((plan, index) => {
        return <PlanReportBlock isLoggedIn={true} key={index} plan={plan} text={'Отчет клиента за этот день'}/>;
      })}
    </div>
  );
}

export default TrainingReport;
