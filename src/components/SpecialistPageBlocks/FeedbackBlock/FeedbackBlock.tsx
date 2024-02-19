import { Link } from 'react-router-dom';
import { PATH_FEEDBACK_PAGE } from '../../../utils/constants';
import Carousel from '../Carousel/Carousel';
import styles from './FeedbackBlock.module.scss';

const FeedbackBlock = () => {
  return (
    <section className={styles.feedback}>
      <div className={styles.feedback__header}>
        <div className={styles.feedback__wrap}>
          <h4 className={styles.feedback__title}>Отзывы</h4>
          <span className={styles.feedback__icon}></span>
          <p className={styles.feedback__subtitle}>5,0</p>
        </div>
        <Link to={PATH_FEEDBACK_PAGE} className={styles.feedback__btn}>
          <div className={styles.feedback__count}>15 отзывов</div>
          <span className={styles.feedback__arrow}></span>
        </Link>
      </div>
      <Carousel></Carousel>
    </section>
  );
};

export default FeedbackBlock;
