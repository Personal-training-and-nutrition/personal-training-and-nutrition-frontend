import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';
import React from 'react';
import recordsNotActiveIcon from '../../assets/images/navbar/notActive/account-not-active-icon.svg';
import clientsNotActiveIcon from '../../assets/images/navbar/notActive/clients-not-active-icon.svg';
import messagesNotActiveIcon from '../../assets/images/navbar/notActive/messages-not-active-icon.svg';
import profileNotActiveIcon from '../../assets/images/navbar/notActive/profile-not-active-icon.svg';
import recordsActiveIcon from '../../assets/images/navbar/active/account-active-icon.svg';
import clientsActiveIcon from '../../assets/images/navbar/active/clients-active-icon.svg';
import messagesActiveIcon from '../../assets/images/navbar/active/messages-active-icon.svg';
import profileActiveIcon from '../../assets/images/navbar/active/profile-active-icon.svg';

type navBarItemListType = {
  link: string;
  imgNotActive: string;
  imgActive: string;
  alt: string;
  textLink: string;
};

const navBarItemList: navBarItemListType[] = [
  {
    link: 'records',
    imgNotActive: recordsNotActiveIcon,
    imgActive: recordsActiveIcon,
    alt: 'Иконка кнопки "Записи"',
    textLink: 'Записи',
  },
  {
    link: 'clients',
    imgNotActive: clientsNotActiveIcon,
    imgActive: clientsActiveIcon,
    alt: 'Иконка кнопки "Клиенты"',
    textLink: 'Клиенты',
  },
  {
    link: 'messages',
    imgNotActive: messagesNotActiveIcon,
    imgActive: messagesActiveIcon,
    alt: 'Иконка кнопки "Сообщения"',
    textLink: 'Сообщения',
  },
  {
    link: 'profile',
    imgNotActive: profileNotActiveIcon,
    imgActive: profileActiveIcon,
    alt: 'Иконка кнопки "Профиль"',
    textLink: 'Профиль',
  },
];

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
