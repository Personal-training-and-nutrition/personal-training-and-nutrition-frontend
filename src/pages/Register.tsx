import React from 'react';
import ButtonAuth from '../components/ButtonAuth';
import AuthForm from '../components/AuthForm';

const Register: React.FC = () => {
  return (
    <AuthForm>
      <h3 className="authorize__title">Регистрация</h3>
      <div className="authorize__container_register">
        <input className="authorize__input" id="name" name="name" type="text" placeholder="Имя/Фамилия" required />

        <input
          className="authorize__input"
          id="email"
          name="email"
          type="text"
          placeholder="Адрес электронной почты"
          required
        />

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

        <label htmlFor="checkbox" className="authorize__label">
          <input className="authorize__checkbox" id="checkbox" name="checkbox" type="checkbox" />
          <p>Я согласен с условиями обслуживания и политикой конфиденциальности</p>
        </label>
      </div>
      <ButtonAuth textBtn="Зарегистрироваться" />
    </AuthForm>
  );
};

export default Register;
