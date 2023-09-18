import TitleBlock from '../../components/TitleBlock/TitleBlock';
import styles from './TrainingReport.module.scss';

function TrainingReport() {
  return (
    <div className={styles.trainingReport}>
      <TitleBlock text="отчет о тренировках" isBack isEdit />
      <h1>Входим в ритм!</h1>
    </div>
  );
}

export default TrainingReport;
