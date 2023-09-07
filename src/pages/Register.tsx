import React, { useState } from 'react';
import ButtonAuth from '../components/ButtonAuth';
import AuthForm from '../components/AuthForm';

const Register: React.FC = () => {
  type PropsValues = { name?: string; email?: string; password?: string; retryPassword?: string };
  const [values, setValues] = useState<PropsValues>();
  const [errors, setError] = useState<PropsValues>();

  const REGEX_USER_NAME = '[A-Za-zА-Яа-яЁё\\s]+';

  const handleChangeInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, validity } = evt.target;
    setValues((values) => ({ ...values, [name]: value }));

    if (validity.valid) {
      setError((errors) => ({ ...errors, [name]: false }));
    } else setError((errors) => ({ ...errors, [name]: true }));
  };

  return (
    <AuthForm>
      <h3 className="authorize__title">Регистрация</h3>
      <div className="authorize__container_register">
        <input
          className="authorize__input"
          id="name"
          name="name"
          type="text"
          placeholder="Имя/Фамилия"
          required
          pattern={REGEX_USER_NAME}
          value={values?.name || ''}
          onChange={handleChangeInput}
        />
        <span className={errors?.name ? 'authorize__error authorize__error_active' : 'authorize__error'}>
          Поле должно содержать только латиницу, кириллицу или пробел
        </span>

        <input
          className="authorize__input"
          id="email"
          name="email"
          type="email"
          placeholder="Адрес электронной почты"
          required
          value={values?.email || ''}
          onChange={handleChangeInput}
        />
        <span className={errors?.email ? 'authorize__error authorize__error_active' : 'authorize__error'}>
          Адрес электронной почты несоответствует шаблону: name@domain.zone
        </span>

        <input
          className="authorize__input"
          id="password"
          name="password"
          type="password"
          placeholder="Пароль"
          required
          autoComplete="on"
          value={values?.password || ''}
          onChange={handleChangeInput}
        />
        <span className={errors?.password ? 'authorize__error authorize__error_active' : 'authorize__error'}>
          Введите пароль.
        </span>

        <input
          className="authorize__input"
          id="retryPassword"
          name="retryPassword"
          type="password"
          placeholder="Пароль подтвердите"
          required
          autoComplete="on"
          value={values?.retryPassword || ''}
          onChange={handleChangeInput}
        />
        <span className={errors?.retryPassword ? 'authorize__error authorize__error_active' : 'authorize__error'}>
          Введите пароль.
        </span>

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
