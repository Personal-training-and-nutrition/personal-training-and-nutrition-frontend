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
import { usePartialUpdateUserMutation, useRetrieveUserQuery, useDestroyMeMutation } from '../../redux/services/userApi';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { formatToPhoneValue } from '../../utils/formatToPhone';
import { formatDate, formatDateToSent } from '../../utils/formatDate';
import { useNavigate } from 'react-router-dom';
import { setIsLoggedIn } from '../../redux/slices/userSlice';

export type InputsType = {
  last_name?: string | null;
  first_name: string | null;
  middle_name: string | null;
  dob?: string | null;
  gender?: string | null;
  weight?: number | null;
  height?: number | null;
  about?: string;
  phone_number: string | null;
  password: string;
  retrypassword: string;
  clientDiseases: string;
  accept: string;
  email: string;
  notes?:string;
  food_preferences?: string;
  bad_habits?: string;
  exp_trainings?: string;
  exp_diets?: string;
  diseases?: string;
};
const Profile: React.FC = () => {
  const [isEditPassw, setEditPassw] = useState(false);
  const [isEditPhone, setEditPhone] = useState(false);
  const id = useAppSelector((store) => store.user.id);
  const isSpecialist = useAppSelector((store) => store.user.isSpecialist);
  const { data: initData, isSuccess } = useRetrieveUserQuery(id!);
  const [update, { data: updateData, isSuccess: isUpdateSuccess }] = usePartialUpdateUserMutation();
  const [destroyMe] = useDestroyMeMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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
      middle_name: initData?.middle_name || '',
      gender: initData?.gender || '0',
      dob: initData?.dob || '',
      phone_number: initData?.phone_number || '',
      weight: initData?.params?.weight,
      height: initData?.params?.height,
      about: initData?.specialist?.about || '',
    },
  });

  useEffect(() => {
    if (isSuccess)
      reset({ ...initData, dob: formatDate(initData?.dob), phone_number: formatToPhoneValue(initData?.phone_number) });
  }, [isSuccess, initData]);

  useEffect(() => {
    if (isUpdateSuccess)
      reset({
        ...updateData,
        dob: formatDate(updateData?.dob),
        phone_number: formatToPhoneValue(updateData?.phone_number),
      });
  }, [isUpdateSuccess]);

  const onSubmit = handleSubmit((data) => {
    if (formatDateToSent(data.dob) === initData?.dob) {
      data.dob = formatDateToSent(data.dob);
    }
    const gender = data.gender === null ? '0' : data.gender;

    const dataUser = {
      // ...data,
      first_name: data.first_name,
      last_name: data.last_name,
      middle_name: data.last_name,
      password: undefined,
      role: '0',
      email: data.email,
      phone_number: String(data.phone_number).replace(/[+\s]+/g, ''),
      dob:data.dob,
      gender,
      // params: { weight: 100, heigth: 100, waist_size: 0 },
      is_specialist: true,
      // specialist: { about: data.about },
    };
    update({ id: id!, data: dataUser });
    setEditPhone(false);
  });

  const data = !isUpdateSuccess ? initData : updateData;
  const firstName = data?.first_name?.slice(0, 1);
  const lastName = data?.last_name?.slice(0, 1);
  const phone = formatToPhoneValue(data?.phone_number);

  const errorVisible = `${styles.profile__error} ${styles.profile__error_active}`;
  const errorInvisible = `${styles.profile__error}`;

  const onBlurInputPhone = () => {};

  const handleClickDelete = () => {
    try {
      destroyMe({ email: initData?.email }).then(() => {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          dispatch(setIsLoggedIn(true));
          navigate('/');
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App__container">
      <main className={styles.profile__content}>
        <TitleBlock text="ПРОФИЛЬ" />
        <div className={styles.profile__avatar}>
          <p className={styles.profile__name}>{lastName}</p>
          <p className={styles.profile__surname}>{firstName}</p>
        </div>
        <UserStatusBtn statusSpec={isSpecialist} />
        <form className={styles.profile__form} onSubmit={onSubmit}>
          <div className={styles.profile__label}>
            <div className={styles.profile__box}>
              <div>
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
              </div>
              <div>
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
              </div>
              <div>
                <DatePicker register={register} isInvalid={Boolean(errors.dob)} />
                <span className={errors?.dob ? errorVisible : errorInvisible}>{errors?.dob?.message || ''}</span>
              </div>
            </div>
          </div>
          <GenderInput register={register} />
          {isSpecialist ? (
            <label className={styles.profile__label}>
              <h3 className={styles.profile__title_big}>Обо мне</h3>
              <textarea className={`${styles.profile__input} ${styles.profile__input_big}`} {...register('about')} />
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
                <InputPhone
                  name="phone_number"
                  register={register}
                  isInvalid={Boolean(errors.phone_number)}
                  onBlur={() => onBlurInputPhone()}
                />
              ) : (
                <>
                  <span className={`${styles.profile__title} ${styles.profile__title_style}`}>Телефон</span>
                  <div className={styles.profile__container}>
                    <p className={styles.profile__subtitle}>{phone}</p>
                    <button className={styles.profile__pen} type="button" onClick={() => setEditPhone(true)}>
                      <img src={penIcon} alt="Кнопка редактировать телефон" />
                    </button>
                  </div>
                </>
              )}
            </div>
            <span className={errors?.phone_number ? errorVisible : errorInvisible}>
              {errors?.phone_number?.message || '!'}
            </span>
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
          <div className={styles.profile__buttons}>
            <Button textBtn="Сохранить" type="submit" isDirty={isDirty} isValid={isValid} />
            <ButtonDelete text="Удалить профиль" onClick={handleClickDelete} />
          </div>
        </form>
      </main>
    </div>
  );
};

export default Profile;
