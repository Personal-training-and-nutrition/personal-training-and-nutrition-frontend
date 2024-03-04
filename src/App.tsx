import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AuthModal from './components/Modal/AuthModal/AuthModal';
import ChangePasswordModal from './components/Modal/ChangePasswordModal/ChangePasswordModal';
import ConfirmationTooltip from './components/Modal/ConfirmationTooltip/ConfirmationTooltip';
import ForgotPasswordModal from './components/Modal/ForgotPasswordModal/ForgotPasswordModal';
import ForgotPasswordTooltip from './components/Modal/ForgotPasswordTooltip/ForgotPasswordTooltip';
import RegisterModal from './components/Modal/RegisterModal/RegisterModal';
import ResetPasswordModal from './components/Modal/ResetPasswordModal/ResetPasswordModal';
import NavBar from './components/Navbar/NavBar';
import RoutesComponent from './components/RoutesComponent/RoutesComponent';
import useIsAuth from './hooks/useIsAuth';
import { useAppSelector } from './redux/store';
import './scss/app.scss';
import { PATH_CLIENTS, navBarHideCases } from './utils/constants';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const unauthDesktopClass = location.pathname.endsWith('unauth') ? 'App__desktopUnauth' : '';
  const appDesktopClass = !navBarHideCases.includes(location.pathname) ? 'App__desktop' : '';
  const { isLoggedIn, checkIsAuth } = useIsAuth();
  const { tooltip } = useAppSelector((state) => state.modal);

  // console.log(location.pathname.endsWith('unauth'));
  useEffect(() => {
    checkIsAuth();
    if (isLoggedIn) {
      navigate(PATH_CLIENTS);
    }
  }, []);

  return (
    <div className={`App ${appDesktopClass} ${unauthDesktopClass}`}>
      <RoutesComponent />
      {!navBarHideCases.includes(location.pathname) && <NavBar />}
      <ConfirmationTooltip
        title={tooltip.title}
        subtitle={tooltip.subtitle}
        btnText={tooltip.btnText}
        isTraining={tooltip.isTraining}
        link={tooltip.link!}
        isIcons={tooltip.isIcons}
        phoneNumber={tooltip.phoneNumber}
      />
      <AuthModal />
      <ForgotPasswordModal />
      <RegisterModal />
      <ResetPasswordModal />
      <ChangePasswordModal />
      <ForgotPasswordTooltip />
    </div>
  );
}

export default App;
