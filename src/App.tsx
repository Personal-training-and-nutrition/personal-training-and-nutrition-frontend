import './scss/app.scss';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

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
import { navBarHideCases } from './utils/constants.tsx';
import MealPlans from './pages/MealPlans/MealPlans.tsx';
import MealPlan from './pages/MealPlan/MealPlan.tsx';
import NutritionReport from './pages/NutritionReport/NutritionReport.tsx';
import RequireUser from './components/RequireUser/RequireUser.tsx';
import useIsAuth from './hooks/useIsAuth.ts';
import { useEffect } from 'react';


function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const unauthDesktopClass = location.pathname.endsWith('unauth') ? 'App__desktopUnauth' : '';
  const appDesktopClass = !navBarHideCases.includes(location.pathname) ? 'App__desktop' : '';
  const { isLoggedIn, checkIsAuth } = useIsAuth();

  // console.log(location.pathname.endsWith('unauth'));
  useEffect(() => {
    checkIsAuth()
    if(isLoggedIn) {
      navigate('/clients')
    }
  }, [isLoggedIn])

  return (
    <div className={`App ${appDesktopClass} ${unauthDesktopClass}`}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/meal-plan/unauth" element={<PlanUnathMeal />} />
        <Route path="/workout-plan/unauth" element={<PlanUnathTraining />} />
        <Route path="/password-recovery/success" element={<ForgotPasswordTooltipModal />} />
        <Route element={<RequireUser />}>
        <Route path="/user-profile/specialist" element={<Profile statusSpec={true} />} />
        <Route path="/user-profile/client" element={<Profile statusSpec={false} />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/meal-plans" element={<MealPlans />} />
        <Route path="/meal-plan" element={<MealPlan />} />
        <Route path="/meal-plan/create" element={<AddPlanMeal />} />
        <Route path="/meal-plan/edit" element={<EditPlanMeal />} />
        </Route>
        <Route path="/client/card/:id" element={<ClientCardPage />} />
        <Route path="/client/new" element={<AddClient />} />
        <Route path="/nutrition-report" element={<NutritionReport />} />
        <Route path="/workout-plans" element={<WorkoutPlans />} />
        <Route path="/workout-plan" element={<WorkoutPlan />} />
        <Route path="/workout-plan/create" element={<AddPlanTraining />} />
        <Route path="/workout-plan/edit" element={<EditPlanTraining />} />
        <Route path="/workout-report" element={<TrainingReport />} />
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
      </Routes>
      {!navBarHideCases.includes(location.pathname) && <NavBar statusSpec={true} />}
      <AuthModal />
      <ForgotPasswordModal />
      <RegisterModal />
      <ResetPasswordModal />
    </div>
  );
}

export default App;