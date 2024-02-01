import Slider from '../../Slider/Slider';
import styles from './PersonalDataSpec.module.scss';
import foto from '../../../assets/images/spec-card/foto-spec.svg';

const PersonalDataSpec: React.FC = () => {
  return (
    <section className={styles.personalData}>
      <Slider>
        <img className={styles.personalData__foto} alt="" src={foto} />
        <img className={styles.personalData__foto} alt="" src={foto} />
        <img className={styles.personalData__foto} alt="" src={foto} />
      </Slider>

      <div className={styles.personalData__wrap}>
        <h3 className={styles.personalData__name}>Александра Груздева</h3>
        <p className={styles.personalData__profession}>Нутрициолог, диетолог</p>
        <p className={styles.personalData__experience}>Стаж: 7 лет</p>
      </div>
      <div className={styles.personalData__verified}>
        <span className={styles.personalData__verifiedIcon}></span>
        <p className={`${styles.personalData__title} ${styles.personalData__title_color}`}>Паспорт проверен</p>
      </div>
      <ul className={styles.personalData__rating}>
        <li className={styles.personalData__ratingList}>
          <span className={`${styles.personalData__ratingIcon} ${styles.personalData__iconStar}`}></span>
          <p className={styles.personalData__ratingTitle}>5,0</p>
        </li>
        <li className={styles.personalData__ratingList}>
          <span className={`${styles.personalData__ratingIcon} ${styles.personalData__iconComment}`}></span>
          <a className={`${styles.personalData__ratingTitle} ${styles.personalData__ratingTitle_link}`} href="/">
            15 отзывов
          </a>
        </li>
      </ul>
      <div className={styles.personalData__access}>
        <div className={styles.personalData__accessWrap}>
          <span className={`${styles.personalData__accessIcon} ${styles.personalData__accessIcon_online}`}></span>
          <p className={styles.personalData__title}>Онлайн консультации</p>
        </div>

        <div className={styles.personalData__accessWrap}>
          <span className={`${styles.personalData__accessIcon} ${styles.personalData__accessIcon_point}`}></span>
          <p className={styles.personalData__title}>Россия, Москва, Крылатское</p>
        </div>
      </div>
    </section>
  );
};

export default PersonalDataSpec;
