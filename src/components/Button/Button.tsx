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
  isValidForm?: boolean;
};

const Button: React.FC<ButtonType> = ({ textBtn, className, type, isValidForm }) => {
  return (
    // <button className={`buttonAuth ${className}`} type="submit">
    <button
      className={`${styles.button} ${className === 'button__mail' && styles.button__mail} ${
        className === 'button__blue' && styles.button__blue
      }`}
      type={type}
      disabled={!isValidForm}
    >
      {textBtn}
    </button>
  );
};

export default Button;
