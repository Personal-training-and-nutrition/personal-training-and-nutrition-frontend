import React, { useEffect } from 'react';
import styles from './Modal.module.scss';
import { closeModal } from '../../redux/slices/modalsSlice';
import { useAppDispatch } from '../../redux/store';
import { useNavigate } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  modalId: string | null;
  link?: string;
};

export default function Modal({ children, isOpen, modalId, link }: Props) {
  const navigate = useNavigate();
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
  if(link) navigate(-1);
}

  return (
    <div className={modalId && isOpen ? `${styles.modal} ${styles.modal_show}` : `${styles.modal}`} onMouseDown={handleOverlayClose}>
      <div className={styles.modal__container}>
        <button className={styles.modal__closeBtn} type="button" onClick={handleClose}></button>
        {children}
      </div>
    </div>
  );
}
