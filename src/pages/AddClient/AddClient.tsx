import styles from './AddClient.module.scss';
import TitleBlock from '../../components/TitleBlock/TitleBlock';
import InputText from '../../components/Inputs/InputText/InputText';
import GenderInput from '../../components/GenderInput/GenderInput';
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
  } = useForm<InputsType>({
    mode: 'onChange',
    // defaultValues: {
    //   surname: data.surname,
    //   weight: data?.weight + ' кг' || '',
    //   height: data?.height + ' см' || '',
    // },
  });
  return (
    <main className={styles.addClient__main}>
      <TitleBlock text='добавление клиента' isBack={true} />
      <form className={styles.addClient__form} action="">
        <div className={styles.addClient__nameWrap}>
          <InputText name='clientLastName' label='Фамилия' placeholder='Фамилия'/>
          <InputText name='clientFirstName' label='Имя' placeholder='Имя'/>
          <InputText name='clientMiddleName' label='Отчество' placeholder='Отчество'/>
        </div>
        <GenderInput register={register} />
        <div className={styles.addClient__characteristic}>
          <DatePicker/>
          <InputNumber name='clientWeight' label='Вес' placeholder='кг'/>
          <InputNumber name='clientHeight' label='Рост' placeholder='см'/>
        </div>
        <div className={styles.addClient__nameWrap}>
          <InputPhone name='clientPhone'/>
          <InputEmail name='clientEmail' label='Email' placeholder='Email' isLabel={true}/>
        </div>
        <ul className={styles.addClient__about}>
          <AboutClientCard title='Заболевания' textareaName='clientDiseases' textaeraPlaceholder='Добавьте важную информацию'/>
          <AboutClientCard title='Опыт диет' textareaName='clientDietExperience' textaeraPlaceholder='Добавьте важную информацию'/>
          <AboutClientCard title='Опыт тренировок' textareaName='clientTrainingExperience' textaeraPlaceholder='Добавьте важную информацию'/>
          <AboutClientCard title='Вредные привычки' textareaName='clientBadHabits' textaeraPlaceholder='Добавьте важную информацию'/>
          <AboutClientCard title='Предпочтения в еде' textareaName='clientFoodPreferences' textaeraPlaceholder='Добавьте важную информацию'/>
        </ul>
        <SpecNote textareaName='SpecNote' textareaPlaceholder='Добавьте важную информацию'/>
        <div className={styles.addClient__nameWrap}>
        <Button textBtn='Сохранить' type='submit' isDirty={true} isValid={true}/>
        <ButtonCancel text='Отменить' isDirty={true} isValid={true}/>
        </div>
      </form>
    </main>
  )
};

export default AddClient;
