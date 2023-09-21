import React from 'react';
import styles from './LandingPage.module.scss';
import Header from '../../components/LandingPage/Header/Header.tsx';
import PromoSection from '../../components/LandingPage/PromoSection/PromoSection.tsx';
import MainSection from '../../components/LandingPage/MainSection/MainSection.tsx';
import BtnStart from '../../components/LandingPage/BtnStart/BtnStart.tsx';

const LandingPage: React.FC = () => {
  return (
    <div className={styles.landing}>
      <Header />
      <main>
        <PromoSection />
        <MainSection />
        <BtnStart />
      </main>
    </div>
  );
};

export default LandingPage;
