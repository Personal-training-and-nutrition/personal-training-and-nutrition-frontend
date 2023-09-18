import React from 'react';
import styles from './LandingPage.module.scss';
import img from '../../assets/images/cardItem/bxs-camera-plus.svg';
import CardItem from '../../components/LandingPage/CardItem/CardItem.tsx';
import Toggle from '../../components/LandingPage/Toggle/Toggle.tsx';
import logo from '../../assets/logo.svg';

type ItemsType = {
  title: string;
  subtitle: string;
  imageUrl: string;
  imageAlt: string;
  isReverse: boolean;
};

const items: ItemsType[] = [
  {
    title: 'Удобный сервис для тренеров, диетологов, нутрициологов',
    subtitle: 'Составление планов тренировок и питания, онлайн-поддержка клиентов в одном сервисе',
    imageUrl: img,
    imageAlt: 'картинка',
    isReverse: false,
  },
  {
    title: 'Отслеживайте прогресс',
    subtitle: 'Организовывайте и храните информацию о приёмах в одном месте',
    imageUrl: img,
    imageAlt: 'картинка',
    isReverse: true,
  },
  {
    title: 'Отправляйте рекомендации',
    subtitle: 'Организовывайте и храните информацию о приёмах в одном месте',
    imageUrl: img,
    imageAlt: 'картинка',
    isReverse: false,
  },
];

const LandingPage: React.FC = () => {
  return (
    <main className={styles.landing__container}>
      <img className={styles.landing__logo} src={logo} alt="Логотип сайта" />
      <Toggle />
      <section className={styles.landing__content}>
        <div className={styles.button__small}></div>
        <ul className={styles.landing__list}>
          {items.map((item, index) => {
            return <CardItem key={index} {...item} />;
          })}
        </ul>
      </section>
    </main>
  );
};

export default LandingPage;
