import { useLocation } from 'react-router-dom';
import FeedbackCard from '../../components/FeedbackCard/FeedbackCard';
import TitleBlock from '../../components/TitleBlock/TitleBlock';
import { IFeedbackCard } from '../../redux/types/specialist';
import styles from './FeedbackPage.module.scss';

const FeedbackPage = () => {
  const { state } = useLocation();
  // const dispatch = useAppDispatch();
  const arrFeedback: IFeedbackCard[] = state.arrFeedback;
  return (
    <main className="App__container">
      <div className={styles.feedbackPage__container}>
        <TitleBlock text="отзывы (3)" isBack={true} isSort={true} />
        <div className={styles.feedbackPage__page}>
          {arrFeedback &&
            arrFeedback.length !== 0 &&
            arrFeedback.map((obj, i) => (
              <div className={styles.feedback__slider} key={i}>
                <FeedbackCard {...obj} isHideText={false} />
              </div>
            ))}
        </div>
      </div>
    </main>
  );
};

export default FeedbackPage;
