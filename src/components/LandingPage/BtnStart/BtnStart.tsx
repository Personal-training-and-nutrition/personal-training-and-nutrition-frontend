import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BtnStart.module.scss';
import { useAppDispatch } from '../../../redux/store';
import { openModal } from '../../../redux/slices/modalsSlice';

const BtnStart: React.FC = () => {

  const dispatch = useAppDispatch()

  const handleOpenModal = () => {
    dispatch(openModal('modalAuth'))
  }

  return (
    <div className={styles.btnStartContainer}>
      <Link className={styles.btnStart} to={''} onClick={handleOpenModal}>
        Начать
      </Link>
    </div>
  );
};
export default BtnStart;
