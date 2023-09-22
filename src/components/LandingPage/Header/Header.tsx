import React from 'react';
import styles from './Header.module.scss';
import logo from '../../../assets/logo.svg';
import Toggle from '../Toggle/Toggle.tsx';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <img className={styles.header__logo} src={logo} alt="Логотип сайта" />
      <Toggle />
    </header>
  );
};

export default Header;
