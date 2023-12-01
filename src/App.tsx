import './scss/app.scss';
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';
import Profile from './pages/ProfilePage/Profile';
import AddPlanMeal from './pages/PlanPage/AddPlanMeal';
import AddPlanTraining from './pages/PlanPage/AddPlanTraining';
import AuthModal from './components/Modal/AuthModal/AuthModal';
import RegisterModal from './components/Modal/RegisterModal/RegisterModal';
import ForgotPasswordModal from './components/Modal/ForgotPasswordModal/ForgotPasswordModal';
import ResetPasswordModal from './components/Modal/ResetPasswordModal/ResetPasswordModal';
import ConfirmationTooltip from './components/Modal/ConfirmationTooltip/ConfirmationTooltip';
import EditPlanTraining from './pages/PlanPage/EditPlanTraining';
import EditPlanMeal from './pages/PlanPage/EditPlanMeal';
import ClientCardPage from './pages/ClientCardPage/ClientCardPage';
import AddClient from './pages/AddClient/AddClient';
import Clients from './pages/Clients/Clients';
import WorkoutPlans from './pages/WorkoutPlans/WorkoutPlans';
import TrainingReport from './pages/TrainingReport/TrainingReport';
import PlanUnathMeal from './pages/PlanPage/PlanUnathMeal';
import PlanUnathTraining from './pages/PlanPage/PlanUnathTraining';
import WorkoutPlan from './pages/WorkoutPlan/WorkoutPlan';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import NavBar from './components/Navbar/NavBar';
import {navBarHideCases} from './utils/constants';
import MealPlans from './pages/MealPlans/MealPlans';
import MealPlan from './pages/MealPlan/MealPlan';
import NutritionReport from './pages/NutritionReport/NutritionReport';
import RequireUser from './components/RequireUser/RequireUser';
import useIsAuth from './hooks/useIsAuth';
import {useEffect} from 'react';
import {useAppSelector} from './redux/store';
import EditClient from './pages/EditClient/EditClient';
import ChangePasswordModal from './components/Modal/ChangePasswordModal/ChangePasswordModal';
import ForgotPasswordTooltipModal from "./components/Modal/ForgotPasswordTooltipModal/ForgotPasswordTooltipModal";
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const unauthDesktopClass = location.pathname.endsWith('unauth') ? 'App__desktopUnauth' : '';
  const appDesktopClass = !navBarHideCases.includes(location.pathname) ? 'App__desktop' : '';
  const {isLoggedIn, checkIsAuth} = useIsAuth();
  const {tooltip} = useAppSelector((state) => state.modal);

  // console.log(location.pathname.endsWith('unauth'));
  useEffect(() => {
    checkIsAuth();
    if (isLoggedIn) {
      navigate('/clients');
    }
  }, [isLoggedIn]);

  return (
    <div className={`App ${appDesktopClass} ${unauthDesktopClass}`}>
      <Routes>
        <Route path="/" element={<LandingPage/>}>
          <Route path="/reset-password"/>
        </Route>
        <Route path="/sign-in" element={<LoginPage/>}/>
        <Route path="/sign-up" element={<RegisterPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
        <Route path="/meal-plan/unauth" element={<PlanUnathMeal/>}/>
        <Route path="/workout-plan/unauth" element={<PlanUnathTraining/>}/>
        <Route path="/password-recovery/success" element={<ResetPasswordModal/>}/>
        <Route element={<RequireUser/>}>
          <Route path="/user-profile/specialist" element={<Profile/>}/>
          <Route path="/user-profile/client" element={<Profile/>}/>
          <Route path="/clients" element={<Clients/>}/>
          <Route path="/meal-plans" element={<MealPlans/>}/>
          <Route path="/meal-plan" element={<MealPlan/>}/>
          <Route path="/meal-plan/create" element={<AddPlanMeal/>}/>
          <Route path="/meal-plan/edit" element={<EditPlanMeal/>}/>
        </Route>
        <Route path="/client/card/:id" element={<ClientCardPage/>}/>
        <Route path="/client/new" element={<AddClient/>}/>
        <Route path="/client/edit" element={<EditClient/>}/>
        <Route path="/nutrition-report" element={<NutritionReport/>}/>
        <Route path="/workout-plans" element={<WorkoutPlans/>}/>
        <Route path="/workout-plan" element={<WorkoutPlan/>}/>
        <Route path="/workout-plan/create" element={<AddPlanTraining/>}/>
        <Route path="/workout-plan/edit" element={<EditPlanTraining/>}/>
        <Route path="/workout-report" element={<TrainingReport/>}/>
      </Routes>
      {!navBarHideCases.includes(location.pathname) && <NavBar/>}
      <ConfirmationTooltip
        title={tooltip.title}
        subtitle={tooltip.subtitle}
        btnText={tooltip.btnText}
        isTraining={tooltip.isTraining}
        link={tooltip.link!}
        isIcons={tooltip.isIcons}
        phoneNumber={tooltip.phoneNumber}
      />
      <AuthModal/>
      <ForgotPasswordModal/>
      <RegisterModal/>
      <ResetPasswordModal/>
      <ChangePasswordModal/>
      <ForgotPasswordTooltipModal/>
    </div>
  );
}

export default App;
