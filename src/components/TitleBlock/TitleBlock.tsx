import { Link, useNavigate } from 'react-router-dom';
import editIcon from '../../assets/images/icons/edit-icon.svg';
import SortBlock from '../SortBlock/SortBlock';
import styles from './TitleBlock.module.scss';

type TitleBlockProps = {
  text?: string;
  isBack?: boolean;
  isEdit?: boolean;
  path?: string;
  isVisibleLinkLike?: boolean;
  isSort?: boolean;
};

const TitleBlock = ({ text, isBack, isEdit, path, isVisibleLinkLike, isSort }: TitleBlockProps) => {
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
      {isBack && <button className={styles.titlePage__back} type="button" onClick={goBack}></button>}
      <div className={styles.titlePage__titleBox}>
        <h2 className={styles.titlePage__title}>{text}</h2>

        {isEdit && path && (
          <Link to={path} className={styles.titlePage__edit}>
            <img src={editIcon} alt="кнопка редактирования" />
          </Link>
        )}
        {isVisibleLinkLike && (
          <div className={styles.titlePage__wrap}>
            <button type="submit" className={`${styles.titlePage__btn} ${styles.titlePage__like}`}></button>
          </div>
        )}
        {isSort && <SortBlock />}
      </div>
    </nav>
  );
};

export default TitleBlock;
