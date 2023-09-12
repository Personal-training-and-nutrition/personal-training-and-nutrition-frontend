/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './Button.module.scss';

export enum TypeBtnEnum {
  BUTTON = 'button',
  SUBMIT = 'submit',
}

type ButtonType = {
  textBtn: string;
  className?: string;
  type: TypeBtnEnum;
  isDirty: boolean;
  isValid: boolean;
};

const Button: React.FC<ButtonType> = ({ textBtn, className, type, isDirty, isValid }) => {
  return (
    <button
      className={`${styles.button} ${className === 'button__mail' && styles.button__mail} ${
        className === 'button__blue' && styles.button__blue
      }`}
      type={type}
      disabled={!isDirty || !isValid}
    >
      {textBtn}
    </button>
  );
};

export default Button;
