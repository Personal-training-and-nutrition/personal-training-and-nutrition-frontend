import ButtonAuth from '../components/ButtonAuth';
import AuthForm from '../components/AuthForm';
import React from "react";

const ChangePassword: React.FC = () => {
  return (
    <AuthForm>
      <h3 className="authorize__title">Изменить пароль</h3>
      <div className="authorize__container_changePassword">
        <input
          className="authorize__input"
          id="password"
          name="password"
          type="password"
          placeholder="Пароль"
          required
          autoComplete="on"
        />

        <input
          className="authorize__input"
          id="retryPassword"
          name="password"
          type="password"
          placeholder="Пароль подтвердите"
          required
          autoComplete="on"
        />
      </div>

      <ButtonAuth textBtn="Сохранить" />
    </AuthForm>
  );
};

export default ChangePassword;
