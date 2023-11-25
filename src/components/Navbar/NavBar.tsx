import styles from './NavBar.module.scss';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import React from 'react';
import { navBarSpecialistItemList, navBarUserItemList } from '../../utils/NabBarParams';
import logo from '../../assets/logo.svg';
import exitIcon from '../../assets/images/icons/exit-icon.svg';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { logout } from '../../redux/slices/userSlice';

const NavBar: React.FC = () => {
  const isSpecialist = useAppSelector((store) => store.user.isSpecialist);
  const listIcons = isSpecialist ? navBarUserItemList : navBarSpecialistItemList;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout =  () => {
    localStorage.removeItem('accessToken')
    dispatch(logout())
    navigate('/')
  }

  const activeClassName = ({ isActive }: { isActive: boolean }) => {
    if (isActive) {
      return `${styles.navbar__navlink} ${styles.navbar__navlink_active}`;
    }
    return styles.navbar__navlink;
  };

  return (
    <nav className={styles.navbar}>
      <Link to='/'><img className={styles.navbar__logo} src={logo} alt="logo" /> </Link>

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

      <button onClick={() => handleLogout()} className={styles.navbar__exitBtn}>
        <span>Выйти</span> <img src={exitIcon} alt="exit icon" />
      </button>
    </nav>
  );
};

export default NavBar;
