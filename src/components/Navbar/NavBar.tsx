import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { navBarItemList } from '../../utils/NabBarParams.ts';

const NavBar: React.FC = () => {
  const activeClassName = ({ isActive }: { isActive: boolean }) => {
    if (isActive) {
      return `${styles.navbar__navlink} ${styles.navbar__navlink_active}`;
    }
    return styles.navbar__navlink;
  };

  return (
    <nav className={styles.navbar}>
      {navBarItemList.map((item, index) => (
        <NavLink className={activeClassName} key={index} to={`/${item.link}`}>
          {({ isActive }) => (
            <div className={styles.navbar__container}>
              <img
                className={styles.navbar__image}
                src={isActive ? item.imgActive : item.imgNotActive}
                alt={item.alt}
              />
              {item.textLink}
            </div>
          )}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavBar;
