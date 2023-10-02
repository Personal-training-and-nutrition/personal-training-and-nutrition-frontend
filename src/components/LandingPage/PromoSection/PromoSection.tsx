import styles from './PromoSection.module.scss';
import twoPhonesSpecImg from '../../../assets/images/landingPage/mobile/spec/two-phones.png';
import twoPhonesUserImg from '../../../assets/images/landingPage/mobile/users/two-phones.png';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectStatus} from '../../../redux/slices/landingPageSlice.ts';
import useResize from '../../../hooks/useResize.ts';
import BtnStart from '../BtnStart/BtnStart.tsx';

const PromoSection: React.FC = () => {
  const {isStatusSpecialist} = useSelector(selectStatus);

  const size = useResize();

  const titleText = isStatusSpecialist
    ? 'тренеров, диетологов, нутрициологов'
    : 'регулярной заботы о себе';

  const subtitleText = isStatusSpecialist
    ? 'Составление планов тренировок и питания, онлайн-поддержка клиентов в одном сервисе'
    : 'Составление планов тренировок и питания, онлайн-поддержка от специалистов';

  return (
    <>
      <section className={styles.promo}>
        <h2 className={styles.promo__title}>
          Удобный сервис для&nbsp;
          <span className={styles.promo__title_blue}>
            {titleText}
          </span>
        </h2>
        <p className={styles.promo__subtitle}>{subtitleText}</p>
        {size.width >= 768 && size.width < 1440 && <BtnStart/>}

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
