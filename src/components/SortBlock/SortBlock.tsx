import { useEffect, useRef, useState } from 'react';
import styles from './SortBlock.module.scss';

type SortItem = { name: string };
const sortList: SortItem[] = [
  { name: 'По дате ↓' },
  { name: 'По дате ↑' },
  { name: 'По оценке ↓' },
  { name: 'По оценке ↑' },
];
const SortBlock = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);
  const handleSortBtnClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (!isOpen) return;
    const closeByEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        // dispatch(closeModal())
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', closeByEsc);
    return () => document.removeEventListener('keydown', closeByEsc);
  }, [isOpen]);

  const handleOverlayClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button className={styles.sortBlock__wrapSort} type="button" onClick={handleSortBtnClick}>
        <p className={styles.sortBlock__text}>Сортировка</p>
        <div className={`${styles.sortBlock__btn} ${styles.sortBlock__sort}`}></div>
      </button>
      {isOpen && (
        <div className={styles.sortBlock__container} onMouseDown={handleOverlayClose} ref={sortRef}>
          <ul className={styles.sortBlock__list}>
            {sortList.map((el, i) => {
              return (
                <li key={i} className={styles.sortBlock__item}>
                  <p className={`${styles.sortBlock__text} ${styles.sortBlock__text_unactive}`}>{el.name}</p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default SortBlock;
