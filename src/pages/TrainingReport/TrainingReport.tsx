import PlanReportBlock from '../../components/PlanReportBlock/PlanReportBlock';
import TitleBlock from '../../components/TitleBlock/TitleBlock';
import styles from './TrainingReport.module.scss';

function TrainingReport() {
  return (
    <div className={styles.trainingReport}>
      <TitleBlock text="отчет о тренировках" isBack isEdit />
      <h1 className={styles.trainingReport__mainTitle}>Входим в ритм!</h1>

      <PlanReportBlock />
    </div>
  );
}

export default TrainingReport;
