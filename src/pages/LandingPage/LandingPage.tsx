import React from 'react';
import styles from './LandingPage.module.scss';
import Sidebar from '../../components/LandingPage/Sidebar/Sidebar.tsx';
import img from '../../assets/images/cardItem/bxs-camera-plus.svg';
import CardItem from '../../components/LandingPage/CardItem/CardItem.tsx';
import BtnStart from '../../components/LandingPage/BtnStart/BtnStart.tsx';
import Toggle from '../../components/LandingPage/Toggle/Toggle.tsx';

type ItemsType = {
  title: string;
  subtitle: string;
  imageUrl: string;
  imageAlt: string;
  isReverse: boolean;
};

const items: ItemsType[] = [
  {
    title: 'Сохраняйте историю о клиентах',
    subtitle: 'Организовывайте и храните информацию о приёмах в одном месте',
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
      <Sidebar />
      <section className={styles.landing__content}>
        <div className={styles.button__small}>
          <BtnStart text={'Начать'} size={'small'} />
        </div>
        <ul className={styles.landing__list}>
          {items.map((item, index) => {
            return <CardItem key={index} {...item} />;
          })}
        </ul>

        <div className={styles.button__large}>
          <BtnStart text={'Начать'} size={'large'} />
        </div>
      </section>
      <Toggle />
    </main>
  );
};

export default LandingPage;
