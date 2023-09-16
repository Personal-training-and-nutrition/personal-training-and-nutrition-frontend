import styles from './ButtonDelete.module.scss';
const ButtonDelete = ({ text }: { text: string }) => {
  return (
    <button className={styles.delete} type="button">
      {text}
    </button>
  );
};

export default ButtonDelete;
