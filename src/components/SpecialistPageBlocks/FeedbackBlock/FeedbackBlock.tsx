import { Link } from 'react-router-dom';
import avatar from '../../../assets/images/foto-test/feetback-avatar.svg';
import foto from '../../../assets/images/foto-test/feetback1 .svg';
import { IFeedbackCard } from '../../../redux/types/specialist';
import { PATH_FEEDBACK } from '../../../utils/constants';
import FeedbackCard from '../../FeedbackCard/FeedbackCard';
import Carousel from '../Carousel/Carousel';
import styles from './FeedbackBlock.module.scss';

const arrFoto = [foto, foto, foto];
const arrFeedback: IFeedbackCard[] = [
  {
    avatar: avatar,
    name: 'Наталья',
    date: '17.11.2023',
    rating: '5,0',
    text: 'Хочу отметить профессионализм и внимательность Александры. Она провела анализ моего текущего рациона, выявила возможные проблемы и помогла составить индивидуальный план питания. Благодаря ее рекомендациям я стал лучше понимать, как правильно питаться и какие продукты выбирать. Уже через несколько недель я заметил улучшения в своем самочувствии и настроении. Рекомендую данного нутрициолога всем, кто хочет улучшить свое здоровье и качество жизни.',
    arrFoto: arrFoto,
  },
  {
    avatar: avatar,
    name: 'Наталья',
    date: '17.11.2023',
    rating: '5,0',
    text: 'Хочу отметить профессионализм и внимательность Александры. Она провела анализ моего текущего рациона, выявила возможные проблемы и помогла составить индивидуальный план питания. Благодаря ее рекомендациям я стал лучше понимать, как правильно питаться и какие продукты выбирать. Уже через несколько недель я заметил улучшения в своем самочувствии и настроении. Рекомендую данного нутрициолога всем, кто хочет улучшить свое здоровье и качество жизни.',
    arrFoto: arrFoto,
  },
  {
    avatar: avatar,
    name: 'Наталья',
    date: '17.11.2023',
    rating: '5,0',
    text: 'Хочу отметить профессионализм и внимательность Александры. Она провела анализ моего текущего рациона, выявила возможные проблемы и помогла составить индивидуальный план питания. Благодаря ее рекомендациям я стал лучше понимать, как правильно питаться и какие продукты выбирать. Уже через несколько недель я заметил улучшения в своем самочувствии и настроении. Рекомендую данного нутрициолога всем, кто хочет улучшить свое здоровье и качество жизни.',
    arrFoto: arrFoto,
  },
];
const FeedbackBlock = () => {
  return (
    <section className={styles.feedback}>
      <div className={styles.feedback__header}>
        <div className={styles.feedback__wrap}>
          <h4 className={styles.feedback__title}>Отзывы</h4>
          <span className={styles.feedback__icon}></span>
          <p className={styles.feedback__subtitle}>5,0</p>
        </div>
        <Link to={PATH_FEEDBACK} state={{ arrFeedback: arrFeedback }} className={styles.feedback__btn}>
          <div className={styles.feedback__count}>3 отзыва</div>
          <span className={styles.feedback__arrow}></span>
        </Link>
      </div>
      <Carousel>
        {arrFeedback.map((obj, i) => (
          <div className={styles.feedback__slider} key={i}>
            <FeedbackCard {...obj} isHideText={true} />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default FeedbackBlock;
