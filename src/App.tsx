import './scss/app.scss';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/AuthPages/Login';
import Register from './pages/AuthPages/Register';
import ChangePassword from './pages/AuthPages/ChangePassword';
import AuthByEmail from './pages/AuthPages/AuthByEmail.tsx';
import PasswordSaved from './components/PasswordSaved';
import LandingPage from './pages/LandingPage/LandingPage.tsx';
import Profile from './pages/ProfilePage/Profile.tsx';
import PlanMeal from './components/PlanPage/PlanMeal.tsx';

function App() {
  // const [statusSpec, setStatusSpec] = useState(false)

  return (
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
        <Route path="/planMeal" element={<PlanMeal />} />
      </Routes>
    </div>
  );
}

export default App;
