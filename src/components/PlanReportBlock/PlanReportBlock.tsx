import styles from './PlanReportBlock.module.scss';
import tempImage from '../../assets/images/dayblock/training/Image.svg';
import upArrow from '../../assets/images/client-card/unfold.svg';
import downArrow from '../../assets/images/client-card/fold.svg';
import DescriptionBlock from '../DescriptionBlock/DescriptionBlock';

function PlanReportBlock() {
  return (
    <li className={styles.PlanReport}>
      <img className={styles.PlanReport__image} src={tempImage} alt="image" />
      <div className={styles.PlanReport__header}>
        <h3 className={styles.PlanReport__headerTitle}>
          Понедельник <img src={upArrow} alt="arrow" style={{ opacity: '.2', marginLeft: '5px' }} />
        </h3>
        <p className={styles.PlanReport__headerSubTitle}>Отчет клиента за этот день</p>
      </div>

      <DescriptionBlock title="Заметка на день">Всё зашло</DescriptionBlock>
    </li>
  );
}

export default PlanReportBlock;
