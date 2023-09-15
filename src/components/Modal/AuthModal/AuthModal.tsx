import styles from './AuthModal.module.scss';
import Modal from '../Modal';
import { Link } from 'react-router-dom';
import Button from '../../Button/Button';
import SocialIcons from '../../SocialIcons/SocialIcons';
import InputEmail from '../../Inputs/InputEmail/InputEmail';
import InputPassword from '../../Inputs/InputPassword/InputPassword';

const AuthModal = () => {
  return (
    <Modal>
      <h2 className={styles.authModal__title}>Добро пожаловать!</h2>
      <p className={styles.authModal__text}>Первый раз с нами?</p>
      <Link to="/registerModal" className={styles.authModal__link}>
        Зарегистрироваться
      </Link>
      <form className={styles.authModal__form}>
        <InputEmail name="email" placeholder="Электронная почта" />
        <InputPassword name="password" placeholder="Пароль" minLength={8} maxLenght={30} />
        <Link to="/resetPassword" className={styles.authModal__link}>
          Я не помню пароль
        </Link>
        <Button textBtn="Войти" type="submit" isValid={true} isDirty={true}></Button>
      </form>
      <p className={`${styles.authModal__text} ${styles.authModal__text_center} `}>или использовать</p>
      <SocialIcons />
    </Modal>
  );
};

export default AuthModal;
