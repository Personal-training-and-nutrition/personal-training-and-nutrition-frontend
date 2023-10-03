/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from 'react-hook-form';
import styles from './Profile.module.scss';
import Button from '../../components/Button/Button';
import UserStatusBtn from '../../components/UserStatusBtn/UserStatusBtn';
import penIcon from '../../assets/images/profile/pen-icon.svg';
import TitleBlock from '../../components/TitleBlock/TitleBlock';
import GenderInput from '../../components/Inputs/GenderInput/GenderInput';
import ButtonDelete from '../../components/ButtonDelete/ButtonDelete';
import { useEffect, useState } from 'react';
import DatePicker from '../../components/Inputs/DatePicker/DatePicker';
import InputText from '../../components/Inputs/InputText/InputText';
import InputPhone from '../../components/Inputs/InputPhone/InputPhone';
import { usePartialUpdateUserMutation, useRetrieveUserQuery } from '../../redux/services/userApi';
import { useAppSelector } from '../../redux/store';

export type InputsType = {
  last_name: string | null;
  first_name: string | null;
  birthday?: number;
  gender?: '' | number | null;
  weight?: string;
  height?: string;
  aboutMe?: string;
  phone: number;
  password: string;
  retrypassword: string;
  clientDiseases: string;
  accept: string;
  email: string;
};
const Profile = ({ statusSpec }: { statusSpec: boolean }) => {
  const [isEditPassw, setEditPassw] = useState(false);
  const [isEditPhone, setEditPhone] = useState(false);
  const id = useAppSelector((store) => store.user.id);
  // REMOVE: параметр скип здесь не нужен (пользователь без id будет остановлен гардом), но оставлен для примера
  const { data: initData, isSuccess } = useRetrieveUserQuery(id!, { skip: !id });
  const [update] = usePartialUpdateUserMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm<InputsType>({
    mode: 'all',
    defaultValues: {
      last_name: initData?.last_name || '',
      first_name: initData?.first_name || '',
      gender: '',
    },
  });

  const onSubmit = handleSubmit((data) => {
    update({ id: id!, data: { ...data, gender: null, password: undefined } });
    console.log(data);
  });

  const errorVisible = `${styles.profile__error} ${styles.profile__error_active}`;
  const errorInvisible = `${styles.profile__error}`;

  useEffect(() => {
    if (isSuccess) reset(initData);
  }, [isSuccess]);

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
              name="last_name"
              label="Фамилия"
              placeholder="Фамилия"
              register={register}
              textError={'Поле не должно быть пустым'}
              isInvalid={Boolean(errors.last_name)}
            />
            <span className={errors?.last_name ? errorVisible : errorInvisible}>
              {errors?.last_name?.message || 'Ошибка!'}
            </span>
            <InputText
              name="first_name"
              label="Имя"
              placeholder="Имя"
              register={register}
              textError={'Поле не должно быть пустым'}
              isInvalid={Boolean(errors.first_name)}
            />
            <span className={errors?.first_name ? errorVisible : errorInvisible}>
              {errors?.first_name?.message || 'Ошибка!'}
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
            <p className={styles.profile__subtitle}>{initData?.email}</p>
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
