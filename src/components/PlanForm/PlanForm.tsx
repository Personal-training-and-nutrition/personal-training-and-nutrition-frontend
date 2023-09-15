import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styles from './PlanForm.module.scss';
import Button from '../Button/Button';
import ButtonCancel from '../ButtonCancel/ButtonCancel';
import TitleBlock from '../TitleBlock/TitleBlock';
import CaloriesInput from '../CaloriesInput/CaloriesInput';
import DayBlock from '../DayBlock/DayBlock';
import { DayBlockType } from '../../utils/constants';
import NavBar from '../Navbar/NavBar';

export type PlanInputType = {
  namePlan: string;
  calories: number;
  protein: number;
  fats: number;
  carbohydrates: number;
  recomendations: string;
};

const PlanForm = ({ textTitle, namePlan, data }: { textTitle: string; namePlan: string; data: DayBlockType }) => {
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm<PlanInputType>({
    mode: 'onChange',
  });
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <>
    <div className={styles.plan__content}>
      <TitleBlock text={textTitle} isBack={true} />
      <h1 className={styles.plan__userData}>Никитина Александра Сергеевна, 35 лет</h1>
      <form className={styles.plan__form} onSubmit={onSubmit}>
        <label className={styles.plan__label}>
          <h3 className={styles.plan__title}>{`Название плана ${namePlan}`}</h3>
          <input
            className={styles.plan__input}
            type="text"
            {...register('namePlan', {
              required: 'Поле не должно быть пустым',
            })}
            placeholder="Напишите название плана"
            // required
          />
        </label>
        {location.pathname === '/planMeal' && <CaloriesInput register={register} />}
        <label className={styles.plan__label}>
          <h3 className={styles.plan__title}>Рекомендации</h3>
          <textarea
            className={`${styles.plan__input} ${styles.plan__input_textarea}`}
            {...register('recomendations', {
              required: 'Поле не должно быть пустым',
            })}
            placeholder="Напишите рекомендации"
          />
        </label>
        <div className={styles.plan__label_gap}>
          {data.map((item, index) => (
            <DayBlock item={item} key={index} />
          ))}
        </div>

        <Button textBtn="Сохранить" type="submit" isDirty={isDirty} isValid={isValid} />
      </form>
      <ButtonCancel text="Отменить" isDirty={isDirty} isValid={isValid} />
      <NavBar/>
    </div>

    </>
  );
};

export default PlanForm;
