import ButtonAuth from '../components/ButtonAuth';
import UserStatus from './UserStatus';
import addIcon from '../assets/images/profile/add-icon.svg';
import penIcon from '../assets/images/profile/pen-icon.svg';
const Profile = ({ statusSpec }: { statusSpec: boolean }) => {
  return (
    <div className="profile__content">
      <div className="profile__avatar">
        CT
        <button type="button" className="profile__add">
          <img src={addIcon} alt="Кнопка добавить аватарку" />
        </button>
      </div>
      <UserStatus statusSpec={statusSpec} />
      <form className="profile__form">
        <label className="profile__label">
          <span className="profile__title">Фамилия</span>
          <input className="profile__input" type="text" />
          <span className="profile__title">Имя</span>
          <input className="profile__input" type="text" />
          <span className="profile__title">Отчество</span>
          <input className="profile__input" type="text" />
          <span className="profile__title">Дата рождения</span>
          <input className="profile__input" type="date" />
        </label>
        <label className="profile__label">
          <span className="profile__title_sizeBig">Пол</span>
          <div className="profile__radio-wrap">
            <input className="profile__radio" type="radio" name="gender" value="Женский" />
            <p className="profile__item">Женский</p>
            <input className="profile__radio" type="radio" name="gender" value="Мужской" />
            <p className="profile__item">Мужской</p>
          </div>
        </label>
        {/* в зависимости от статуса - будем показывать один из двух нижеидущих лейблов */}
        {statusSpec ? (
          <label className="profile__label">
            <span className="profile__title_sizeBig">Обо мне</span>
            <textarea className="profile__input profile__input_bigHeight" name="aboutMe" />
          </label>
        ) : (
          <label className="profile__label profile__label_size">
            <div className="profile__wrap-size">
              <span className="profile__title">Рост</span>
              <input className="profile__input" type="text" name="height" />
            </div>
            <div className="profile__wrap-size">
              <span className="profile__title">Вес</span>
              <input className="profile__input" type="text" name="weight" />
            </div>
          </label>
        )}

        {/* если статус специалист то это: */}

        <label className="profile__label">
          <span className="profile__title">Email</span>
          <input
            className="profile__input profile__input_style
          "
            type="email"
            name="email"
          />
        </label>
        <label className="profile__label">
          <span className="profile__title">Телефон</span>
          <input className="profile__input profile__input_style" type="tel" name="tel" />
          <button className="profile__pen">
            <img src={penIcon} alt="Кнопка редактировать" />
          </button>
        </label>
        <label className="profile__label">
          <span className="profile__title">Пароль</span>
          <input
            className="profile__input profile__input_style
          "
            type="password"
            name="password"
          />
          <button className="profile__pen">
            <img src={penIcon} alt="Кнопка редактировать" />
          </button>
        </label>
        <ButtonAuth textBtn="Сохранить" className="buttonAuth_profile" />
      </form>
      <button className="profile__delete" type="button">
        Удалить профиль
      </button>
    </div>
  );
};

export default Profile;
