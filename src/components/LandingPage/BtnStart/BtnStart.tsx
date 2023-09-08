import React from 'react';
import styles from './BtnStart.module.scss';

type BtnStartType = {
  text: string;
  size: string;
};

const BtnStart: React.FC<BtnStartType> = ({ text, size }) => {
  return (
    <button
      className={`${styles.button} ${
        (size === 'small' && styles.button__small) ||
        (size === 'medium' && styles.button__medium) ||
        (size === 'large' && styles.button__large)
      }`}
      type="button"
    >
      {text}
    </button>
  );
};

export default BtnStart;
