import styles from './DayBlock.module.scss';
import { useState } from 'react';
import plus from '../../assets/images/dayblock/plus-icon.svg';
import minus from '../../assets/images/dayblock/minus-icon.svg';
import { UseFormRegister } from 'react-hook-form';
import { PlanInputType } from '../PlanForm/PlanForm';
// import { ItemType } from '../../utils/constants';

// type Day = 'monday' | 'tuesday' | 'wednesday' | 'thursday' |  'friday' |  'saturday' | 'sunday';
type ItemType = {
  day: string;
  nameInput: string;
  placeholder: string;
  image: string;
  alt: string;
  tip: string;
  description: string;
};
type DayBlockType = { item: ItemType; register: UseFormRegister<PlanInputType> };

const DayBlock = ({ item, register }: DayBlockType) => {
  const [isVisible, setVisible] = useState(false);
  const isOpenNote = () => {
    setVisible(!isVisible);
  };

  return (
    <div className={styles.dayBlock}>
      <div className={styles.dayBlock__wrap} onClick={isOpenNote} role="presentation">
        <img className={styles.dayBlock__image} src={item.image} alt={item.alt} />
        <div className={styles.dayBlock__day}>
          <div className={styles.dayBlock__box}>
            <h3 className={styles.dayBlock__title}>{item.day}</h3>
            <button className={styles.dayBlock__add} type="button">
              {isVisible ? <img src={minus} alt="Удалить" /> : <img src={plus} alt="Добавить" />}
            </button>
          </div>
          <p>{item.tip}</p>
        </div>
      </div>
      <label className={isVisible ? `${styles.dayBlock__label}` : `${styles.dayBlock__label_invisible}`}>
        <h2>{item.description}</h2>
        <textarea
          className={styles.dayBlock__input}
          placeholder={item.placeholder}
          {...register(`${item.nameInput}` as never)}
        />
      </label>
    </div>
  );
};

export default DayBlock;
