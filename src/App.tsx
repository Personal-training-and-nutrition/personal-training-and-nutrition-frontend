import './scss/app.scss';
import { Route, Routes, useLocation } from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage.tsx';
import Profile from './pages/ProfilePage/Profile.tsx';
import AddPlanMeal from './pages/PlanPage/AddPlanMeal.tsx';
import AddPlanTraining from './pages/PlanPage/AddPlanTraining.tsx';
import AuthModal from './components/Modal/AuthModal/AuthModal.tsx';
import RegisterModal from './components/Modal/RegisterModal/RegisterModal.tsx';
import ForgotPasswordModal from './components/Modal/ForgotPasswordModal/ForgotPasswordModal.tsx';
import ForgotPasswordTooltipModal from './components/Modal/ForgotPasswordTooltipModal/ForgotPasswordTooltipModal.tsx';
import ResetPasswordModal from './components/Modal/ResetPasswordModal/ResetPasswordModal.tsx';
import ConfirmationTooltip from './components/Modal/ConfirmationTooltip/ConfirmationTooltip.tsx';
import EditPlanTraining from './pages/PlanPage/EditPlanTraining.tsx';
import EditPlanMeal from './pages/PlanPage/EditPlanMeal.tsx';
import ClientCardPage from './pages/ClientCardPage/ClientCardPage.tsx';
import AddClient from './pages/AddClient/AddClient.tsx';
import Clients from './pages/Clients/Clients.tsx';
import WorkoutPlans from './pages/WorkoutPlans/WorkoutPlans.tsx';
import TrainingReport from './pages/TrainingReport/TrainingReport.tsx';
import PlanUnathMeal from './pages/PlanPage/PlanUnathMeal';
import PlanUnathTraining from './pages/PlanPage/PlanUnathTraining.tsx';
import WorkoutPlan from './pages/WorkoutPlan/WorkoutPlan.tsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.tsx';
import NavBar from './components/Navbar/NavBar.tsx';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/spec" element={<Profile statusSpec={true} />} />
        <Route path="/client" element={<Profile statusSpec={false} />} />
        <Route path="/client-card" element={<ClientCardPage />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/addPlanMeal" element={<AddPlanMeal />} />
        <Route path="/addPlanTrain" element={<AddPlanTraining />} />
        <Route path="/authModal" element={<AuthModal />} />
        <Route path="/registerModal" element={<RegisterModal />} />
        <Route path="/forgotPassword" element={<ForgotPasswordModal />} />
        <Route path="/forgotPasswordTooltip" element={<ForgotPasswordTooltipModal />} />
        <Route path="/resetPassword" element={<ResetPasswordModal />} />
        <Route path="/addClient" element={<AddClient />} />
        <Route path="/workout-plans" element={<WorkoutPlans />} />
        <Route path="/training-report" element={<TrainingReport />} />
        <Route
          path="/confirmationTooltip"
          element={
            <ConfirmationTooltip
              title="План тренировок сохранен"
              subtitle="Отправьте его клиенту"
              btnText="Скопировать ссылку"
              isTraining={false}
            />
          }
        />
        <Route path="/editPlanTrain" element={<EditPlanTraining />} />
        <Route path="/editPlanMeal" element={<EditPlanMeal />} />
        <Route path="/unAuthPlanMeal" element={<PlanUnathMeal />} />
        <Route path="/unAuthPlanTrain" element={<PlanUnathTraining />} />
        <Route path="/workout-plan" element={<WorkoutPlan />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {location.pathname !== '/' && <NavBar statusSpec={false} />}
    </div>
  );
}

export default App;
