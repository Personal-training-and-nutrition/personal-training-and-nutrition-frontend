import { useNavigate, Link } from 'react-router-dom';
import styles from './TitleBlock.module.scss';
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
    <nav
      className={
        isBack
          ? `${styles.titlePage__container} ${styles.titlePage__container_position}`
          : `${styles.titlePage__container}`
      }
    >
      {isBack && (
        <button className={styles.titlePage__back} type="button" onClick={goBack}>
        </button>
      )}
      <div className={styles.titlePage__titleBox}>
        <h2 className={styles.titlePage__title}>{text}</h2>

        {isEdit && (
          <Link to={path!} className={styles.titlePage__edit}>
            <img src={editIcon} alt="кнопка редактирования" />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default TitleBlock;
