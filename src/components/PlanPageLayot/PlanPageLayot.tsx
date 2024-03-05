import { UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { useRetrieveUserQuery } from '../../redux/services/userApi';
import { DayBlockType, PATH_MEAL_PLAN, PATH_MEAL_PLAN_EDIT, PATH_WORKOUT_PLAN_EDIT } from '../../utils/constants';
import { getAgeEnding } from '../../utils/getAgeEnding';
import Button from '../Button/Button';
import ButtonCancel from '../ButtonCancel/ButtonCancel';
import ButtonDelete from '../ButtonDelete/ButtonDelete';
import CaloriesInput from '../CaloriesInput/CaloriesInput';
import DayBlock from '../DayBlock/DayBlock';
import InputRecommendation from '../Inputs/InputRecommendation/InputRecommendation';
import TitleBlock from '../TitleBlock/TitleBlock';
import styles from './PlanPageLayot.module.scss';

export type PlanInputType = {
  namePlan: string;
  calories: number;
  protein: number;
  fats: number;
  carbohydrates: number;
  recomendations: string;
  /* monday?: string;
  tuesday?: string;
  wednesday?: string;
  thursday?: string;
  friday?: string;
  saturday?: string;
  sunday?: string; */
  diet?: {
    spec_comment?: string;
  }[];
  training?: {
    id?: number;
    weekday: string;
    spec_comment?: string | null;
    user_comment?: string | null;
  }[];
};
type PlanFormType = {
  textTitle: string;
  namePlan: string;
  data: DayBlockType;
  register: UseFormRegister<PlanInputType>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  isDirty?: boolean;
  isValid?: boolean;
  setValue: UseFormSetValue<PlanInputType>;
  onDeletePlan?: () => void;
};
const PlanPageLayot = ({
  textTitle,
  namePlan,
  data,
  register,
  onSubmit,
  isDirty,
  isValid,
  setValue,
  onDeletePlan,
}: PlanFormType) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const client = query.get('client');
  const { data: clientData, isSuccess } = useRetrieveUserQuery(client!, { skip: !client });

  const age = clientData?.dob
    ? new Date(Date.now() - new Date(clientData?.dob || 0).getTime()).getFullYear() - 1970
    : null;

  return (
    <main className="App__container">
      <div className={styles.plan__content}>
        <TitleBlock text={textTitle} isBack={true} />
        {isSuccess && (
          <h1 className={styles.plan__userData}>{`${clientData?.first_name || ''} ${clientData?.middle_name || ''} ${
            clientData?.last_name || ''
          }, ${age ? getAgeEnding(age) : ''}`}</h1>
        )}
        {/* <h1 className={styles.plan__userData}>{`Никитина Александра Сергеевна, 35 лет`}</h1> */}
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
          {location.pathname.startsWith(PATH_MEAL_PLAN) && <CaloriesInput register={register} />}
          <InputRecommendation register={register} />
          <div className={styles.plan__label_gap}>
            {data.map((item, index) => (
              <DayBlock index={index} item={item} key={index} register={register} setValue={setValue} />
            ))}
          </div>
          <div className={styles.plan__buttons}>
            <Button textBtn="Сохранить" type="submit" isDirty={isDirty} isValid={isValid} />
            {location.pathname === PATH_MEAL_PLAN_EDIT || location.pathname === PATH_WORKOUT_PLAN_EDIT ? (
              <ButtonDelete text="Удалить этот план" onClick={onDeletePlan} />
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
