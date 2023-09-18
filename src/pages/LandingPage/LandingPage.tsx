import React from 'react';
import styles from './LandingPage.module.scss';
import Toggle from '../../components/LandingPage/Toggle/Toggle.tsx';
import logo from '../../assets/logo.svg';
import oneImg from '../../assets/images/landingPage/users/one.png';

const LandingPage: React.FC = () => {
  return (
    <div className={styles.landing}>
      <header className={styles.landing__header}>
        <img className={styles.landing__headerLogo} src={logo} alt="Логотип сайта" />
        <Toggle />
      </header>
      <main>
        <div className={styles.landing__itemsContainer}>
          <h2 className={styles.landing__itemsContainerTitle}>
            Удобный сервис для&nbsp;
            <span className={styles.landing__itemsContainerTitleBlue}>тренеров, диетологов, нутрициологов</span>
          </h2>
          <p className={styles.landing__itemsContainerSubtitle}>
            Составление планов тренировок и&nbsp;питания, онлайн-поддержка клиентов&nbsp;в одном сервисе
          </p>
          <img className={styles.landing__itemsContainerImage} src={oneImg} alt="Первое изображение" />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
