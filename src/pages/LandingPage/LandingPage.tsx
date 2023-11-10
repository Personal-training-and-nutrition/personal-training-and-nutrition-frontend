import styles from './LandingPage.module.scss';
import Header from '../../components/LandingPage/Header/Header.tsx';
import PromoSection from '../../components/LandingPage/PromoSection/PromoSection.tsx';
import MainSection from '../../components/LandingPage/MainSection/MainSection.tsx';
import BtnStart from '../../components/LandingPage/BtnStart/BtnStart.tsx';
import {
  landingPageSpeciatistParams,
  landingPageSpecImagesFromDesktop,
  landingPageUsersImagesFromDesktop,
  landingPageUsersParams,
} from '../../utils/LandingPageParams.ts';
import { useSelector } from 'react-redux';
import { selectStatus } from '../../redux/slices/landingPageSlice.ts';
import useResize from '../../hooks/useResize.ts';
import { useWindowPosition } from '../../hooks/useWindowPosition.tsx';
import Toggle from '../../components/LandingPage/Toggle/Toggle.tsx';
import { useEffect } from 'react';
import {useAppDispatch, useAppSelector} from '../../redux/store.ts';
import {useLocation, useNavigate} from 'react-router-dom';
import {openModal} from "../../redux/slices/modalsSlice.ts";

const LandingPage: React.FC = () => {
  const size = useResize();
  const scrollPosition = useWindowPosition();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();

  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);
  const { isStatusSpecialist } = useSelector(selectStatus);

  const listItems = isStatusSpecialist ? landingPageSpeciatistParams : landingPageUsersParams;
  const listImages =
    size.width >= 1440 && isStatusSpecialist ? landingPageSpecImagesFromDesktop : landingPageUsersImagesFromDesktop;

    useEffect(() => {
    if (isLoggedIn) navigate('/clients');
  }, [isLoggedIn]);

    useEffect(()=>{
      if (location.pathname === '/reset-password/'){
        dispatch(openModal({ modalId: 'resetPasswordModal' }));
      }
    }, [location]);

  return (
    <div className={styles.landing}>
      <div className={styles.landingContainer}>
        <Header />
        <main>
          <PromoSection />
          <div className={styles.landingSectionContainer}>
            {listItems.map((item, index) =>
              size.width < 1440 ? (
                <MainSection key={index} {...item} />
              ) : (
                <MainSection key={index} {...item} img={listImages[index]} />
              ),
            )}
          </div>

          {size.width < 768 && <BtnStart />}
          {size.width >= 768 && size.width < 1440 && scrollPosition.y > 355 && <BtnStart />}
          {size.width >= 1440 && <Toggle />}
        </main>
      </div>
    </div>
  );
};

export default LandingPage;
