import { useState } from 'react';
import { UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import minus from '../../assets/images/dayblock/minus-icon.svg';
import plus from '../../assets/images/dayblock/plus-icon.svg';
import {
  PATH_MEAL_PLAN_CREATE,
  PATH_MEAL_PLAN_EDIT,
  PATH_WORKOUT_PLAN_CREATE,
  PATH_WORKOUT_PLAN_EDIT,
} from '../../utils/constants';
import { PlanInputType } from '../PlanPageLayot/PlanPageLayot';
import styles from './DayBlock.module.scss';

type ItemType = {
  day: string;
  weekday?: number | string;
  nameInput: string;
  placeholder: string;
  image: string;
  alt: string;
  tip: string;
  description: string;
};
type DayBlockType = {
  item: ItemType;
  index: number;
  register: UseFormRegister<PlanInputType>;
  setValue?: UseFormSetValue<PlanInputType>;
};

const DayBlock = ({ item, register, index }: DayBlockType) => {
  const [isVisible, setVisible] = useState(true);
  const isOpenNote = () => {
    setVisible(!isVisible);
  };
  const location = useLocation();
  return (
    <div className={isVisible ? `${styles.dayBlock} ${styles.dayBlock_show}` : `${styles.dayBlock}`}>
      <img className={styles.dayBlock__image} src={item.image} alt={item.alt} />
      <div className={styles.dayBlock__day}>
        <div className={styles.dayBlock__box} onClick={isOpenNote}>
          <h3 className={styles.dayBlock__title}>{item.day}</h3>
          <button className={styles.dayBlock__add} type="button">
            {isVisible ? <img src={minus} alt="Удалить" /> : <img src={plus} alt="Добавить" />}
          </button>
        </div>
        <p>{item.tip}</p>
      </div>
      <label className={styles.dayBlock__label}>
        <h2>{item.description}</h2>
        {(location.pathname === PATH_MEAL_PLAN_CREATE || location.pathname === PATH_MEAL_PLAN_EDIT) && (
          <textarea
            className={styles.dayBlock__input}
            placeholder={item.placeholder}
            {...register(`diet.${index}.spec_comment`, {
              maxLength: {
                value: 300,
                message: 'error message',
              },
              minLength: {
                value: 1,
                message: 'error message',
              },
            })}
          />
        )}
        {(location.pathname === `${PATH_WORKOUT_PLAN_CREATE}` || location.pathname === `${PATH_WORKOUT_PLAN_EDIT}`) && (
          <>
            <textarea
              className={styles.dayBlock__input}
              placeholder={item.placeholder}
              {...register(`training.${index}.spec_comment`, {
                maxLength: {
                  value: 300,
                  message: 'error message',
                },
                minLength: {
                  value: 1,
                  message: 'error message',
                },
              })}
            />
          </>
        )}
      </label>
    </div>
  );
};

export default DayBlock;
