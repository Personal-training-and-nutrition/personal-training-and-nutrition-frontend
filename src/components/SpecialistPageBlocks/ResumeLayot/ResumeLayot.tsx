import styles from './ResumeLayot.module.scss';

interface IActivity {
  mesto: string;
  period: string;
}
interface IResume {
  title: string;
  subtitle?: string;
  activity: IActivity[];
  isVisible: boolean;
  onClick: () => void;
}

const ResumeLayot = ({ title, subtitle, activity, isVisible, onClick }: IResume) => {
  return (
    <section className={styles.resume}>
      <div className={styles.resume__wrap} onClick={onClick}>
        <div className={styles.resume__titleWrap}>
          <h4 className={styles.resume__title}>{title}</h4>
          <p className={styles.resume__p}>{subtitle}</p>
        </div>
        <button
          className={
            isVisible
              ? `${styles.resume__btn} ${styles.resume__btn_open}`
              : `${styles.resume__btn} ${styles.resume__btn_hidden}`
          }
        ></button>
      </div>
      <ul className={isVisible ? `${styles.resume__list}` : `${styles.resume__list} ${styles.resume__list_invisible}`}>
        {activity
          ? activity.map((obj, i) => {
              return (
                <li key={i} className={styles.resume__item}>
                  <p className={styles.resume__subtitle}>{obj.mesto}</p>
                  <p className={`${styles.resume__subtitle} ${styles.resume__subtitle_style}`}>{obj.period}</p>
                </li>
              );
            })
          : ''}
      </ul>
    </section>
  );
};

export default ResumeLayot;
