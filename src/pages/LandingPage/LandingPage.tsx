import styles from './LandingPage.module.scss';
import Header from '../../components/LandingPage/Header/Header.tsx';
import PromoSection from '../../components/LandingPage/PromoSection/PromoSection.tsx';
import MainSection from '../../components/LandingPage/MainSection/MainSection.tsx';
import BtnStart from '../../components/LandingPage/BtnStart/BtnStart.tsx';
import { landingPageSpeciatistParams, landingPageUsersParams } from '../../utils/LandingPageParams.ts';
import { useSelector } from 'react-redux';
import { selectStatus } from '../../redux/slices/LandingPageSlice.ts';

const LandingPage: React.FC = () => {
  const { isStatusSpecialist } = useSelector(selectStatus);
  const listItems = isStatusSpecialist ? landingPageSpeciatistParams : landingPageUsersParams;

  return (
    <div className={styles.landing}>
      <div className="App__container"></div>
      <Header />
      <main>
        <PromoSection />

        {listItems.map((item, index) => (
          <MainSection key={index} {...item} />
        ))}

        <BtnStart />
      </main>
    </div>
  );
};

export default LandingPage;
