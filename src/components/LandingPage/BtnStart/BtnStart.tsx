import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './BtnStart.module.scss';
import useIsAuth from '../../../hooks/useIsAuth';

const BtnStart: React.FC = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useIsAuth();

  return (
    <div className={styles.btnStartContainer}>
      <Link
        className={styles.btnStart}
        to={isLoggedIn ? '/clients' : '/sign-in'}
        onClick={() => (isLoggedIn ? navigate('/clients') : '')}
      >
        Начать
      </Link>
    </div>
  );
};
export default BtnStart;
