import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './BtnStart.module.scss';
import { useAppDispatch } from '../../../redux/store';
import { openModal } from '../../../redux/slices/modalsSlice';
import useIsAuth from '../../../hooks/useIsAuth';

const BtnStart: React.FC = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useIsAuth();
  const dispatch = useAppDispatch();

  const handleOpenModal = () => {
    dispatch(openModal({ modalId: 'modalAuth' }));
  };

  return (
    <div className={styles.btnStartContainer}>
      <Link
        className={styles.btnStart}
        to={isLoggedIn ? '/clients' : ''}
        onClick={() => (isLoggedIn ? navigate('/clients') : handleOpenModal())}
      >
        Начать
      </Link>
    </div>
  );
};
export default BtnStart;
