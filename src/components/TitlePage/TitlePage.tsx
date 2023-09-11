import styles from './TitlePage.module.scss';
import { useNavigate } from 'react-router-dom';
const TitlePage = ({ text, isBack }: { text: string; isBack?: boolean }) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div
      className={
        isBack
          ? `${styles.titlePage__container}`
          : `${styles.titlePage__container}${styles.titlePage__container_position}`
      }
    >
      {isBack && (
        <button className={styles.titlePage__back} type="button" onClick={goBack}>
          ←
        </button>
      )}
      <p className={styles.titlePage__title}>{text}</p>
    </div>
  );
};

export default TitlePage;
