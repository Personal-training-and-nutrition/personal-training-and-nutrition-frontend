import styles from './AuthPageLayot.module.scss';
import TitleBlock from '../TitleBlock/TitleBlock';
import logo from '../../assets/logo.svg';

const AuthPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.authPageLayout__desktop}>
      <img className={styles.authPageLayout__logo} src={logo} alt="Логотип WellCoach" />
      <div className={styles.authPageLayout__content}>
        <TitleBlock text="вход" isBack isEdit={false} path="/" />
        <div className={styles.authPageLayout__container}>{children}</div>
      </div>
    </div>
  );
};

export default AuthPageLayout;
