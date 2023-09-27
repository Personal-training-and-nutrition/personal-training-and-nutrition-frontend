/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from 'react-hook-form';
import styles from './Profile.module.scss';
import Button from '../../components/Button/Button';
import UserStatusBtn from '../../components/UserStatusBtn/UserStatusBtn';
import penIcon from '../../assets/images/profile/pen-icon.svg';
import TitleBlock from '../../components/TitleBlock/TitleBlock';
import GenderInput from '../../components/Inputs/GenderInput/GenderInput';
import ButtonDelete from '../../components/ButtonDelete/ButtonDelete';
import { useState } from 'react';
import DatePicker from '../../components/Inputs/DatePicker/DatePicker';
import InputText from '../../components/Inputs/InputText/InputText';
import InputPhone from '../../components/Inputs/InputPhone/InputPhone';

export type InputsType = {
  lastName: string;
  firstName: string;
  birthday?: number;
  gender?: '';
  weight?: string;
  height?: string;
  aboutMe?: string;
  phone: number;
  password: string | number;
  clientDiseases: string;
  accept: string;
};
const Profile = ({ statusSpec }: { statusSpec: boolean }) => {
  const [isEditPassw, setEditPassw] = useState(false);
  const [isEditPhone, setEditPhone] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<InputsType>({
    mode: 'all',
    defaultValues: {
      gender: '',
    },
  });
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  const errorVisible = `${styles.profile__error} ${styles.profile__error_active}`;
  const errorInvisible = `${styles.profile__error}`;

  return (
    <div className="App__container">
      <main className={styles.profile__content}>
        <TitleBlock text="ПРОФИЛЬ" />
        <div className={styles.profile__avatar}>
          <p className={styles.profile__name}>H</p>
          <p className={styles.profile__surname}>A</p>
        </div>
        <UserStatusBtn statusSpec={statusSpec} />
        <form className={styles.profile__form} onSubmit={onSubmit}>
          <label className={styles.profile__label}>
            <InputText
              name="lastName"
              label="Фамилия"
              placeholder="Фамилия"
              register={register}
              textError={'Поле не должно быть пустым'}
            />
            <span className={errors?.lastName ? errorVisible : errorInvisible}>
              {errors?.lastName?.message || 'Ошибка!'}
            </span>
            <InputText
              name="firstName"
              label="Имя"
              placeholder="Имя"
              register={register}
              textError={'Поле не должно быть пустым'}
            />
            <span className={errors?.firstName ? errorVisible : errorInvisible}>
              {errors?.firstName?.message || 'Ошибка!'}
            </span>
            <DatePicker register={register} />
          </label>
          <GenderInput register={register} />
          {statusSpec ? (
            <label className={styles.profile__label}>
              <h3 className={styles.profile__title_big}>Обо мне</h3>
              <textarea className={`${styles.profile__input} ${styles.profile__input_big}`} {...register('aboutMe')} />
            </label>
          ) : (
            <label className={styles.profile__label}>
              <h3 className={styles.profile__title_big}>Ваши параметры</h3>
              <div className={styles.profile__size}>
                <h4 className={`${styles.profile__title} ${styles.profile__title_type}`}>Вес</h4>
                <input
                  className={`${styles.profile__input} ${styles.profile__input_params}`}
                  type="number"
                  {...register('weight')}
                  placeholder="кг"
                />
                <h4 className={`${styles.profile__title} ${styles.profile__title_type}`}>Рост</h4>
                <input
                  className={`${styles.profile__input} ${styles.profile__input_params}`}
                  type="number"
                  {...register('height')}
                  placeholder="см"
                />
              </div>
            </label>
          )}
          <div>
            <div className={`${styles.profile__title} ${styles.profile__title_style}`}>Email</div>
            <p className={styles.profile__subtitle}>nutrisav@mail.ru</p>
          </div>
          <label className={styles.profile__label}>
            <div className={styles.profile__wrap}>
              {isEditPhone ? (
                <InputPhone name="phone" register={register} />
              ) : (
                <>
                  <span className={`${styles.profile__title} ${styles.profile__title_style}`}>Телефон</span>
                  <div className={styles.profile__container}>
                    <p className={styles.profile__subtitle}>+7 (123) 456-78-90</p>
                    <button className={styles.profile__pen} type="button" onClick={() => setEditPhone(true)}>
                      <img src={penIcon} alt="Кнопка редактировать телефон" />
                    </button>
                  </div>
                </>
              )}
            </div>
            <span className={errors?.phone ? errorVisible : errorInvisible}>{errors?.phone?.message || 'Ошибка!'}</span>
          </label>

          <label className={styles.profile__label}>
            <span className={`${styles.profile__title} ${styles.profile__title_style}`}>Пароль</span>
            <div className={styles.profile__wrap}>
              {isEditPassw ? (
                <input
                  className={`${styles.profile__input} ${styles.profile__input_style}`}
                  type="password"
                  {...register('password', { required: 'Поле не должно быть пустым' })}
                />
              ) : (
                <div className={styles.profile__container}>
                  <p className={styles.profile__subtitle}>******</p>
                  <button className={styles.profile__pen} type="button" onClick={() => setEditPassw(true)}>
                    <img src={penIcon} alt="Кнопка редактировать пароль" />
                  </button>
                </div>
              )}
            </div>
            <span className={errors?.password ? errorVisible : errorInvisible}>
              {errors?.password?.message || 'Ошибка!'}
            </span>
          </label>
          <Button textBtn="Сохранить" type="submit" isDirty={isDirty} isValid={isValid} />
        </form>
        <ButtonDelete text="Удалить профиль" />
      </main>
    </div>
  );
};

export default Profile;
