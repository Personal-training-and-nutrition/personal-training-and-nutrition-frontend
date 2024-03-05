/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import downArrow from '../../assets/images/icons/down-arrow-gray.svg';
import { useAppSelector } from '../../redux/store';
import { TDietDay } from '../../redux/types/diet';
import { TTrainingDay } from '../../redux/types/training';
import {
  PATH_MEAL_PLAN,
  PATH_MEAL_REPORT,
  PATH_WORKOUT_PLAN,
  PATH_WORKOUT_PLAN_UNAUTH,
  PATH_WORKOUT_REPORT,
} from '../../utils/constants';
import { getWeekDay } from '../../utils/getWeekDay';
import DescriptionBlock from '../DescriptionBlock/DescriptionBlock';
import UserNoteForm from '../UserNoteForm/UserNoteForm';
import styles from './PlanReportBlock.module.scss';

type PlanReportBlockProps = {
  plan: TDietDay | TTrainingDay;
  text: string;
  handleComment?: (message: string) => void;
};

function PlanReportBlock({ plan, text, handleComment }: PlanReportBlockProps) {
  const [showMore, setShowMore] = useState(false);
  const location = useLocation();
  const isWorkoutPlanPage = location.pathname === PATH_WORKOUT_PLAN;
  const isMealPlanPage = location.pathname === PATH_MEAL_PLAN;
  const isTrainingReportPage = location.pathname === PATH_WORKOUT_REPORT;
  const isMealReportPage = location.pathname === PATH_MEAL_REPORT;
  const unAuthPlanTrain = location.pathname === PATH_WORKOUT_PLAN_UNAUTH;
  // const unAuthPlanMeal = location.pathname === PATH_MEAL_PLAN_UNAUTH;

  const imgPath =
    isWorkoutPlanPage || isTrainingReportPage || unAuthPlanTrain
      ? '/images/trainingdays/trainingday'
      : '/images/dayweekMeal/meal';
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
