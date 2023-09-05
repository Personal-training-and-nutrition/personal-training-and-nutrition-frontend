import './scss/app.scss';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import ChangePassword from './pages/ChangePassword';
import AuthByEmail from './pages/AuthByEmail';
import PasswordSaved from './components/PasswordSaved';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="signup" element={<Register />} />
        <Route path="signin" element={<Login />} />
        <Route path="password" element={<ChangePassword />} />
        <Route path="signin-netw" element={<AuthByEmail />} />
        <Route path="saved" element={<PasswordSaved />} />
      </Routes>
    </div>
  );
}

export default App;
