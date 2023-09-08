import React from 'react';
import styles from './CardItem.module.scss';

type CardItemType = {
  title: string;
  subtitle: string;
  isReverse: boolean;
  imageUrl: string;
  imageAlt: string;
};

const CardItem: React.FC<CardItemType> = ({ title, subtitle, isReverse, imageUrl, imageAlt }) => {
  const activeClass = isReverse ? `${styles.card} ${styles.card_reverse}` : styles.card;

  return (
    <li className={activeClass}>
      <div className={styles.card__column}>
        <h2 className={styles.card__title}>{title}</h2>
        <p className={styles.card__subtitle}>{subtitle}</p>
      </div>
      <div className={`${styles.cardItem__column} ${styles.card__image_container_temp}`}>
        <img className={styles.card__image} src={imageUrl} alt={imageAlt} />
      </div>
    </li>
  );
};

export default CardItem;
