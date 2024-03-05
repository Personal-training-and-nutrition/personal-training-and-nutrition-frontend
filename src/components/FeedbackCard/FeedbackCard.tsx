import { IFeedbackCard } from '../../redux/types/specialist';
import styles from './FeedbackCard.module.scss';

const FeedbackCard = ({ avatar, name, date, rating, text, arrFoto, isHideText }: IFeedbackCard) => {
  const textToRender = text.length >= 92 ? (isHideText ? text.substring(0, 92) : text) : text;
  return (
    <div className={styles.feedBackCard}>
      <div className={styles.feedBackCard__header}>
        <div className={styles.feedBackCard__block}>
          <img className={styles.feedBackCard__avatar} src={avatar} alt="avatar"></img>
          <div className={styles.feedBackCard__wrap}>
            <p className={styles.feedBackCard__name}>{name}</p>
            <p className={styles.feedBackCard__date}>{date}</p>
          </div>
        </div>
        <div className={styles.feedBackCard__review}>
          <span className={styles.feedBackCard__icon}></span>
          <p className={styles.feedBackCard__rating}>{rating}</p>
        </div>
      </div>
      <div className={styles.feedBackCard__contant}>
        <p className={styles.feedBackCard__text}>
          {textToRender}
          <span>{isHideText && '...'}</span>
        </p>
        <ul className={styles.feedBackCard__fotoList}>
          {arrFoto.length &&
            arrFoto.length !== 0 &&
            arrFoto.map((el, i) => {
              return (
                <li key={i} className={styles.feedBackCard__fotoItem}>
                  <button className={styles.feedBackCard__fotoBtn}>
                    <img src={el} alt="" className={styles.feedBackCard__img} />
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default FeedbackCard;
