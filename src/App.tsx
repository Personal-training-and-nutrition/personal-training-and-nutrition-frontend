import './scss/app.scss';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import ChangePassword from './pages/ChangePassword';
import AuthByEmail from './pages/AuthByEmail';
import PasswordSaved from './components/PasswordSaved';
import LandingPage from './pages/LandingPage/LandingPage.tsx';

function App() {
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
      </Routes>
    </div>
  );
}

export default App;
