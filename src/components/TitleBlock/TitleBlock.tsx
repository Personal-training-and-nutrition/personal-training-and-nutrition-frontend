import { useNavigate, Link } from 'react-router-dom';
import styles from './TitleBlock.module.scss';
import backArrow from '../../assets/images/icons/back-arrow.svg';
import editIcon from '../../assets/images/icons/edit-icon.svg';

type TitleBlockProps = {
  text: string;
  isBack?: boolean;
  isEdit?: boolean;
  path?: string;
};

const TitleBlock = ({ text, isBack, isEdit, path }: TitleBlockProps) => {
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
          <img src={backArrow} alt="стрелочка назад" />
        </button>
      )}
      <div className={styles.titlePage__titleBox}>
        <p className={styles.titlePage__title}>{text.toUpperCase()}</p>

        {isEdit && (
          <Link to={path!} className={styles.titlePage__back}>
            <img src={editIcon} alt="кнопка редактирования" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default TitleBlock;
