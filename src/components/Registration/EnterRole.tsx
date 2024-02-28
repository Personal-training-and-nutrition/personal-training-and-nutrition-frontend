import React from 'react';
import styles from "./Registration.module.scss";
import {TRegister} from "../../pages/RegisterPage/RegisterPage.tsx";

const EnterRole: React.FC <TRegister> = ({handleNextStep}) => {
  return (
    <div onClick={handleNextStep}>
      <h2 className={styles.registration__title}>Выберите роль</h2>
      <ul className={styles.registration__listItems}>
        <li className={styles.registration__listItem}>
          <h2 className={styles.registration__subtitle}>Клиент</h2>
          <p className={`${styles.registration__description} ${styles.registration__description_color_white}`}>Получение консультаций, общение, ведение своего прогресса</p>
        </li>
        <li className={`${styles.registration__listItem} ${styles.registration__listItem_color_blue}`}>
          <h2 className={styles.registration__subtitle}>Специалист</h2>
          <p className={`${styles.registration__description} ${styles.registration__description_color_white}`}>Размещение анкеты, календарь записей, ведение клиентов</p>
        </li>
      </ul>
    </div>
  );
};

export default EnterRole;
