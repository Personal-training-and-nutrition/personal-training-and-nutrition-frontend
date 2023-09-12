import styles from './UserStatusBtn.module.scss';

const UserStatus = ({ statusSpec }: { statusSpec: boolean }) => {
  return (
    // если url специалиста - то
    <div className={styles.status}>
      <button
        className={statusSpec ? `${styles.status__btn}` : `${styles.status__btn} ${styles.status__btn_client}`}
        type="button"
      >
        {statusSpec ? 'Специалист' : 'Пользователь'}
      </button>
    </div>
  );
};

export default UserStatus;
