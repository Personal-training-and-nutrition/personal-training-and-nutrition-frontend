import styles from './PlanUnauthLayot.module.scss';
import Button from '../Button/Button';
import logo from '../../assets/logo.svg';
import imgDesktop from '../../assets/images/landingPage/desktop/phone-img.png';
import { ReactNode, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PlanReportBlock from '../PlanReportBlock/PlanReportBlock';
import RecommendationBlock from '../RecommendationBlock/RecommendationBlock';
import useResize from '../../hooks/useResize';
import { openModal } from '../../redux/slices/modalsSlice';
import { useAppDispatch } from '../../redux/store';
import { getAgeEnding } from '../../utils/getAgeEnding';
import { calculateAge } from '../../utils/calculateAge';
import { IUser } from '../../redux/types/user';
import { TTrainingDay } from '../../redux/types/training';
import { TDietDay } from '../../redux/types/diet';

type PlanUnAuthType = { children?: ReactNode; namePlan: string; subtitle: string; src: string; text: string; userData?: IUser; plans?: TDietDay[] | TTrainingDay[] };

const PlanUnathLayot = ({ children, subtitle, namePlan, src, text, userData, plans }: PlanUnAuthType) => {
  const [isOpen, setOpen] = useState(false);
  const size = useResize();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (size.width >= 768) {
      setOpen(true);
    }
  }, [size]);

  const handleOpenModal = () => {
    dispatch(openModal({ modalId: 'modalAuth' }));
  };

  const personalData =
    userData?.first_name + ' ' + (userData?.last_name || '') + ', ' + getAgeEnding(calculateAge(userData?.dob || ''));

  return (
    <div className={styles.planUnauth__content}>
      <img src={logo} className={styles.planUnauth__logo} alt="Логотип WellCoach" />

      <div className={styles.planUnauth__wrap}>
        <h2 className={styles.planUnauth__title}>{personalData}</h2>
        <h3 className={styles.planUnauth__subtitle}>{namePlan}</h3>
        {children}

        <RecommendationBlock />

        <section className={styles.planUnauth__plan}>
          <div
            className={styles.planUnauth__name}
            onClick={() => {
              if (size.width < 768) {
                setOpen((prev) => !prev);
              } else {
                return;
              }
            }}
          >
            <h2>{subtitle}</h2>
            {size.width < 768 && <p>{isOpen ? 'Свернуть' : 'Смотреть'}</p>}
          </div>

          {isOpen && (
            <div className={styles.planUnauth__listDay}>
              {plans?.map((plan) => {
                return <PlanReportBlock key={plan.id} plan={plan} text={text} />;
              })}
            </div>
          )}
        </section>
      </div>

      <section className={styles.planUnauth__info}>
        <img src={imgDesktop} className={styles.planUnauth__imgDesktop} alt="phone" />

        <div className={styles.planUnauth__aboutWrap}>
          <h3 className={styles.planUnauth__about}>Удобный сервис регулярной заботы о себе</h3>
          <Link to="/" className={styles.planUnauth__link}>
            О приложении
          </Link>
        </div>

        <img src={src} className={styles.planUnauth__img} alt="Фото" />
      </section>

      <Link to="" className={styles.planUnauth__btn} onClick={() => handleOpenModal()}>
        <Button type="button" textBtn="Начать" isDirty={true} isValid={true} />
      </Link>
    </div>
  );
};

export default PlanUnathLayot;
