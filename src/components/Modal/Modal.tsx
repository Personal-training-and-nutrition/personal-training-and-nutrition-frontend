import React, { useEffect } from 'react';
import styles from './Modal.module.scss';
import { closeModal } from '../../redux/slices/modalsSlice';
import { useAppDispatch } from '../../redux/store';

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  modalId: string | null;
};

export default function Modal({ children, isOpen, modalId }: Props) {

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!isOpen) return;
    const closeByEsc = (e: KeyboardEvent ) => {
      if (e.key === "Escape") {
        dispatch(closeModal())
      }
    };
    document.addEventListener("keydown", closeByEsc);
    return () => document.removeEventListener("keydown", closeByEsc);
  }, [isOpen]);

  const handleOverlayClose = (e: React.MouseEvent<HTMLDivElement> ) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

const handleClose = () => {
  dispatch(closeModal())
}

  return (
    <div className={modalId && isOpen ? `${styles.modal} ${styles.modal_show}` : `${styles.modal}`} onClick={handleOverlayClose}>
      <div className={styles.modal__container}>
        <button className={styles.modal__closeBtn} type="button" onClick={handleClose}></button>
        {children}
      </div>
    </div>
  );
}
