import React from 'react';
import Button, { TypeBtnEnum } from '../../components/Button/Button';
import AuthForm from '../../components/AuthForm';
import { Link } from 'react-router-dom';
import yandex from '../../assets/images/authorize/icon-yandex.svg';
import mail from '../../assets/images/authorize/icon-mail.svg';
import vk from '../../assets/images/authorize/icon-vk.svg';
import iconUser from '../../assets/images/authorize/icon-input-user.svg';

const AuthByEmail: React.FC = () => {
  return (
    <AuthForm>
      <h2 className="authorize__title_authByEmail">Почта</h2>
      <div className="authorize__iconsEmail">
        <button className="authorize__iconItem">
          <img src={yandex} alt="Яндекс" />
        </button>
        <button className="authorize__iconItem">
          <img src={mail} alt="Mail" />
        </button>
        <button className="authorize__iconItem">
          <img src={vk} alt="Вконтакте" />
        </button>
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

      <Button textBtn="Войти" type={TypeBtnEnum.SUBMIT} />
      <Link to="/password" className="authorize__link">
        Забыли пароль? Нажмите тут
      </Link>
    </AuthForm>
  );
};

export default AuthByEmail;
