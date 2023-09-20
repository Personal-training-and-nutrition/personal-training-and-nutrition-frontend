/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import styles from './PlanReportBlock.module.scss';
import upArrow from '../../assets/images/icons/up-arrow-gray.svg';
import downArrow from '../../assets/images/icons/down-arrow-gray.svg';
import DescriptionBlock from '../DescriptionBlock/DescriptionBlock';
import { useState } from 'react';
import { getWeekDay } from '../../utils/getWeekDay';

type PlanReportBlockProps = {
  plan: {
    id: string;
    weekday: string;
    spec_comment: string;
    user_comment: string;
  };
  isLoggedIn: boolean;
};

function PlanReportBlock({ plan, isLoggedIn }: PlanReportBlockProps) {
  const [showMore, setShowMore] = useState(false);

  return (
    <li className={styles.PlanReport}>
      <img className={styles.PlanReport__image} src={`/images/trainingday-${plan.weekday}.png`} alt="arrow icon" />

      <div className={styles.PlanReport__header} onClick={() => setShowMore((prev) => !prev)}>
        <h3 className={styles.PlanReport__headerTitle}>
          {getWeekDay(plan.weekday)}{' '}
          <img src={showMore ? upArrow : downArrow} alt="arrow" style={{ marginLeft: '5px' }} />
        </h3>
        <p className={styles.PlanReport__headerSubTitle}>Отчет клиента за этот день</p>
      </div>

      {showMore && (
        <div className={styles.PlanReport__workoutPlan}>
          {plan.spec_comment.split(/\r?\n/).map((item, index) => {
            return (
              <p style={{ margin: '0 0 6px' }} key={index}>
                {item}
              </p>
            );
          })}
        </div>
      )}

      {isLoggedIn && <DescriptionBlock title="Заметка за день">{plan.user_comment}</DescriptionBlock>}
    </li>
  );
}

export default PlanReportBlock;
