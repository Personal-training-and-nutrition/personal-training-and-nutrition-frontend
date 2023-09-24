import styles from './PromoSection.module.scss';
import twoPhonesSpecImg from '../../../assets/images/landingPage/spec/two-phones.png';
import twoPhonesUserImg from '../../../assets/images/landingPage/users/two-phones.png';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectStatus } from '../../../redux/slices/LandingPageSlice.ts';

const PromoSection: React.FC = () => {
  const { isStatusSpecialist } = useSelector(selectStatus);

  return (
    <>
      <section className={styles.promo}>
        <h2 className={styles.promo__title}>
          Удобный сервис для&nbsp;
          <span className={styles.promo__title_blue}>тренеров, диетологов, нутрициологов</span>
        </h2>
        <p className={styles.promo__subtitle}>
          Составление планов тренировок и&nbsp;питания, онлайн-поддержка клиентов&nbsp;в одном сервисе
        </p>
        <div className={styles.promoImageContainer}>
          <img
            className={styles.promo__image}
            src={isStatusSpecialist ? twoPhonesSpecImg : twoPhonesUserImg}
            alt="Изображение двух телефонов"
          />
        </div>
      </section>
    </>
  );
};

export default PromoSection;
