import React from 'react';
import styles from './Button.module.scss';

type TypeBtn = 'button' | 'submit';

type ButtonType = {
  textBtn: string;
  type: TypeBtn;
  isDirty?: boolean;
  isValid?: boolean;
  onCLick?: () => void;
  style?: boolean;
};

const Button: React.FC<ButtonType> = ({ textBtn, type, isDirty, isValid, onCLick, style }: ButtonType) => {
  return (
    <button
      className={style ? `${styles.button} ${styles.button_style}` : `${styles.button}`}
      type={type}
      disabled={!isDirty || !isValid}
      onClick={onCLick}
    >
      {textBtn}
    </button>
  );
};

export default Button;
