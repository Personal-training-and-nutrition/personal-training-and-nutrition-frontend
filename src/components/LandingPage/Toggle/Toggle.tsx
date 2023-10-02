import React from 'react';
import styles from './Toggle.module.scss';
import { useAppDispatch } from '../../../redux/store.ts';
import { selectStatus, setStatus } from '../../../redux/slices/landingPageSlice.ts';
import { useSelector } from 'react-redux';

const Toggle: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isStatusSpecialist } = useSelector(selectStatus);

  const handleToggle = () => {
    dispatch(setStatus(!isStatusSpecialist));
  };

  return (
    <div className={styles.toogle}>
      <button
        onClick={handleToggle}
        className={
          isStatusSpecialist ? `${styles.toogle__button} ${styles.toogle__button_active}` : styles.toogle__button
        }
        disabled={isStatusSpecialist}
        type="button"
      >
        Специалистам
      </button>
      <button
        onClick={handleToggle}
        className={
          !isStatusSpecialist ? `${styles.toogle__button} ${styles.toogle__button_active}` : styles.toogle__button
        }
        disabled={!isStatusSpecialist}
        type="button"
      >
        Клиентам
      </button>
    </div>
  );
};

export default Toggle;
