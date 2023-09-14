import styles from './PlanMeal.module.scss';
import { useState } from 'react';

type ItemType = {
  day: string;
  name: string;
  placeholder: string;
};
type DayBlockType = { item: ItemType };

const DayBlock = ({ item }: DayBlockType) => {
  const [isVisible, setVisible] = useState(false);

  const isOpenNote = () => {
    setVisible(!isVisible);
  };

  return (
    <label className={styles.plan__label}>
      <div className={styles.plan__day}>
        <h3 className={styles.plan__title}>{item.day}</h3>
        <button className={styles.plan__add} type="button" onClick={isOpenNote}>
          {isVisible ? 'Удалить' : 'Добавить'}
        </button>
      </div>
      <textarea
        className={
          isVisible ? `${styles.plan__input} ${styles.plan__input_textarea}` : `${styles.plan__input_invisible}`
        }
        name={item.name}
        placeholder="Напишите рекомендации"
      />
    </label>
  );
};

export default DayBlock;
