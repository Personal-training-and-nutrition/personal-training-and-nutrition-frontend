import React from 'react';
import styles from './Modal.module.scss';

type Props = {
  children: React.ReactNode;
};

export default function Modal({ children }: Props) {
  return (
    <div className={styles.modal}>
      <div className={styles.modal__container}>
        <button className={styles.modal__closeBtn} type="button"></button>
        {children}
      </div>
    </div>
  );
}
