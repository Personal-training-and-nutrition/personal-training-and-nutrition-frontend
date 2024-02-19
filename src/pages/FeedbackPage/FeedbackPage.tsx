import FeedbackCard from '../../components/FeedbackCard/FeedbackCard';
import TitleBlock from '../../components/TitleBlock/TitleBlock';
import styles from './FeedbackPage.module.scss';

const FeedbackPage = () => {
  return (
    <main className="App__container">
      <div className={styles.feedbackPage__container}>
        <TitleBlock text="отзывы (15)" isBack={true} isSort={true} />
        <div className={styles.feedbackPage__page}>
          <FeedbackCard />
          <FeedbackCard />
          <FeedbackCard />
          <FeedbackCard />
          <FeedbackCard />
        </div>
      </div>
    </main>
  );
};

export default FeedbackPage;
