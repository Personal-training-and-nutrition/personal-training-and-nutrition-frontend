import styles from './MainSection.module.scss';
import React from 'react';

type MainSectionProps = {
  title: string;
  subtitle: string;
  img: string;
  isRight: boolean;
};

const MainSection: React.FC<MainSectionProps> = ({ title, subtitle, img, isRight }) => {
  const ActiveClassName = isRight ? `${styles.itemImage} ${styles.itemImagePositionRight}` : styles.itemImage;

  return (
    <section className={styles.item}>
      <div className={styles.itemTextContainer}>
        <h2 className={styles.itemTitle}>{title}</h2>
        <p className={styles.itemSubtitle}>{subtitle}</p>
      </div>
      <img className={ActiveClassName} src={img} alt="Скриншот приложения" />
    </section>
  );
};

export default MainSection;
