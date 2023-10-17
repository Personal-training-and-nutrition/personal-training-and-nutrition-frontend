import styles from './AddClient.module.scss';
import TitleBlock from '../../components/TitleBlock/TitleBlock';
import InputText from '../../components/Inputs/InputText/InputText';
import GenderInput from '../../components/Inputs/GenderInput/GenderInput';
import { useForm } from 'react-hook-form';
import { InputsType } from '../ProfilePage/Profile';
import DatePicker from '../../components/Inputs/DatePicker/DatePicker';
import InputNumber from '../../components/Inputs/InputNumber/InputNumber';
import InputPhone from '../../components/Inputs/InputPhone/InputPhone';
import InputEmail from '../../components/Inputs/InputEmail/InputEmail';
import AboutClientCard from '../../components/AboutClientCard/AboutClientCard';
import SpecNote from '../../components/SpecNote/SpecNote';
import ButtonCancel from '../../components/ButtonCancel/ButtonCancel';
import Button from '../../components/Button/Button';
import {useCreateClientMutation} from "../../redux/services/clientsApi.ts";
import { useEffect } from 'react';
import { useAppDispatch } from '../../redux/store.ts';

const AddClient = () => {

  const [createClient, {isLoading, isSucess}] = useCreateClientMutation();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid, errors },
    reset,
  } = useForm<InputsType>({
    mode: 'all',
  });
  const onSubmit = handleSubmit((data) => {
    createClient({
      first_name: data.first_name,
      last_name: data.last_name,
      middle_name:data.middle_name,
      email:data.email,
      phone_number:data.phone_number,
      dob:data.dob,
      gender:data.gender,
      diseases:data.diseases || null,
      exp_diets:data.exp_diets || null,
      exp_trainings:data.exp_trainings || null,
      bad_habits:data.bad_habits || null,
      notes: data.notes || null,
      food_preferences: data.food_preferences || null,
      params:{
        weight:data.weight,
        height: data.height,
      }
    })
  });

  if(isLoading){
    return (<h2>Загрузка...</h2>)
  }

  useEffect(() => {
    if (isSucess) {

    }
  }, [isSucess])

  const errorVisible = `${styles.addClient__error} ${styles.addClient__error_active}`;
  const errorInvisible = `${styles.addClient__error}`;
  return (
    <div className="App__container">
      <main className={styles.addClient__content}>
        <TitleBlock text="добавление клиента" isBack={true} />
        <form className={styles.addClient__form} action="" onSubmit={onSubmit}>
          <div className={styles.addClient__nameWrap}>
            <InputText name="last_name" label="Фамилия" placeholder="Фамилия" register={register} />{' '}
            <span className={errors?.last_name ? errorVisible : errorInvisible}>{errors?.last_name?.message || ''}</span>
            <InputText
              name="first_name"
              label="Имя"
              placeholder="Имя"
              register={register}
              textError="Введите имя"
              isInvalid={Boolean(errors.first_name)}
            />
            <span className={errors?.first_name ? errorVisible : errorInvisible}>
              {errors?.first_name?.message || ''}
            </span>
            <InputText name="middle_name" label="Отчество" placeholder="Отчество" register={register} />
          </div>
          <GenderInput register={register} />
          <div className={styles.addClient__characteristic}>
            <div className={styles.addClient__dataWrap}>
              <DatePicker register={register} isInvalid={Boolean(errors.dob)} />
              <span className={errors?.dob ? errorVisible : errorInvisible}>
                {errors?.dob?.message || '!!!'}
              </span>
            </div>

            <InputNumber name="weight" label="Вес" placeholder="кг" register={register} />
            <InputNumber name="height" label="Рост" placeholder="см" register={register} />
          </div>
          <div className={styles.addClient__contactsWrap}>
            <div>
              <InputPhone name="phone_number" register={register} isInvalid={Boolean(errors.phone_number)} />
              <span className={errors?.phone_number ? errorVisible : errorInvisible}>{errors?.phone_number?.message || ''}</span>
            </div>
            <div>
              <InputEmail
                name="email"
                label="Email"
                placeholder="Email"
                isLabel={true}
                register={register}
                isInvalid={Boolean(errors.email)}
              />
              <span className={errors?.email ? errorVisible : errorInvisible}>{errors?.email?.message || ''}</span>
            </div>
          </div>
          <ul className={styles.addClient__about}>
            <AboutClientCard
              title="Заболевания"
              textareaName="diseases"
              textaeraPlaceholder="Добавьте важную информацию"
              register={register}
            />
            <AboutClientCard
              title="Опыт диет"
              textareaName="exp_diets"
              textaeraPlaceholder="Добавьте важную информацию"
              register={register}
            />
            <AboutClientCard
              title="Опыт тренировок"
              textareaName="exp_trainings"
              textaeraPlaceholder="Добавьте важную информацию"
              register={register}
            />
            <AboutClientCard
              title="Вредные привычки"
              textareaName="bad_habits"
              textaeraPlaceholder="Добавьте важную информацию"
              register={register}
            />
            <AboutClientCard
              title="Предпочтения в еде"
              textareaName="food_preferences"
              textaeraPlaceholder="Добавьте важную информацию"
              register={register}
            />
          </ul>
          <SpecNote textareaName="notes" textareaPlaceholder="Добавьте важную информацию" register={register} />
          <div className={styles.addClient__buttonsWrap}>
            <Button textBtn="Сохранить" type="submit" isDirty={isDirty} isValid={isValid} />
            <ButtonCancel text="Отменить" isDirty={true} isValid={true} onClick={() => reset()} />
          </div>
        </form>
      </main>
    </div>
  );
};

export default AddClient;
