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
};

const Button: React.FC<ButtonType> = ({ textBtn, className, type }) => {
  console.log(type);
  return (
    // <button className={`buttonAuth ${className}`} type="submit">
    <button
      className={`${styles.button} ${className === 'button__mail' && styles.button__mail} ${
        className === 'button__profile' && styles.button__profile
      }`}
      type={type}
    >
      {textBtn}
    </button>
  );
};

export default Button;
