import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BtnStart.module.scss';

const BtnStart: React.FC = () => {
  return (
    <div className={styles.btnStartContainer}>
      <Link className={styles.btnStart} to={'/register'}>
        Начать
      </Link>
    </div>
  );
};
export default BtnStart;
