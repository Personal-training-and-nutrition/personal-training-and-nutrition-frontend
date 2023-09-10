import styles from './Profile.module.scss';
import Button, { TypeBtnEnum } from '../../components/Button/Button';
import UserStatus from '../../components/UserStatus/UserStatus';
import penIcon from '../../assets/images/profile/pen-icon.svg';
import TitlePage from '../../components/TitlePage/TitlePage';
const Profile = ({ statusSpec }: { statusSpec: boolean }) => {
  return (
    <div className={styles.profile__content}>
      <TitlePage text="ПРОФИЛЬ" />
      <div className={styles.profile__avatar}>
        <p className={styles.profile__name}>H</p>
        <p className={styles.profile__surname}>A</p>
        {/* <button type="button" className="profile__add">
          <img src={addIcon} alt="Кнопка добавить аватарку" />
        </button> */}
      </div>
      <UserStatus statusSpec={statusSpec} />
      <form className={styles.profile__form}>
        <label className={styles.profile__label}>
          <span className={styles.profile__title}>Фамилия</span>
          <input className={`${styles.profile__input} ${styles.profile__input_bottom}`} type="text" required />
          <span className={`${styles.profile__error} ${styles.profile__error_active}`}>Ошибка!</span>
          <span className={styles.profile__title}>Имя</span>
          <input className={styles.profile__input} type="text" required />
          <span className={`${styles.profile__error} ${styles.profile__error_active}`}>Ошибка!</span>
          <span className={styles.profile__title}>Отчество</span>
          <input className={styles.profile__input} type="text" />
          <span className={`${styles.profile__error} ${styles.profile__error_active}`}>Ошибка!</span>
          <span className={styles.profile__title}>Дата рождения</span>
          <input className={styles.profile__input} type="date" />
          <span className={`${styles.profile__error} ${styles.profile__error_active}`}>Ошибка!</span>
        </label>
        <div className={styles.profile__label}>
          <span className={styles.profile__title_big}>Пол</span>
          <div className={styles.profile__wrap}>
            <label className={styles.profile__radio}>
              <input type="radio" name="gender" value="Женский" />
              <p>Женский</p>
            </label>
            <label className={styles.profile__radio}>
              <input type="radio" name="gender" value="Мужской" />
              <p>Мужской</p>
            </label>
          </div>
        </div>
        {/* в зависимости от статуса - будем показывать один из двух нижеидущих лейблов */}
        {statusSpec ? (
          <label className={styles.profile__label}>
            <span className={styles.profile__title_big}>Обо мне</span>
            <textarea className={`${styles.profile__input} ${styles.profile__input_big}`} name="aboutMe" />
          </label>
        ) : (
          <label className={styles.profile__label}>
            <span className={styles.profile__title_big}>Ваши параметры</span>
            <div className={styles.profile__size}>
              <span className={styles.profile__title}>Вес</span>
              <input className={`${styles.profile__input} ${styles.profile__input_params}`} type="text" name="weight" />
              <span className={styles.profile__title}>Рост</span>
              <input className={`${styles.profile__input} ${styles.profile__input_params}`} type="text" name="height" />
            </div>
          </label>
        )}

        <label className={styles.profile__label}>
          <span className={styles.profile__title}>Email</span>
          <input
            className={`${styles.profile__input} ${styles.profile__input_style}`}
            type="email"
            name="email"
            required
          />
        </label>
        <label className={styles.profile__label}>
          <span className={styles.profile__title}>Телефон</span>
          <input className={`${styles.profile__input} ${styles.profile__input_style}`} type="tel" name="tel" required />
          <button className={styles.profile__pen}>
            <img src={penIcon} alt="Кнопка редактировать" />
          </button>
        </label>
        <label className={styles.profile__label}>
          <span className={styles.profile__title}>Пароль</span>
          <input
            className={`${styles.profile__input} ${styles.profile__input_style}`}
            type="password"
            name="password"
          />
          <button className={styles.profile__pen}>
            <img src={penIcon} alt="Кнопка редактировать" />
          </button>
        </label>
        <Button textBtn="Сохранить" className="button__profile" type={TypeBtnEnum.SUBMIT} />
      </form>
      <button className={styles.profile__delete} type="button">
        Удалить профиль
      </button>
    </div>
  );
};

export default Profile;
