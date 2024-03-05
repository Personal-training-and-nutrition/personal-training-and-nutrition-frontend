import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useIsAuth from '../../../hooks/useIsAuth';
import { openModal } from '../../../redux/slices/modalsSlice';
import { useAppDispatch } from '../../../redux/store';
import { PATH_CLIENTS } from '../../../utils/constants';
import styles from './BtnStart.module.scss';

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
        to={isLoggedIn ? `${PATH_CLIENTS}` : ''}
        onClick={() => (isLoggedIn ? navigate(`${PATH_CLIENTS}`) : handleOpenModal())}
      >
        Начать
      </Link>
    </div>
  );
};
export default BtnStart;
