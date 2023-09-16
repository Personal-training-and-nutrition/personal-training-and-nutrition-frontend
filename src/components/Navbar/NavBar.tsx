import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { navBarSpecialistItemList, navBarUserItemList } from '../../utils/NabBarParams.ts';

type NavBarParams = { statusSpec: boolean };

const NavBar: React.FC<NavBarParams> = ({ statusSpec }) => {
  const listIcons = statusSpec ? navBarSpecialistItemList : navBarUserItemList;

  const activeClassName = ({ isActive }: { isActive: boolean }) => {
    if (isActive) {
      return `${styles.navbar__navlink} ${styles.navbar__navlink_active}`;
    }
    return styles.navbar__navlink;
  };

  return (
    <nav className={styles.navbar}>
      {listIcons.map((item, index) => (
        <NavLink className={activeClassName} key={index} to={`/${item.link}`}>
          {({ isActive }) => (
            <div className={styles.navbar__container}>
              <img
                className={isActive ? `${styles.navbar__image} ${styles.navbar__image_active}` : styles.navbar__image}
                src={item.img}
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
