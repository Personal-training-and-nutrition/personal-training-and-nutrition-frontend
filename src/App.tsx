import './scss/app.scss';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar.tsx';
import Login from './pages/AuthPages/Login';
import Register from './pages/AuthPages/Register';
import ChangePassword from './pages/AuthPages/ChangePassword';
import AuthByEmail from './pages/AuthPages/AuthByEmail.tsx';
import PasswordSaved from './components/PasswordSaved';
import LandingPage from './pages/LandingPage/LandingPage.tsx';
import Profile from './pages/ProfilePage/Profile.tsx';

import PlanMealAdd from './pages/PlanPage/PlanMealAdd.tsx';
import PlanTrainingAdd from './pages/PlanPage/PlanTrainingAdd.tsx';
import AuthModal from './components/Modal/AuthModal/AuthModal.tsx';
import RegisterModal from './components/Modal/RegisterModal/RegisterModal.tsx';
import ForgotPasswordModal from './components/Modal/ForgotPasswordModal/ForgotPasswordModal.tsx';
import ForgotPasswordTooltipModal from './components/Modal/ForgotPasswordTooltipModal/ForgotPasswordTooltipModal.tsx';
import ResetPasswordModal from './components/Modal/ResetPasswordModal/ResetPasswordModal.tsx';
import ResetPasswordTooltip from './components/Modal/ResetPasswordTooltip/ResetPasswordTooltip.tsx';
import ConfirmationTooltip from './components/Modal/ConfirmationTooltip/ConfirmationTooltip.tsx';
import PlanItem from './components/PlanItem/PlanItem.tsx';
import ClientCardPage from './pages/ClientCardPage/ClientCardPage.tsx';

function App() {
  // const [isStatusSpec, setIsStatusSpec] = useState(false)

  return (
    <>
      <div className="App">
        <Routes>
          <Route path="signup" element={<Register />} />
          <Route path="signin" element={<Login />} />
          <Route path="password" element={<ChangePassword />} />
          <Route path="signin-netw" element={<AuthByEmail />} />
          <Route path="saved" element={<PasswordSaved />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/nutrition" element={<LandingPage />} />
          <Route path="/trainer" element={<LandingPage />} />
          <Route path="/spec" element={<Profile statusSpec={true} />} />

          <Route path="/client" element={<Profile statusSpec={false} />} />
          <Route path="/client-card" element={<ClientCardPage />} />

          <Route path="/planMeal" element={<PlanMealAdd />} />
          <Route path="/planTraining" element={<PlanTrainingAdd />} />

          <Route path="/authModal" element={<AuthModal />} />
          <Route path="/registerModal" element={<RegisterModal />} />
          <Route path="/forgotPassword" element={<ForgotPasswordModal />} />
          <Route path="/forgotPasswordTooltip" element={<ForgotPasswordTooltipModal />} />
          <Route path="/resetPassword" element={<ResetPasswordModal />} />
          <Route path="/resetPasswordTooltip" element={<ResetPasswordTooltip />} />
          <Route
            path="/confirmationTooltip"
            element={
              <ConfirmationTooltip
                title="План тренировок сохранен"
                subtitle="Отправьте его клиенту"
                btnText="Скопировать ссылку"
              />
            }
          />

          <Route
            path="/planItem"
            element={
              <ul style={{ margin: '0', padding: '0' }}>
                <PlanItem />
              </ul>
            }
          />
        </Routes>
      </div>
      <NavBar statusSpec={false} />
    </>
  );
}

export default App;
