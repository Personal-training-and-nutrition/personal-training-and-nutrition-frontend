import React from 'react';
import styles from './Button.module.scss';

type TypeBtn = 'button' | 'submit'

type ButtonType = {
  textBtn: string;
  type: TypeBtn;
  isDirty?: boolean;
  isValid?: boolean;
};

const Button: React.FC<ButtonType> = ({ textBtn, type, isDirty, isValid }) => {
  console.log(type, isValid, isDirty)
  return (
    <button
      className={styles.button}
      type='submit'
      disabled={!isDirty || !isValid}
    >
      {textBtn}
    </button>
  );
};

export default Button;
