import React from 'react';
import ButtonAuth from '../components/ButtonAuth';
import AuthForm from '../components//AuthForm';
import { Link } from 'react-router-dom';
import google from '../assets/images/authorize/icon-google.jpg';
import iconUser from '../assets/images/authorize/icon-input-user.svg';

const AuthByEmail: React.FC = () => {
  return (
    <AuthForm>
      <h2 className="authorize__title_authByEmail">Почта</h2>
      <div className="authorize__iconsEmail">
        <a href="google.com" className="authorize__iconItem">
          <img src={google} alt="" />
        </a>
        <a href="google.com" className="authorize__iconItem">
          <img src={google} alt="" />
        </a>
        <a href="google.com" className="authorize__iconItem">
          <img src={google} alt="" />
        </a>
      </div>
      <div className="authorize__container_authByEmail">
        <label className="authorize__login-label">
          <input
            className="authorize__input"
            id="email"
            name="email"
            type="text"
            placeholder="Почта/телефон"
            required
          />
          <span className="authorize__error authorize__error_active">Ошибка!!</span>
          <img className="authorize__icon" alt="" src={iconUser} />
        </label>
      </div>

      <ButtonAuth textBtn="Войти" />
      <Link to="/password" className="authorize__link">
        Забыли пароль? Нажмите тут
      </Link>
    </AuthForm>
  );
};

export default AuthByEmail;
