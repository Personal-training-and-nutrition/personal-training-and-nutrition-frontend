import React from 'react';
import ButtonAuth from '../components/ButtonAuth';
import AuthForm from '../components//AuthForm';
import { Link } from 'react-router-dom';
import google from '../assets/image/google_icon.jpg';

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
          <svg className="authorize__icon" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.666992 21C0.666992 18.8783 1.50985 16.8434 3.01014 15.3431C4.51043 13.8429 6.54526 13 8.66699 13C10.7887 13 12.8236 13.8429 14.3238 15.3431C15.8241 16.8434 16.667 18.8783 16.667 21H0.666992ZM8.66699 12C5.35199 12 2.66699 9.315 2.66699 6C2.66699 2.685 5.35199 0 8.66699 0C11.982 0 14.667 2.685 14.667 6C14.667 9.315 11.982 12 8.66699 12Z"
              fill="#363D29"
            />
          </svg>
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
