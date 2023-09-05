import done from '../assets/images/authorize/img-done.svg';
import AuthForm from '../components/AuthForm';

const PasswordSaved: React.FC = () => {
  return (
    <AuthForm>
      <h3 className="authorize__title authorize__title_passwordSaved">Пароль сохранен</h3>
      <img className="authorize__img" src={done} alt="Пароль сохранен" />
    </AuthForm>
  );
};

export default PasswordSaved;
