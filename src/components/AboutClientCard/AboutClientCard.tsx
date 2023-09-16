import styles from './AboutClientCard.module.scss'
import { useState } from 'react'

type Props = {
  title: string;
};

const AboutClientCard = ({ title }: Props) => {
  const [isShowCard, setIsShowCard ] = useState(false)

  function onShowClick () {
    setIsShowCard(!isShowCard)
  }

  return (
    <li className={styles.cc__item}>
      <div className={styles.cc__titleWrap} onClick={onShowClick}>
        <h3 className={styles.cc__title}>{title}</h3>
        <button type="button" className={
              !isShowCard ? `${styles.cc__btn} ${styles.cc__btn_active}` : `${styles.cc__btn}`
            }></button>
      </div>
      <div className={
        isShowCard ? `${styles.cc__inputWrap} ${styles.cc__inputWrap_show}` : `${styles.cc__inputWrap}`
        }>
        <textarea name="" id="" className={styles.cc__input} placeholder='Добавьте важную информацию'></textarea>
      </div>
    </li>
  );
};

export default AboutClientCard;
