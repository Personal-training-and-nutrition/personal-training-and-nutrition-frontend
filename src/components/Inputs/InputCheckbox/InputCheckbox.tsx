import { Link } from 'react-router-dom';
import styles from './InputCheckbox.module.scss';

const InputCheckbox = () => {
  return (
    <div className={styles.inputCheckbox__wrapper}>
      <label htmlFor="accept" className={styles.inputCheckbox__label}>
      <input type="checkbox" name="accept" id="accept" className={styles.inputCheckbox__input} />
      <span></span>
      </label>
      <p className={styles.inputCheckbox__text}>
        Я соглашаюсь с{' '}
        <Link to="" className={styles.inputCheckbox__link}>
          условиями обслуживания
        </Link>{' '}
        и{' '}
        <Link to="" className={styles.inputCheckbox__link}>
          политикой конфиденциальности
        </Link>
      </p>
    </div>
  );
};

export default InputCheckbox;
