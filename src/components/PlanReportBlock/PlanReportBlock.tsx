/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import styles from './PlanReportBlock.module.scss';
import { useLocation } from 'react-router-dom';
import downArrow from '../../assets/images/icons/down-arrow-gray.svg';
import DescriptionBlock from '../DescriptionBlock/DescriptionBlock';
import { useEffect, useState } from 'react';
import { getWeekDay } from '../../utils/getWeekDay';
import UserNoteForm from '../UserNoteForm/UserNoteForm';
import { useAppSelector } from '../../redux/store';
import { TTrainingDay } from '../../redux/types/training';
import { TDietDay } from '../../redux/types/diet';

type PlanReportBlockProps = {
  plan: TDietDay | TTrainingDay
  text: string;
  handleComment?: (message: string) => void;
};

function PlanReportBlock({ plan, text, handleComment }: PlanReportBlockProps) {
  const [showMore, setShowMore] = useState(false);
  const location = useLocation();
  const isWorkoutPlanPage = location.pathname === '/workout-plan';
  const isMealPlanPage = location.pathname === '/meal-plan';
  const isTrainingReportPage = location.pathname === '/workout-report';
  const isMealReportPage = location.pathname === '/nutrition-report';
  const unAuthPlanTrain = location.pathname === '/workout-plan/unauth';
  // const unAuthPlanMeal = location.pathname === '/meal-plan/unauth';

  const imgPath =
    isWorkoutPlanPage || isTrainingReportPage || unAuthPlanTrain ? '/images/trainingdays/trainingday' : '/images/dayweekMeal/meal';
  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);

  useEffect(() => {
    if (text) {
      setShowMore(true);
    }
  }, []);

  return (
    <li className={showMore ? `${styles.PlanReport} ${styles.PlanReport_show}` : `${styles.PlanReport}`}>
      <img className={styles.PlanReport__image} src={`${imgPath}-${plan.weekday}.png`} alt="planImage" />

      <div className={styles.PlanReport__header} onClick={() => setShowMore((prev) => !prev)}>
        <h3 className={styles.PlanReport__headerTitle}>
          {getWeekDay(plan.weekday)}{' '}
          <img
            src={downArrow}
            alt="arrow"
            className={
              showMore
                ? `${styles.PlanReport__imgArrow} ${styles.PlanReport__imgArrow_more}`
                : `${styles.PlanReport__imgArrow}`
            }
          />
        </h3>
        <p className={styles.PlanReport__headerSubTitle}>{text}</p>
      </div>
      <div className={styles.PlanReport__workoutPlan}>
        {(plan.spec_comment || '').split(/\r?\n/).map((item, index) => {
          return (
            <p style={{ margin: '0 0 6px' }} key={index}>
              {item}
            </p>
          );
        })}
      </div>

      {(isWorkoutPlanPage || isMealPlanPage) && (
        <UserNoteForm title="Заметка за день" content={plan.user_comment || ''} handleComment={handleComment} />
      )}

      {/* Необходим рефакторинг */}
      {/* {isWorkoutPlanPage || isMealPlanPage
        ? isLoggedIn &&
          !showMore &&
          plan.user_comment && <DescriptionBlock title="Заметка за день">{plan.user_comment}</DescriptionBlock>
        : isLoggedIn &&
          plan.user_comment && <DescriptionBlock title="Заметка за день">{plan.user_comment}</DescriptionBlock>} */}

      {(isTrainingReportPage || isMealReportPage) && isLoggedIn && (
        <DescriptionBlock title="Заметка за день">{plan.user_comment || ''}</DescriptionBlock>
      )}
    </li>
  );
}

export default PlanReportBlock;
