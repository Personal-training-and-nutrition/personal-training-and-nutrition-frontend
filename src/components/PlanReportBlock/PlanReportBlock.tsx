/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import styles from './PlanReportBlock.module.scss';
import { useLocation } from 'react-router-dom';
import upArrow from '../../assets/images/icons/up-arrow-gray.svg';
import downArrow from '../../assets/images/icons/down-arrow-gray.svg';
import DescriptionBlock from '../DescriptionBlock/DescriptionBlock';
import { useState } from 'react';
import { getWeekDay } from '../../utils/getWeekDay';
import UserNoteForm from '../UserNoteForm/UserNoteForm';

type PlanReportBlockProps = {
  plan: {
    id: string;
    weekday: string;
    spec_comment: string;
    user_comment: string;
  };
  isLoggedIn: boolean;
  text: string;
};

function PlanReportBlock({ plan, isLoggedIn, text }: PlanReportBlockProps) {
  const [showMore, setShowMore] = useState(true);
  const location = useLocation();
  const isWorkoutPlanPage = location.pathname === '/workout-plan';

  return (
    <li className={styles.PlanReport}>
      <img
        className={styles.PlanReport__image}
        src={`/images/trainingdays/trainingday-${plan.weekday}.png`}
        alt="plan image"
      />

      <div className={styles.PlanReport__header} onClick={() => setShowMore((prev) => !prev)}>
        <h3 className={styles.PlanReport__headerTitle}>
          {getWeekDay(plan.weekday)}{' '}
          <img src={showMore ? upArrow : downArrow} alt="arrow" style={{ marginLeft: '5px' }} />
        </h3>
        <p className={styles.PlanReport__headerSubTitle}>{text}</p>
      </div>

      {showMore && (
        <>
          <div className={styles.PlanReport__workoutPlan}>
            {plan.spec_comment.split(/\r?\n/).map((item, index) => {
              return (
                <p style={{ margin: '0 0 6px' }} key={index}>
                  {item}
                </p>
              );
            })}
          </div>

          {isWorkoutPlanPage && <UserNoteForm title="Заметка о тренировке" content={plan.user_comment} />}
        </>
      )}

      {/* Необходим рефакторинг */}
      {isWorkoutPlanPage
        ? isLoggedIn && !showMore && <DescriptionBlock title="Заметка за день">{plan.user_comment}</DescriptionBlock>
        : isLoggedIn && <DescriptionBlock title="Заметка за день">{plan.user_comment}</DescriptionBlock>}
    </li>
  );
}

export default PlanReportBlock;
