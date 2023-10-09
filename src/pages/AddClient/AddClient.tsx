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

const AddClient = () => {
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid, errors },
    reset,
  } = useForm<InputsType>({
    mode: 'all',
  });
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  const errorVisible = `${styles.addClient__error} ${styles.addClient__error_active}`;
  const errorInvisible = `${styles.addClient__error}`;
  return (
    <div className="App__container">
      <main className={styles.addClient__content}>
        <TitleBlock text="добавление клиента" isBack={true} />
        <form className={styles.addClient__form} action="" onSubmit={onSubmit}>
          <div className={styles.addClient__nameWrap}>
            <InputText name="lastName" label="Фамилия" placeholder="Фамилия" register={register} />{' '}
            <span className={errors?.lastName ? errorVisible : errorInvisible}>{errors?.lastName?.message || ''}</span>
            <InputText
              name="firstName"
              label="Имя"
              placeholder="Имя"
              register={register}
              textError="Введите имя"
              isInvalid={Boolean(errors.firstName)}
            />
            <span className={errors?.firstName ? errorVisible : errorInvisible}>
              {errors?.firstName?.message || ''}
            </span>
            <InputText name="middleName" label="Отчество" placeholder="Отчество" register={register} />
          </div>
          <GenderInput register={register} />
          <div className={styles.addClient__characteristic}>
            <div className={styles.addClient__dataWrap}>
              <DatePicker register={register} isInvalid={Boolean(errors.birthday)} />
              <span className={errors?.birthday ? errorVisible : errorInvisible}>
                {errors?.birthday?.message || '!!!'}
              </span>
            </div>

            <InputNumber name="clientWeight" label="Вес" placeholder="кг" register={register} />
            <InputNumber name="clientHeight" label="Рост" placeholder="см" register={register} />
          </div>
          <div className={styles.addClient__contactsWrap}>
            <div>
              <InputPhone name="phone" register={register} isInvalid={Boolean(errors.phone)} />
              <span className={errors?.phone ? errorVisible : errorInvisible}>{errors?.phone?.message || ''}</span>
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
              textareaName="clientDiseases"
              textaeraPlaceholder="Добавьте важную информацию"
              register={register}
            />
            <AboutClientCard
              title="Опыт диет"
              textareaName="clientDietExperience"
              textaeraPlaceholder="Добавьте важную информацию"
              register={register}
            />
            <AboutClientCard
              title="Опыт тренировок"
              textareaName="clientTrainingExperience"
              textaeraPlaceholder="Добавьте важную информацию"
              register={register}
            />
            <AboutClientCard
              title="Вредные привычки"
              textareaName="clientBadHabits"
              textaeraPlaceholder="Добавьте важную информацию"
              register={register}
            />
            <AboutClientCard
              title="Предпочтения в еде"
              textareaName="clientFoodPreferences"
              textaeraPlaceholder="Добавьте важную информацию"
              register={register}
            />
          </ul>
          <SpecNote textareaName="SpecNote" textareaPlaceholder="Добавьте важную информацию" register={register} />
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
