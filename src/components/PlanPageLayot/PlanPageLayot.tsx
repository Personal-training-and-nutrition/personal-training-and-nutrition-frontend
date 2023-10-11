import { useLocation } from 'react-router-dom';
import styles from './PlanPageLayot.module.scss';
import Button from '../Button/Button';
import ButtonCancel from '../ButtonCancel/ButtonCancel';
import TitleBlock from '../TitleBlock/TitleBlock';
import CaloriesInput from '../CaloriesInput/CaloriesInput';
import DayBlock from '../DayBlock/DayBlock';
import { DayBlockType } from '../../utils/constants';
import { UseFormRegister } from 'react-hook-form';
import ButtonDelete from '../ButtonDelete/ButtonDelete';
import InputRecommendation from '../Inputs/InputRecommendation/InputRecommendation';

export type PlanInputType = {
  namePlan: string;
  calories: number;
  protein: number;
  fats: number;
  carbohydrates: number;
  recomendations: string;
  monday?: string;
  tuesday?: string;
  wednesday?: string;
  thursday?: string;
  friday?: string;
  saturday?: string;
  sunday?: string;
};
type PlanFormType = {
  textTitle: string;
  namePlan: string;
  data: DayBlockType;
  register: UseFormRegister<PlanInputType>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  isDirty?: boolean;
  isValid?: boolean;
};
const PlanPageLayot = ({ textTitle, namePlan, data, register, onSubmit, isDirty, isValid }: PlanFormType) => {
  const location = useLocation();

  return (
    <main className="App__container">
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
            />
          </label>
          {location.pathname === '/meal-plan' && <CaloriesInput register={register} />}
          <InputRecommendation register={register} />
          <div className={styles.plan__label_gap}>
            {data.map((item, index) => (
              <DayBlock item={item} key={index} register={register} />
            ))}
          </div>
          <div className={styles.plan__buttons}>
            <Button textBtn="Сохранить" type="submit" isDirty={isDirty} isValid={isValid} />
            {location.pathname === '/editPlanMeal' || location.pathname === '/editPlanTrain' ? (
              <ButtonDelete text="Удалить этот план" />
            ) : (
              <ButtonCancel text="Отменить" isDirty={isDirty} isValid={isValid} />
            )}
          </div>
        </form>
      </div>
    </main>
  );
};

export default PlanPageLayot;
