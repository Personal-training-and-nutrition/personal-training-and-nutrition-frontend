import styles from './UserInfo.module.scss';

function UserInfo() {
  return (
    <div className={styles.userInfo}>
      <div className={styles.userInfo__avatar}>НА</div>
      <div className={styles.userInfo__name}>
        Никитина Александра, <span>35</span> лет
      </div>
      <div className={styles.userInfo__data}>
        <p className={styles.userInfo__dataParam}>
          Рост: <span className={styles.userInfo__dataValue}>170см</span>
        </p>
        <p className={styles.userInfo__dataParam}>
          Вес: <span className={styles.userInfo__dataValue}>65кг</span>
        </p>
      </div>
    </div>
  );
}

export default UserInfo;
