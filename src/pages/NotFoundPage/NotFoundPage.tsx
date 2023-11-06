import styles from './NotFoundPage.module.scss';
import logo from '../../assets/logo.svg';
import mainImage from '../../assets/not-found-page-img.svg';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className={styles.notFoundPage}>
      <img className={styles.notFoundPage__logo} src={logo} alt="Logo" />
      <img className={styles.notFoundPage__randomImage} src={mainImage} alt="something to show" />
      <h1 className={styles.notFoundPage__title}>Эта страница не существует</h1>
      <p className={styles.notFoundPage__desc}>
        Но остальные страницы на месте :)
      </p>
      <Link className={styles.notFoundPage__button} to="/">
        На главную
      </Link>

    </div>
  );
}

export default NotFoundPage;
