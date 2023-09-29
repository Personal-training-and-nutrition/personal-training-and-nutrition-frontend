import React from 'react';
import styles from './Modal.module.scss';
import { useNavigate } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
};

export default function Modal({ children }: Props) {
  const navigate = useNavigate()
  return (
    <div className={styles.modal}>
      <div className={styles.modal__container}>
        <button className={styles.modal__closeBtn} type="button" onClick={() => navigate('/')}></button>
        {children}
      </div>
    </div>
  );
}
