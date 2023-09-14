import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './PlanMeal.module.scss';
import Button from '../../components/Button/Button';
import DayBlock from './DayBlock';
import TitleBlock from '../../components/TitleBlock/TitleBlock';
import { weekday } from '../../utils/constants';
import CaloriesInput from '../../components/CaloriesInput/CaloriesInput'
import ButtonCancel from '../../components/ButtonCancel/ButtonCancel';


export type PlanMealInputType = {
  namePlan: string;
  calories: number;
  protein: number;
  fats: number;
  carbohydrates: number;
  recomendations: string;


};
const PlanMeal: React.FC = () => {
  const { register, handleSubmit, formState: { isDirty, isValid } } = useForm<PlanMealInputType>({
    mode: 'onChange',
  });
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

   return (
    <div className={styles.plan__content}>
      <TitleBlock text="ПЛАН ПИТАНИЯ" isBack={true} />
      <h1 className={styles.plan__userData}>Никитина Александра Сергеевна, 35 лет</h1>
      <form className={styles.plan__form} onSubmit={onSubmit}>
        <label className={styles.plan__label}>
          <h3 className={styles.plan__title}>Название плана питания</h3>
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
        <CaloriesInput register={register} />
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

        {weekday.map((item, index) => (
          <DayBlock item={item} key={index} />
        ))}

        <Button textBtn="Сохранить" type='submit' isDirty={isDirty} isValid={isValid}/>
      </form>
      <ButtonCancel text='Отменить' isDirty={isDirty} isValid={isValid}/>
    </div>
  );
};
export default PlanMeal;
