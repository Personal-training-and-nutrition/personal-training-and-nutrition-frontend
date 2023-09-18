import React, { useState } from 'react';
import styles from './Toggle.module.scss';

const Toggle: React.FC = () => {
  const [isBtnActive, setIsBtnActive] = useState({
    btnSpec: true,
    btnUser: false,
  });

  const handleToggle = () => {
    setIsBtnActive((prevState) => {
      return {
        btnSpec: !prevState.btnSpec,
        btnUser: !prevState.btnUser,
      };
    });
  };

  return (
    <div className={styles.toogle}>
      <button
        onClick={handleToggle}
        className={
          isBtnActive.btnSpec ? `${styles.toogle__button} ${styles.toogle__button_active}` : styles.toogle__button
        }
        disabled={isBtnActive.btnSpec}
        type="button"
      >
        Специалистам
      </button>
      <button
        onClick={handleToggle}
        className={
          isBtnActive.btnUser ? `${styles.toogle__button} ${styles.toogle__button_active}` : styles.toogle__button
        }
        disabled={isBtnActive.btnUser}
        type="button"
      >
        Клиентам
      </button>
    </div>
  );
};

export default Toggle;
