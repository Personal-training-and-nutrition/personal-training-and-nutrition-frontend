import styles from './UserStatusBtn.module.scss';

const UserStatus = ({ statusSpec }: { statusSpec: boolean }) => {
  return (
    // если url специалиста - то
    <div className={styles.status}>
      <button className={styles.status__btn} type="button">
        {statusSpec ? 'Специалист' : 'Пользователь'}
      </button>
      {/* <button className={styles.status__btn} type="button">
        {statusSpec ? 'Пользователь' : 'Стать специалистом'}
      </button> */}
    </div>
  );
};

export default UserStatus;
