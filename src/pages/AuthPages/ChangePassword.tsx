import Button, { TypeBtnEnum } from '../../components/Button/Button';
import AuthForm from '../../components/AuthForm';
import React from 'react';

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
        <span className="authorize__error authorize__error_active">Ошибка!!</span>
        <input
          className="authorize__input"
          id="retryPassword"
          name="password"
          type="password"
          placeholder="Пароль подтвердите"
          required
          autoComplete="on"
        />
        <span className="authorize__error authorize__error_active">Ошибка!!</span>
      </div>

      <Button textBtn="Сохранить" type={TypeBtnEnum.SUBMIT} />
    </AuthForm>
  );
};

export default ChangePassword;
