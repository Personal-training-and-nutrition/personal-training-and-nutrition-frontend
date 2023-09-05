import React from "react";
import styles from '../../scss/_sidebar.module.scss';
import logo from '../../assets/logo.svg'
import SidebarLinks from "./SidebarLinks.tsx";

const Sidebar: React.FC = () => {
  return (
    <nav className={styles.sidebar}>
      <img className={styles.sidebar__logo} src={logo} alt="Логотип сайта"/>
      <h1 className={styles.sidebar__title}>Лучшее решение для нутрициологов и диетологов </h1>
      <SidebarLinks/>
    </nav>
  );
}

export default Sidebar;
