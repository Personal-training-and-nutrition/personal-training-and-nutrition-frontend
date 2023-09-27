import styles from './AuthModal.module.scss';
import Modal from '../Modal';
import { Link } from 'react-router-dom';
import Button from '../../Button/Button';
import SocialIcons from '../../SocialIcons/SocialIcons';
import InputEmail from '../../Inputs/InputEmail/InputEmail';
import InputPassword from '../../Inputs/InputPassword/InputPassword';
import { useForm } from 'react-hook-form';
import { InputsType } from '../../../pages/ProfilePage/Profile';

const AuthModal = () => {
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm<InputsType>({mode: 'all'});
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <Modal>
      <h2 className={styles.authModal__title}>Добро пожаловать!</h2>
      <p className={styles.authModal__text}>Первый раз с нами?</p>
      <Link to="/register" className={styles.authModal__link}>
        Зарегистрироваться
      </Link>
      <form className={styles.authModal__form} onSubmit={onSubmit}>
        <InputEmail name="email" placeholder="Электронная почта" register={register}/>
        <InputPassword id="password" name="password" placeholder="Пароль" minLength={8} maxLenght={30} register={register}/>
        <Link to="/password-recovery" className={styles.authModal__link}>
          Я не помню пароль
        </Link>
        <Button textBtn="Войти" type="submit" isDirty={isDirty} isValid={isValid}></Button>
      </form>
      <p className={`${styles.authModal__text} ${styles.authModal__text_center} `}>или использовать</p>
      <SocialIcons />
    </Modal>
  );
};

export default AuthModal;
