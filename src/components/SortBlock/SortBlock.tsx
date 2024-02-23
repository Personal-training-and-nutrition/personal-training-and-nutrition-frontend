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

  useEffect(() => {
    if (!isOpen) return;
    document.body.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleCloseByEsc);
    return () => {
      document.removeEventListener('keydown', handleCloseByEsc);
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  const handleSortBtnClick = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    evt.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleClickOutside = ({ target }: MouseEvent): void => {
    if (sortRef.current && !sortRef.current.contains(target as Node)) {
      handleClose();
    }
  };
  const handleCloseByEsc = (evt: KeyboardEvent) => {
    if (evt.key === 'Escape') {
      // dispatch(closeModal())
      handleClose();
    }
  };
  const handleOverlayClose = (evt: React.MouseEvent<HTMLDivElement>) => {
    if (evt.target === evt.currentTarget) {
      handleClose();
    }
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button className={styles.sortBlock__wrapSort} type="button" onClick={(evt) => handleSortBtnClick(evt)}>
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
