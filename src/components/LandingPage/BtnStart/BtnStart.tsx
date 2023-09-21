import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BtnStart.module.scss';

const BtnStart: React.FC = () => {
  return (
    <Link className={styles.btnStart} to={'/authModal'}>
      Начать
    </Link>
  );
};
export default BtnStart;
