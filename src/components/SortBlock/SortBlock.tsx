/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useEffect, useRef } from 'react';
import { setOpen, setSort, toggleOpen } from '../../redux/slices/feedbackSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { SortType } from '../../redux/types/feedback';
import styles from './SortBlock.module.scss';

const sortList: SortType[] = [
  { name: 'По дате ↓' },
  { name: 'По дате ↑' },
  { name: 'По оценке ↓' },
  { name: 'По оценке ↑' },
];

const SortBlock = () => {
  const sortRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((store) => store.feedback.isOpen);
  const sort = useAppSelector((store) => store.feedback.sort);

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
    dispatch(toggleOpen());
  };

  const handleClickOutside = ({ target }: MouseEvent): void => {
    if (sortRef.current && !sortRef.current.contains(target as Node)) {
      handleClose();
    }
  };
  const handleCloseByEsc = (evt: KeyboardEvent) => {
    if (evt.key === 'Escape') {
      handleClose();
    }
  };
  const handleOverlayClose = (evt: React.MouseEvent<HTMLDivElement>) => {
    if (evt.target === evt.currentTarget) {
      handleClose();
    }
  };
  const handleClose = () => {
    dispatch(setOpen(false));
  };
  const onClickselectSort = (obj: SortType) => {
    dispatch(setSort(obj));
    handleClose();
  };
  return (
    <>
      <button className={styles.sortBlock__wrapSort} type="button" onClick={(evt) => handleSortBtnClick(evt)}>
        <p className={styles.sortBlock__text}>{sort.name}</p>
        <div className={`${styles.sortBlock__btn} ${styles.sortBlock__sort}`}></div>
      </button>
      {isOpen && (
        <div className={styles.sortBlock__container} onMouseDown={handleOverlayClose} ref={sortRef}>
          <ul className={styles.sortBlock__list}>
            {sortList.map((obj, i) => {
              return (
                <li key={i} className={styles.sortBlock__item} onClick={() => onClickselectSort(obj)}>
                  <p className={`${styles.sortBlock__text} ${styles.sortBlock__text_unactive}`}>{obj.name}</p>
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
