import styles from './MainSection.module.scss';
import React from 'react';
import useResize from '../../../hooks/useResize.ts';

type MainSectionProps = {
  title: string;
  subtitle: string;
  img: string;
  isRight: boolean;
};

const MainSection: React.FC<MainSectionProps> = ({ title, subtitle, img, isRight }) => {
  const size = useResize();

  const ActiveClassNameSection =
    isRight && size.width <= 1440 ? `${styles.item} ${styles.itemPositionRight}` : styles.item;
  const ActiveClassNameImage =
    isRight && size.width <= 1440 ? `${styles.itemImage} ${styles.itemImagePositionRight}` : styles.itemImage;

  return (
    <section className={ActiveClassNameSection}>
      <img className={ActiveClassNameImage} src={img} alt="Скриншот приложения" />
      <div className={styles.itemTextContainer}>
        <h2 className={styles.itemTitle}>{title}</h2>
        <p className={styles.itemSubtitle}>{subtitle}</p>
      </div>
    </section>
  );
};

export default MainSection;
