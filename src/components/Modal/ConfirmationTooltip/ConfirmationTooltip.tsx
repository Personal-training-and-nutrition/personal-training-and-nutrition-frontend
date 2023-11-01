import React from 'react';
import Modal from '../Modal.tsx';
import Button from '../../Button/Button.tsx';
import styles from './ConfirmationTooltip.module.scss';
import { useAppDispatch, useAppSelector } from '../../../redux/store.ts';
import { closeModal } from '../../../redux/slices/modalsSlice.ts';
import { useNavigate } from 'react-router-dom';
import SocialIcons from '../../SocialIcons/SocialIcons.tsx';

type ConfirmationTooltipType = {
  title?: string;
  subtitle: string;
  btnText: string;
  isTraining: boolean;
  link?: string;
  isIcons?: boolean;
};

const ConfirmationTooltip: React.FC<ConfirmationTooltipType> = ({ title, subtitle, btnText, isTraining, link, isIcons }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleCloseBtnClick = async () => {
    if(btnText === 'Закрыть') {
      dispatch(closeModal())
    }
    if(btnText === 'Скопировать ссылку') {
      // dispatch(closeModal())
      console.log(link);
      await navigator.clipboard.writeText(`${link}`)
    }
  }
  const { isOpen, modalId } = useAppSelector((state) => state.modal);
  const isTooltip = modalId === 'tooltipModal' ? 'tooltipModal' : '';
  return (
    <Modal isOpen={isOpen} modalId={isTooltip} link={link}>
      <div className={styles.planTraining__wrapper}>
        <span
          className={` ${
            isTraining
              ? styles.planTraining__img_isTraining
              : styles.planTraining__img_isFood
          }`}
        ></span>
        <div className={styles.planTraining__textContainer}>
          {title && <h2 className={styles.planTraining__title}>{title}</h2>}
          <p className={styles.planTraining__subtitle}>{subtitle}</p>
        </div>
        <div className={styles.planTraining__container}>
          {isIcons && (
          <>
          <SocialIcons isMessanger = {true}/>
          <p className={`${styles.planTraining__text} ${styles.planTraining__text_center} `}>или </p>
          </>)}
          <Button textBtn={btnText} type="button" isValid={true} onCLick={handleCloseBtnClick} isDirty={true} />
        </div>

      </div>
    </Modal>
  );
};

export default ConfirmationTooltip;
