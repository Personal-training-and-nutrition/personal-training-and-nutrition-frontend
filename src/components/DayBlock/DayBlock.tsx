import styles from './DayBlock.module.scss';
import { useState } from 'react';
import plus from '../../assets/images/dayblock/plus-icon.svg';
import minus from '../../assets/images/dayblock/minus-icon.svg';
import { UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { PlanInputType } from '../PlanPageLayot/PlanPageLayot';
import { useLocation } from 'react-router-dom';

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

const DayBlock = ({ item, register, index, setValue }: DayBlockType) => {
  const [isVisible, setVisible] = useState(false);
  const isOpenNote = () => {
    setVisible(!isVisible);
  };
  const location = useLocation();

  return (
    <div className={ isVisible ? `${styles.dayBlock} ${styles.dayBlock_show}` : `${styles.dayBlock}`}>
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
        {location.pathname === '/meal-plan/create' &&
        <textarea
          className={styles.dayBlock__input}
          placeholder={item.placeholder}
         {...register(`diet.${index}.spec_comment`)}
        />
        }
         {location.pathname === '/workout-plan/create' && (
          <textarea
          className={styles.dayBlock__input}
          placeholder={item.placeholder}
         {...register(`training.${index}.spec_comment`)}
        />
       )}
      </label>
    </div>
  );
};

export default DayBlock;
