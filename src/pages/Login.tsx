import React from 'react';
import ButtonAuth from '../components/ButtonAuth';
import AuthForm from '../components/AuthForm';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  return (
    <AuthForm>
      <div className="authorize__container_login">
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
        <label className="authorize__login-label">
          <input
            className="authorize__input authorize__input_login"
            id="password"
            name="password"
            type="password"
            placeholder="Пароль"
            required
            autoComplete="on"
          />
          <svg className="authorize__icon" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_387_1257)">
              <rect width="24" height="24" transform="translate(0.666992 0.140625)" fill="white" />
              <path
                d="M18.6669 10.6407V6.14067C18.6669 2.83309 15.9762 0.140625 12.667 0.140625C9.35873 0.140625 6.66706 2.83309 6.66706 6.14067V10.6407C5.01015 10.6407 3.66699 11.984 3.66699 13.6405V21.1406C3.66699 22.7976 5.01015 24.1406 6.66706 24.1406H18.6669C20.3235 24.1406 21.667 22.7976 21.667 21.1406V13.6405C21.6671 11.984 20.3235 10.6407 18.6669 10.6407ZM13.4171 17.9105V20.3905C13.4171 20.8051 13.0816 21.1406 12.667 21.1406C12.2524 21.1406 11.917 20.8051 11.917 20.3905V17.9105C11.4768 17.6499 11.1671 17.1898 11.1671 16.6407C11.1671 15.8114 11.8387 15.1406 12.667 15.1406C13.4953 15.1406 14.167 15.8114 14.167 16.6407C14.1671 17.1898 13.857 17.65 13.4171 17.9105ZM15.6669 10.6407H9.66703V6.14067C9.66703 4.4854 11.0124 3.1406 12.667 3.1406C14.3208 3.1406 15.6668 4.4854 15.6668 6.14067V10.6407H15.6669Z"
                fill="#363D29"
              />
            </g>
            <defs>
              <clipPath id="clip0_387_1257">
                <rect width="24" height="24" fill="white" transform="translate(0.666992 0.140625)" />
              </clipPath>
            </defs>
          </svg>
        </label>
      </div>

      <ButtonAuth textBtn="Войти/зарегистрироваться" />
      <div className="wrap">
        <div className="wrap__line"></div>
        <span>ИЛИ</span>
        <div className="wrap__line"></div>
      </div>
      <Link to="/signin-netw">
        <ButtonAuth textBtn="Войти через почту" className="buttonAuthMail" />
      </Link>
      <Link to="/password" className="authorize__link">
        Забыли пароль? Нажмите тут
      </Link>
    </AuthForm>
  );
};

export default Login;
