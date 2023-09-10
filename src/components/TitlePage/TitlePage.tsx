import styles from './TitlePage.module.scss';

const TitlePage = ({ text }: { text: string }) => {
  return (
    <div className={styles.titlePage__container}>
      <p className={styles.titlePage__title}>{text}</p>
    </div>
  );
};

export default TitlePage;
