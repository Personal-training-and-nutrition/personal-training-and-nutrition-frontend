import { MouseEventHandler } from 'react';
import styles from './ButtonDelete.module.scss';
const ButtonDelete = ({ text, onClick }: { text: string; onClick?: MouseEventHandler<HTMLButtonElement> }) => {
  return (
    <button className={styles.delete} type="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonDelete;
