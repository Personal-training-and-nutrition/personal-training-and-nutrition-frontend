import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './scss/app.scss';

import { useEffect } from 'react';
import AuthModal from './components/Modal/AuthModal/AuthModal';
import ChangePasswordModal from './components/Modal/ChangePasswordModal/ChangePasswordModal';
import ConfirmationTooltip from './components/Modal/ConfirmationTooltip/ConfirmationTooltip';
import ForgotPasswordModal from './components/Modal/ForgotPasswordModal/ForgotPasswordModal';
import ForgotPasswordTooltipModal from './components/Modal/ForgotPasswordTooltipModal/ForgotPasswordTooltipModal';
import RegisterModal from './components/Modal/RegisterModal/RegisterModal';
import ResetPasswordModal from './components/Modal/ResetPasswordModal/ResetPasswordModal';
import NavBar from './components/Navbar/NavBar';
import RequireUser from './components/RequireUser/RequireUser';
import useIsAuth from './hooks/useIsAuth';
import AddClient from './pages/AddClient/AddClient';
import ClientCardPage from './pages/ClientCardPage/ClientCardPage';
import Clients from './pages/Clients/Clients';
import EditClient from './pages/EditClient/EditClient';
import FeedbackPage from './pages/FeedbackPage/FeedbackPage';
import LandingPage from './pages/LandingPage/LandingPage';
import MealPlan from './pages/MealPlan/MealPlan';
import MealPlans from './pages/MealPlans/MealPlans';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import NutritionReport from './pages/NutritionReport/NutritionReport';
import AddPlanMeal from './pages/PlanPage/AddPlanMeal';
import AddPlanTraining from './pages/PlanPage/AddPlanTraining';
import EditPlanMeal from './pages/PlanPage/EditPlanMeal';
import EditPlanTraining from './pages/PlanPage/EditPlanTraining';
import PlanUnathMeal from './pages/PlanPage/PlanUnathMeal';
import PlanUnathTraining from './pages/PlanPage/PlanUnathTraining';
import Profile from './pages/ProfilePage/Profile';
import SpecialistPage from './pages/SpecialistPage/SpecialistPage';
import TrainingReport from './pages/TrainingReport/TrainingReport';
import WorkoutPlan from './pages/WorkoutPlan/WorkoutPlan';
import WorkoutPlans from './pages/WorkoutPlans/WorkoutPlans';
import { useAppSelector } from './redux/store';
import { PATH_CARDSPEC_PAGE, PATH_FEEDBACK_PAGE, navBarHideCases } from './utils/constants';

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
      navigate('/clients');
    }
  }, []);

  return (
    <div className={`App ${appDesktopClass} ${unauthDesktopClass}`}>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route path="/reset-password" />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/meal-plan/unauth" element={<PlanUnathMeal />} />
        <Route path="/workout-plan/unauth" element={<PlanUnathTraining />} />
        <Route path="/password-recovery/success" element={<ResetPasswordModal />} />
        <Route element={<RequireUser />}>
          <Route path="/user-profile/specialist" element={<Profile />} />
          <Route path="/user-profile/client" element={<Profile />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/meal-plans" element={<MealPlans />} />
          <Route path="/meal-plan" element={<MealPlan />} />
          <Route path="/meal-plan/create" element={<AddPlanMeal />} />
          <Route path="/meal-plan/edit" element={<EditPlanMeal />} />
        </Route>
        <Route path="/client/card/:id" element={<ClientCardPage />} />
        <Route path="/client/new" element={<AddClient />} />
        <Route path="/client/edit" element={<EditClient />} />
        <Route path="/nutrition-report" element={<NutritionReport />} />
        <Route path="/workout-plans" element={<WorkoutPlans />} />
        <Route path="/workout-plan" element={<WorkoutPlan />} />
        <Route path="/workout-plan/create" element={<AddPlanTraining />} />
        <Route path="/workout-plan/edit" element={<EditPlanTraining />} />
        <Route path="/workout-report" element={<TrainingReport />} />
        <Route path={PATH_CARDSPEC_PAGE} element={<SpecialistPage />} />
        <Route path={PATH_FEEDBACK_PAGE} element={<FeedbackPage />} />
      </Routes>
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
      <ForgotPasswordTooltipModal />
    </div>
  );
}

export default App;
