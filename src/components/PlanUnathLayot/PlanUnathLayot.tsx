import styles from './PlanUnauthLayot.module.scss';
import Button from '../Button/Button';
import logo from '../../assets/logo.svg';
import { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import { tempWorkoutPlan } from '../../utils/constants';
import PlanReportBlock from '../PlanReportBlock/PlanReportBlock';
import RecommendationBlock from '../RecommendationBlock/RecommendationBlock';

type PlanUnAuthType = { children?: ReactNode; namePlan: string; subtitle: string; src: string; text: string };
const PlanUnathLayot = ({ children, subtitle, namePlan, src, text }: PlanUnAuthType) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={styles.planAuth__content}>
      <img src={logo} className={styles.planAuth__logo} alt="Логотип WellCoach" />
      <div className={styles.planAuth__wrap}>
        <h2 className={styles.planAuth__title}>Никитина Александра, 35 лет</h2>
        <h3 className={styles.planAuth__subtitle}>{namePlan}</h3>
        {children}
        <RecommendationBlock />
        <section className={styles.planAuth__plan}>
          <div className={styles.planAuth__name} onClick={() => setOpen((prev) => !prev)}>
            <h2>{subtitle}</h2>
            <p>{isOpen ? 'Свернуть' : 'Смотреть'}</p>
          </div>
          {isOpen && (
            <div className={styles.planAuth__listDay}>
              {tempWorkoutPlan[0].training.map((plan, index) => {
                return (
                  <PlanReportBlock
                    isLoggedIn={false}
                    key={index}
                    plan={plan}
                    text={text}
                  />
                );
              })}
            </div>
          )}
        </section>
        <section className={styles.planAuth__info}>
          <h3 className={styles.planAuth__about}>Удобный сервис регулярной заботы о себе</h3>
          <Link to="/" className={styles.planAuth__link}>
            О приложении
          </Link>
          <img src={src} className={styles.planAuth__img} alt="Фото" />
        </section>
      </div>
      <Link to="/registerModal" className={styles.planAuth__btn}>
        <Button type="button" textBtn="Начать" isDirty={true} isValid={true} />
      </Link>
    </div>
  );
};

export default PlanUnathLayot;
