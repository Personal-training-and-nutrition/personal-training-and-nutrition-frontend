import React from 'react';
import styles from '../../scss/_sidebar.module.scss';
import usersIcon from '../../assets/images/sidebar/users-icon.svg';
import nutritionIcon from '../../assets/images/sidebar/nutrition-icon.svg';
import trainersIcon from '../../assets/images/sidebar/trainers-icon.svg'
import {NavLink} from "react-router-dom";

export type linkParamsListType = {
  link: string;
  img: string;
  alt: string;
  textLink: string;
};

const linkParamsList: linkParamsListType[] = [
  {
    link: '',
    img: usersIcon,
    alt: 'Иконка кнопки "Пользователям"',
    textLink: 'Пользователям',
  },
  {
    link: 'nutrition',
    img: nutritionIcon,
    alt: 'Иконка кнопки "Нутрициологам и диетологам"',
    textLink: 'Нутрициологам и диетологам',
  },
  {
    link: 'trainer',
    img: trainersIcon,
    alt: 'Иконка кнопки "Фитнесс тренерам"',
    textLink: 'Фитнесс тренерам',
  },
];

const SidebarLinks: React.FC = () => {
  const activeClassName = ({isActive}: { isActive: boolean }) => {
    if (isActive) {
      return `${styles.sidebar__link} ${styles.sidebar__link_active}`;
    }
    return styles.sidebar__link;
  };

  return (
    <div className={styles.sidebar__links}>
      {linkParamsList.map((item, index) => (
        <NavLink key={index} className={activeClassName} to={`/${item.link}`}>
          <img src={item.img} alt={item.alt}/>
          {item.textLink}
        </NavLink>
      ))}
    </div>
  );
};

export default SidebarLinks;
