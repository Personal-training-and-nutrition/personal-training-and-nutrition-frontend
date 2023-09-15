import styles from './DayBlock.module.scss';
import { useState } from 'react';
import plus from '../../assets/images/dayblock/plus-icon.svg';
import minus from '../../assets/images/dayblock/minus-icon.svg';

type ItemType = {
  day: string;
  name: string;
  placeholder: string;
  image: string;
  alt: string;
  tip: string;
  description: string;
};
type DayBlockType = { item: ItemType };

const DayBlock = ({ item }: DayBlockType) => {
  const [isVisible, setVisible] = useState(false);

  const isOpenNote = () => {
    setVisible(!isVisible);
  };

  return (
    <div className={styles.dayBlock}>
      <div className={styles.dayBlock__wrap}>
      <img className={styles.dayBlock__image}src={item.image} alt={item.alt} />
      <div className={styles.dayBlock__day}>
        <div className={styles.dayBlock__box}>
          <h3 className={styles.dayBlock__title}>{item.day}</h3>
          <button className={styles.dayBlock__add} type="button" onClick={isOpenNote}>
            {isVisible ? <img src={minus} alt="Удалить" /> : <img src={plus} alt="Добавить" />}
          </button>
        </div>
        <p>{item.tip}</p>
      </div>
        </div>
      <label className={isVisible ? `${styles.dayBlock__label}` : `${styles.dayBlock__label_invisible}`}>
        <h2>{item.description}</h2>
        <textarea className={styles.dayBlock__input} name={item.name} placeholder={item.placeholder} />
      </label>
    </div>
  );
};

export default DayBlock;
