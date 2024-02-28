import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './scss/app.scss';

import { useEffect } from 'react';
import AuthModal from './components/Modal/AuthModal/AuthModal';
import ChangePasswordModal from './components/Modal/ChangePasswordModal/ChangePasswordModal';
import ConfirmationTooltip from './components/Modal/ConfirmationTooltip/ConfirmationTooltip';
import ForgotPasswordModal from './components/Modal/ForgotPasswordModal/ForgotPasswordModal';
import ForgotPasswordTooltip from './components/Modal/ForgotPasswordTooltip/ForgotPasswordTooltip';
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
import MealReport from './pages/MealReport/MealReport';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
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

import {
  PATH_CLIENTS,
  PATH_CLIENT_CARD,
  PATH_CREATE_CLIENT,
  PATH_EDIT_CLIENT,
  PATH_FEEDBACK,
  PATH_MEAL_ALL_PLANS,
  PATH_MEAL_PLAN,
  PATH_MEAL_PLAN_CREATE,
  PATH_MEAL_PLAN_EDIT,
  PATH_MEAL_PLAN_UNAUTH,
  PATH_MEAL_REPORT,
  PATH_PROFILE_CLIENT,
  PATH_PROFILE_SPEC,
  PATH_SPECIALIST_PAGE,
  PATH_WORKOUT_ALL_PLANS,
  PATH_WORKOUT_PLAN,
  PATH_WORKOUT_PLAN_CREATE,
  PATH_WORKOUT_PLAN_EDIT,
  PATH_WORKOUT_PLAN_UNAUTH,
  PATH_WORKOUT_REPORT,
  navBarHideCases,
} from './utils/constants';

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
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route path="/reset-password" />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
        <Route path={PATH_MEAL_PLAN_UNAUTH} element={<PlanUnathMeal />} />
        <Route path={PATH_WORKOUT_PLAN_UNAUTH} element={<PlanUnathTraining />} />
        <Route path="/password-recovery/success" element={<ResetPasswordModal />} />
        <Route element={<RequireUser />}>
          <Route path={PATH_PROFILE_SPEC} element={<Profile />} />
          <Route path={PATH_PROFILE_CLIENT} element={<Profile />} />
          <Route path={PATH_CLIENTS} element={<Clients />} />
          <Route path={PATH_MEAL_ALL_PLANS} element={<MealPlans />} />
          <Route path={PATH_MEAL_PLAN} element={<MealPlan />} />
          <Route path={PATH_MEAL_PLAN_CREATE} element={<AddPlanMeal />} />
          <Route path={PATH_MEAL_PLAN_EDIT} element={<EditPlanMeal />} />
        </Route>
        <Route path={`${PATH_CLIENT_CARD}/:id`} element={<ClientCardPage />} />
        <Route path={PATH_CREATE_CLIENT} element={<AddClient />} />
        <Route path={PATH_EDIT_CLIENT} element={<EditClient />} />
        <Route path={PATH_MEAL_REPORT} element={<MealReport />} />
        <Route path={PATH_WORKOUT_ALL_PLANS} element={<WorkoutPlans />} />
        <Route path={PATH_WORKOUT_PLAN} element={<WorkoutPlan />} />
        <Route path={PATH_WORKOUT_PLAN_CREATE} element={<AddPlanTraining />} />
        <Route path={PATH_WORKOUT_PLAN_EDIT} element={<EditPlanTraining />} />
        <Route path={PATH_WORKOUT_REPORT} element={<TrainingReport />} />
        <Route path={PATH_SPECIALIST_PAGE} element={<SpecialistPage />} />
        <Route path={PATH_FEEDBACK} element={<FeedbackPage />} />
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
      <ForgotPasswordTooltip />


    </div>
  );
}

export default App;
