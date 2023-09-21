import styles from './MainSection.module.scss';
import React from 'react';
import imageZeroImg from '../../../assets/images/landingPage/users/image-0.png';
import imageOneImg from '../../../assets/images/landingPage/users/image-1.png';
import imageTwoImg from '../../../assets/images/landingPage/users/image-2.png';

const MainSection: React.FC = () => {
  return (
    <>
      <section className={styles.item}>
        <div className={styles.itemTextContainer}>
          <h2 className={styles.itemTitle}>Храните историю о клиентах</h2>
          <p className={styles.itemSubtitle}>Вся информация в одном сервисе. Быстрый доступ к контактам</p>
        </div>
        <img className={styles.itemImage} src={imageZeroImg} alt="Первое изображение" />
      </section>
      <section className={styles.item}>
        <div className={styles.itemTextContainer}>
          <h2 className={styles.itemTitle}>Отслеживайте прогресс клиента</h2>
          <p className={styles.itemSubtitle}>Наглядная информация о достижениях в питании и тренировках</p>
        </div>
        <img
          className={`${styles.itemImage} ${styles.itemImagePositionLeft}`}
          src={imageOneImg}
          alt="Первое изображение"
        />
      </section>
      <section className={styles.item}>
        <div className={styles.itemTextContainer}>
          <h2 className={styles.itemTitle}>Отправляйте рекомендации</h2>
          <p className={styles.itemSubtitle}>Общайтесь с клиентом, корректируйте планы питания и тренировок онлайн</p>
        </div>
        <img className={styles.itemImage} src={imageTwoImg} alt="Первое изображение" />
      </section>
    </>
  );
};

export default MainSection;
