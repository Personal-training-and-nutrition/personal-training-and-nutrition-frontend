import React from 'react';
import styles from './Header.module.scss';
import logo from '../../../assets/logo.svg';
import Toggle from '../Toggle/Toggle.tsx';
import useResize from '../../../hooks/useResize.ts';
import BtnStart from '../BtnStart/BtnStart.tsx';
import { useScrollDirection } from '../../../hooks/useScrollDirection.tsx';

const Header: React.FC = () => {
  const size = useResize();
  const direction = useScrollDirection();

  return (
    <header
      className={`${styles.header} ${
        size.width < 1440 && direction === 'down' ? styles.header_hide : styles.header_show
      }`}
    >
      <img className={styles.header__logo} src={logo} alt="Логотип сайта" />
      {size.width < 1440 ? <Toggle /> : <BtnStart />}
    </header>
  );
};

export default Header;
