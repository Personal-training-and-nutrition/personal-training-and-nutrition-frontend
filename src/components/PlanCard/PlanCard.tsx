import styles from './PlanCard.module.scss';
import arrowIcon from '../../assets/images/client-card/arrow.svg';

type PlanCardProps = {
  image: string;
  title: string;
  date: string;
};

function PlanCard({ image, title, date }: PlanCardProps) {
  return (
    <li className={styles.planCard}>
      <img src={image} alt="изображение на карточке плана" />
      <div className={styles.planCard__data}>
        <p className={styles.planCard__title}>{title}</p>
        <p className={styles.planCard__createdDate}>{date}</p>
      </div>
      <img className={styles.planCard__arrowIcon} src={arrowIcon} alt="arrow icon" />
    </li>
  );
}

export default PlanCard;
