import recordsNotActiveIcon from '../assets/images/navbar/account-not-active-icon.svg';
import clientsNotActiveIcon from '../assets/images/navbar/clients-not-active-icon.svg';
import dietsNotActiveIcon from '../assets/images/navbar/food-not-active-icon.svg';
import messagesNotActiveIcon from '../assets/images/navbar/messages-not-active-icon.svg';
import profileNotActiveIcon from '../assets/images/navbar/profile-not-active-icon.svg';
import trainingNotActiveIcon from '../assets/images/navbar/sport-not-active-icon.svg';
import {
  PATH_CLIENTS,
  PATH_MEAL_ALL_PLANS,
  PATH_PROFILE_CLIENT,
  PATH_PROFILE_SPEC,
  PATH_SPECIALIST_PAGE,
  PATH_WORKOUT_ALL_PLANS,
} from './constants';

export type navBarItemListType = {
  link: string;
  img: string;
  alt: string;
  textLink: string;
};

export const navBarUserItemList: navBarItemListType[] = [
  {
    link: PATH_SPECIALIST_PAGE,
    img: recordsNotActiveIcon,
    alt: 'Иконка кнопки "Записи"',
    textLink: 'Специалист ',
  },
  {
    link: PATH_CLIENTS,
    img: clientsNotActiveIcon,
    alt: 'Иконка кнопки "Клиенты"',
    textLink: 'Клиенты',
  },
  {
    link: '/message',
    img: messagesNotActiveIcon,
    alt: 'Иконка кнопки "Сообщения"',
    textLink: 'Сообщения',
  },
  {
    link: PATH_PROFILE_SPEC,
    img: profileNotActiveIcon,
    alt: 'Иконка кнопки "Профиль"',
    textLink: 'Профиль',
  },
];

export const navBarSpecialistItemList: navBarItemListType[] = [
  {
    link: PATH_MEAL_ALL_PLANS,
    img: dietsNotActiveIcon,
    alt: 'Иконка кнопки "Питание"',
    textLink: 'Питание',
  },
  {
    link: PATH_WORKOUT_ALL_PLANS,
    img: trainingNotActiveIcon,
    alt: 'Иконка кнопки "Тренировки"',
    textLink: 'Тренировки',
  },
  {
    link: '/',
    img: messagesNotActiveIcon,
    alt: 'Иконка кнопки "Сообщения"',
    textLink: 'Сообщения',
  },
  {
    link: PATH_PROFILE_CLIENT,
    img: profileNotActiveIcon,
    alt: 'Иконка кнопки "Профиль"',
    textLink: 'Профиль',
  },
];
