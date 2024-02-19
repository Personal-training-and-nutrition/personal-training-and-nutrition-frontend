import avatar from '../../assets/images/foto-test/feetback-avatar.svg';
import foto from '../../assets/images/foto-test/feetback1 .svg';
import styles from './FeedbackCard.module.scss';
const arrFoto = [foto, foto, foto];
const FeedbackCard = () => {
  return (
    <section className={styles.feedBackCard}>
      <div className={styles.feedBackCard__header}>
        <div className={styles.feedBackCard__block}>
          <img className={styles.feedBackCard__avatar} src={avatar} alt="avatar"></img>
          <div className={styles.feedBackCard__wrap}>
            <p className={styles.feedBackCard__name}>Наталья</p>
            <p className={styles.feedBackCard__date}>17.11.2023</p>
          </div>
        </div>
        <div className={styles.feedBackCard__review}>
          <span className={styles.feedBackCard__icon}></span>
          <p className={styles.feedBackCard__subtitle}>5,0</p>
        </div>
      </div>
      <div className={styles.feedBackCard__contant}>
        <p className={styles.feedBackCard__text}>
          Хочу отметить профессионализм и внимательность Александры. Она провела анализ моего текущего рациона, выявила
          возможные проблемы и помогла составить индивидуальный план питания. Благодаря ее рекомендациям я стал лучше
          понимать, как правильно питаться и какие продукты выбирать. Уже через несколько недель я заметил улучшения в
          своем самочувствии и настроении. Рекомендую данного нутрициолога всем, кто хочет улучшить свое здоровье и
          качество жизни.
        </p>
        <ul className={styles.feedBackCard__fotoList}>
          {arrFoto.length !== 0 &&
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
    </section>
  );
};

export default FeedbackCard;
