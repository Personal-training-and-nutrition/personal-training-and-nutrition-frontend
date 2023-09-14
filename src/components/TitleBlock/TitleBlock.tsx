import styles from './TitleBlock.module.scss';
import { useNavigate } from 'react-router-dom';
const TitleBlock = ({ text, isBack }: { text: string; isBack?: boolean }) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div
      className={
        isBack
          ? `${styles.titlePage__container} ${styles.titlePage__container_position}`
          : `${styles.titlePage__container}`
      }
    >
      {isBack && (
        <button className={styles.titlePage__back} type="button" onClick={goBack}>
          ←
        </button>
      )}
      <p className={styles.titlePage__title}>{text.toUpperCase()}</p>
    </div>
  );
};

export default TitleBlock;
