import styles from './RecommendationBlock.module.scss';
const RecommendationBlock = () => {
  return (
    <section className={styles.recommendation__content}>
          <p className={styles.recommendation__title}>
            Рекомендации:{' '}
            <span className={styles.recommendation__subtitle}>
              Смело пиши мне в любое время, делись ощущениями, если что-то идет не так, не переживай, скорректируем
            </span>
          </p>
        </section>
  )
}

export default RecommendationBlock;