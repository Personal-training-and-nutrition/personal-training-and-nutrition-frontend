import React from 'react';
import styles from './PlanItem.module.scss';
import icon from '../../assets/images/dayblock/training/Image-1.svg';

const PlanItem: React.FC = () => {
  return (
    <li className={styles.planItem}>
      <img className={styles.planItem__img} src={icon} alt="Иконка" />
      <div className={styles.planItem__container}>
        <div className={styles.planItem__textContainer}>
          <h2 className={styles.planItem__title}>Входим в ритм!</h2>
          <p className={styles.planItem__dateOfCreation}>Создан 27 августа 2023</p>
        </div>
        <button className={styles.planItem__btnForward} type={'button'} />
      </div>
    </li>
  );
};

export default PlanItem;
