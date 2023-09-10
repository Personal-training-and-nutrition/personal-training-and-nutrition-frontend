import React from 'react';
import Button, { TypeBtnEnum } from '../../components/Button/Button';
import AuthForm from '../../components/AuthForm';
import { Link } from 'react-router-dom';
import iconUser from '../../assets/images/authorize/icon-input-user.svg';
import padlock from '../../assets/images/authorize/icon-padlock.svg';

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
          <span className="authorize__error authorize__error_active">Ошибка!!</span>
          <img className="authorize__icon" alt="" src={iconUser} />
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
          <span className="authorize__error authorize__error_active">Ошибка!!</span>
          <img className="authorize__icon" alt="" src={padlock} />
        </label>
      </div>

      <Button textBtn="Войти" type={TypeBtnEnum.SUBMIT} />
      <div className="wrap">
        <div className="wrap__line"></div>
        <span>ИЛИ</span>
        <div className="wrap__line"></div>
      </div>
      <Link to="/signin-netw">
        <Button textBtn="Войти через почту" className="button__mail" type={TypeBtnEnum.BUTTON} />
      </Link>
      <Link to="/password" className="authorize__link">
        Забыли пароль? Нажмите тут
      </Link>
    </AuthForm>
  );
};

export default Login;
