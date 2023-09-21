import styles from './PromoSection.module.scss';
import twoPhonesImg from '../../../assets/images/landingPage/users/two-phones.png';
import React from 'react';

const PromoSection: React.FC = () => {
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
          <img className={styles.promo__image} src={twoPhonesImg} alt="Первое изображение" />
        </div>
      </section>
    </>
  );
};

export default PromoSection;
