import React from 'react';
import Modal from '../Modal';
import Button from '../../Button/Button';
import styles from './ConfirmationTooltip.module.scss';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { closeModal } from '../../../redux/slices/modalsSlice';
import SocialIcons from '../../SocialIcons/SocialIcons';

type ConfirmationTooltipType = {
  title?: string;
  subtitle: string;
  btnText: string;
  isTraining: boolean;
  link?: string;
  isIcons?: boolean;
  phoneNumber?: string;
};

const ConfirmationTooltip: React.FC<ConfirmationTooltipType> = ({ title, subtitle, btnText, isTraining, link, isIcons, phoneNumber}) => {
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
          <SocialIcons isMessanger = {true} link={link} phoneNumber = {phoneNumber}/>
          <p className={`${styles.planTraining__text} ${styles.planTraining__text_center} `}>или </p>
          </>)}
          <Button textBtn={btnText} type="button" isValid={true} onCLick={handleCloseBtnClick} isDirty={true} />
        </div>

      </div>
    </Modal>
  );
};

export default ConfirmationTooltip;
