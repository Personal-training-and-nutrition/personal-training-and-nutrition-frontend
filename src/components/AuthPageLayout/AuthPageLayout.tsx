import styles from './AuthPageLayot.module.scss';
import TitleBlock from '../TitleBlock/TitleBlock';
import logo from '../../assets/logo.svg';

interface AuthPageLayoutProps {
  text: string;
  children: React.ReactNode
}
const AuthPageLayout = ({ children, text }: AuthPageLayoutProps) => {
  return (
    <div className={styles.authPageLayout__desktop}>
      <img className={styles.authPageLayout__logo} src={logo} alt="Логотип WellCoach" />
      <div className={styles.authPageLayout__content}>
        <TitleBlock text={text} isBack isEdit={false} path="/" />
        <div className={styles.authPageLayout__container}>{children}</div>
      </div>
    </div>
  );
};

export default AuthPageLayout;
