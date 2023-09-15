import styles from './NoteBlock.module.scss';
import { useState } from 'react';
import up from '../../assets/images/noteBlock/arrow-up-icon.svg';
import down from '../../assets/images/noteBlock/arrow-down-icon.svg';

type ItemType = {
  note: string;
  name: string;
};
type NoteBlockType = { item: ItemType };

const NoteBlock = ({ item }: NoteBlockType) => {
  const [isVisible, setVisible] = useState(false);

  const isOpenNote = () => {
    setVisible(!isVisible);
  };

  return (
    <label className={styles.noteBlock__label}>
      <div className={styles.noteBlock__day}>
        <h3 className={styles.noteBlock__title}>{item.note}</h3>
        <button className={styles.noteBlock__add} type="button" onClick={isOpenNote}>
          {isVisible ? (<img src={up}  alt='Стрелка вверх'/>) : (<img src={down}  alt='Стрелка вниз'/>)}
        </button>
      </div>
      <textarea
        className={
          isVisible ? `${styles.noteBlock__input} ${styles.noteBlock__input_textarea}` : `${styles.noteBlock__input_invisible}`
        }
        name={item.name}
        placeholder="Добавьте важную информацию"
      />
    </label>
  );
};

export default NoteBlock;
