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
  const { register, handleSubmit, formState: { isDirty, isValid }, reset } = useForm<InputsType>({
    mode: 'all',

  });
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className="App__container">
      <main className={styles.addClient__content}>
        <TitleBlock text="добавление клиента" isBack={true} />
        <form className={styles.addClient__form} action="" onSubmit={onSubmit}>
          <div className={styles.addClient__nameWrap}>
            <InputText name="clientLastName" label="Фамилия" placeholder="Фамилия" register={register} />
            <InputText name="clientFirstName" label="Имя" placeholder="Имя" register={register}/>
            <InputText name="clientMiddleName" label="Отчество" placeholder="Отчество" register={register} />
          </div>
          <GenderInput register={register} />
          <div className={styles.addClient__characteristic}>
            <DatePicker register={register}/>
            <InputNumber name="clientWeight" label="Вес" placeholder="кг" register={register}/>
            <InputNumber name="clientHeight" label="Рост" placeholder="см" register={register}/>
          </div>
          <div className={styles.addClient__nameWrap}>
            <InputPhone name="clientPhone" register={register}/>
            <InputEmail name="clientEmail" label="Email" placeholder="Email" isLabel={true} register={register} />
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
          <SpecNote textareaName="SpecNote" textareaPlaceholder="Добавьте важную информацию" register={register}/>
          <div className={styles.addClient__nameWrap}>
            <Button textBtn="Сохранить" type="submit" isDirty={isDirty} isValid={isValid} />
            <ButtonCancel text="Отменить" isDirty={true} isValid={true} onClick={() => reset()}
/>
          </div>
        </form>
      </main>
    </div>
  );
};

export default AddClient;
