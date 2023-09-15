import React from 'react';
import Modal from '../Modal.tsx';
import Button from '../../Button/Button.tsx';
import styles from './ConfirmationTooltip.module.scss';

type ConfirmationTooltipType = {
  title?: string;
  subtitle: string;
  btnText: string;
};

const ConfirmationTooltip: React.FC<ConfirmationTooltipType> = ({ title, subtitle, btnText }) => {
  return (
    <Modal>
      <div className={styles.planTraining__wrapper}>
        <span className={styles.planTraining__img}></span>
        <div className={styles.planTraining__textContainer}>
          {title && <h2 className={styles.planTraining__title}>{title}</h2>}
          <p className={styles.planTraining__subtitle}>{subtitle}</p>
        </div>
        <Button textBtn={btnText} type="button" isValid={true} isDirty={true} />
      </div>
    </Modal>
  );
};

export default ConfirmationTooltip;
