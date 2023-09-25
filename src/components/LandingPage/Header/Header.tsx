import React from 'react';
import styles from './Header.module.scss';
import logo from '../../../assets/logo.svg';
import Toggle from '../Toggle/Toggle.tsx';
import useResize from '../../../hooks/useResize.ts';
import BtnStart from '../BtnStart/BtnStart.tsx';

const Header: React.FC = () => {
  const size = useResize();

  return (
    <header className={styles.header}>
      <img className={styles.header__logo} src={logo} alt="Логотип сайта" />
      {size.width < 1440 ? <Toggle /> : <BtnStart />}
    </header>
  );
};

export default Header;
