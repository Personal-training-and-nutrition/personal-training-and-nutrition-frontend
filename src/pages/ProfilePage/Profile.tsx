import { useForm } from 'react-hook-form';
import styles from './Profile.module.scss';
import Button, { TypeBtnEnum } from '../../components/Button/Button';
import UserStatusBtn from '../../components/UserStatusBtn/UserStatusBtn';
import penIcon from '../../assets/images/profile/pen-icon.svg';
import TitleBlock from '../../components/TitleBlock/TitleBlock';

// const data = { surname: 'Vbv', weight: 22, height: 165 };
const Profile = ({ statusSpec }: { statusSpec: boolean }) => {
  type InputsType = {
    surname: string;
    name: string;
    middlename?: string;
    birthday?: number;
    gender?: '';
    weight?: string;
    height?: string;
    aboutMe?: string;
    email: string;
    tel: number;
    password: string | number;
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<InputsType>({
    mode: 'onChange',
    // defaultValues: {
    //   surname: data.surname,
    //   weight: data?.weight + ' кг' || '',
    //   height: data?.height + ' см' || '',
    // },
  });
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className={styles.profile__content}>
      <TitleBlock text="ПРОФИЛЬ" />
      <div className={styles.profile__avatar}>
        <p className={styles.profile__name}>H</p>
        <p className={styles.profile__surname}>A</p>
      </div>
      <UserStatusBtn statusSpec={statusSpec} />
      <form className={styles.profile__form} onSubmit={onSubmit}>
        <label className={styles.profile__label}>
          <span className={styles.profile__title}>Фамилия</span>
          <input
            className={`${styles.profile__input} ${styles.profile__input_bottom}`}
            type="text"
            {...register('surname', {
              required: 'Поле не должно быть пустым',
            })}
            // placeholder="Фамилия"
          />
          <span
            className={
              errors?.surname ? `${styles.profile__error} ${styles.profile__error_active}` : `${styles.profile__error}`
            }
          >
            {errors?.surname?.message || 'Ошибка!'}
          </span>
          <span className={styles.profile__title}>Имя</span>
          <input
            className={styles.profile__input}
            type="text"
            {...register('name', { required: 'Поле не должно быть пустым' })}
          />
          <span
            className={
              errors?.name ? `${styles.profile__error} ${styles.profile__error_active}` : `${styles.profile__error}`
            }
          >
            {errors?.name?.message || 'Ошибка!'}
          </span>
          <span className={styles.profile__title}>Отчество</span>
          <input className={styles.profile__input} type="text" {...register('middlename')} />
          <span
            className={
              errors?.middlename
                ? `${styles.profile__error} ${styles.profile__error_active}`
                : `${styles.profile__error}`
            }
          >
            {errors?.surname?.message || 'Ошибка!'}
          </span>
          <span className={styles.profile__title}>Дата рождения</span>
          <input className={styles.profile__input} type="date" {...register('birthday')} />
          <span
            className={
              errors?.birthday ? `${styles.profile__error} ${styles.profile__error_active}` : `${styles.profile__error}`
            }
          >
            {errors?.birthday?.message || 'Ошибка!'}
          </span>
        </label>
        <div className={styles.profile__label}>
          <span className={styles.profile__title_big}>Пол</span>
          <div className={styles.profile__wrap}>
            <label className={styles.profile__radio}>
              <input type="radio" value="Женский" {...register('gender')} />
              <p>Женский</p>
            </label>
            <label className={styles.profile__radio}>
              <input type="radio" value="Мужской" {...register('gender')} />
              <p>Мужской</p>
            </label>
          </div>
        </div>
        {/* в зависимости от статуса - будем показывать один из двух нижеидущих лейблов */}
        {statusSpec ? (
          <label className={styles.profile__label}>
            <span className={styles.profile__title_big}>Обо мне</span>
            <textarea className={`${styles.profile__input} ${styles.profile__input_big}`} {...register('aboutMe')} />
          </label>
        ) : (
          <label className={styles.profile__label}>
            <span className={styles.profile__title_big}>Ваши параметры</span>
            <div className={styles.profile__size}>
              <span className={styles.profile__title}>Вес</span>
              <input
                className={`${styles.profile__input} ${styles.profile__input_params}`}
                type="number"
                {...register('weight', { required: 'Введите число' })}
                placeholder="кг"
              />
              <span className={styles.profile__title}>Рост</span>
              <input
                className={`${styles.profile__input} ${styles.profile__input_params}`}
                type="number"
                {...register('height', {
                  required: 'Введите число',
                })}
                placeholder="см"
              />
            </div>
          </label>
        )}

        <label className={styles.profile__label}>
          <span className={styles.profile__title}>Email</span>
          <input
            className={`${styles.profile__input} ${styles.profile__input_style}`}
            type="email"
            {...register('email', {
              pattern: {
                value: /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/,
                message: 'Email должен соответствовать шаблону электронной почты: name@domain.zone',
              },
            })}
          />
          <span
            className={
              errors?.email ? `${styles.profile__error} ${styles.profile__error_active}` : `${styles.profile__error}`
            }
          >
            {errors?.email?.message || 'Ошибка!'}
          </span>
        </label>
        <label className={styles.profile__label}>
          <span className={styles.profile__title}>Телефон</span>
          <input
            className={`${styles.profile__input} ${styles.profile__input_style}`}
            type="number"
            {...register('tel', {
              required: 'Поле не должно быть пустым',
            })}
          />
          <button className={styles.profile__pen} type="button">
            <img src={penIcon} alt="Кнопка редактировать данные профиля" />
          </button>
          <span
            className={
              errors?.tel ? `${styles.profile__error} ${styles.profile__error_active}` : `${styles.profile__error}`
            }
          >
            {errors?.tel?.message || 'Ошибка!'}
          </span>
        </label>
        <label className={styles.profile__label}>
          <span className={styles.profile__title}>Пароль</span>
          <input
            className={`${styles.profile__input} ${styles.profile__input_style}`}
            type="password"
            {...register('password', { required: 'Поле не должно быть пустым' })}
          />
          <button className={styles.profile__pen} type="button" onClick={() => console.log('редактирую пароль')}>
            <img src={penIcon} alt="Кнопка редактировать пароль" />
          </button>
          <span
            className={
              errors?.password ? `${styles.profile__error} ${styles.profile__error_active}` : `${styles.profile__error}`
            }
          >
            {errors?.password?.message || 'Ошибка!'}
          </span>
        </label>
        <Button
          textBtn="Сохранить"
          className="button__blue"
          type={TypeBtnEnum.SUBMIT}
          isDirty={isDirty}
          isValid={isValid}
        />
      </form>
      <button className={styles.profile__delete} type="button">
        Удалить профиль
      </button>
    </div>
  );
};

export default Profile;
