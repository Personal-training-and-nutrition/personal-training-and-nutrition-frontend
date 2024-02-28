import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import BtnStart from '../../components/LandingPage/BtnStart/BtnStart';
import Header from '../../components/LandingPage/Header/Header';
import MainSection from '../../components/LandingPage/MainSection/MainSection';
import PromoSection from '../../components/LandingPage/PromoSection/PromoSection';
import Toggle from '../../components/LandingPage/Toggle/Toggle';
import useResize from '../../hooks/useResize';
import { useWindowPosition } from '../../hooks/useWindowPosition';
import { selectStatus } from '../../redux/slices/landingPageSlice';
import { openModal } from '../../redux/slices/modalsSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { PATH_CLIENTS } from '../../utils/constants';
import {
  landingPageSpeciatistParams,
  landingPageSpecImagesFromDesktop,
  landingPageUsersImagesFromDesktop,
  landingPageUsersParams,
} from '../../utils/LandingPageParams';
import styles from './LandingPage.module.scss';

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
    if (isLoggedIn) navigate(PATH_CLIENTS);
  }, [isLoggedIn]);

  useEffect(() => {
    if (location.pathname === '/reset-password/') {
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
