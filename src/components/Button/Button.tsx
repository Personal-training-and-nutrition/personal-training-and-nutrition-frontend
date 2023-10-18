import React from 'react';
import styles from './Button.module.scss';

type TypeBtn = 'button' | 'submit'

type ButtonType = {
  textBtn: string;
  type: TypeBtn;
  isDirty?: boolean;
  isValid?: boolean;
  onCLick?: () => void;
};

const Button: React.FC<ButtonType> = ({ textBtn, type, isDirty, isValid, onCLick }) => {
  return (
    <button
      className={styles.button}
      type={type}
      disabled={!isDirty || !isValid}
      onClick={onCLick}
    >
      {textBtn}
    </button>
  );
};

export default Button;
