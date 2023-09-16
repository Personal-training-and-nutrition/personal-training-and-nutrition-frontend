import recordsNotActiveIcon from '../assets/images/navbar/account-not-active-icon.svg';
import clientsNotActiveIcon from '../assets/images/navbar/clients-not-active-icon.svg';
import messagesNotActiveIcon from '../assets/images/navbar/messages-not-active-icon.svg';
import profileNotActiveIcon from '../assets/images/navbar/profile-not-active-icon.svg';
import dietsNotActiveIcon from '../assets/images/navbar/food-not-active-icon.svg';
import trainingNotActiveIcon from '../assets/images/navbar/sport-not-active-icon.svg';

export type navBarItemListType = {
  link: string;
  img: string;
  alt: string;
  textLink: string;
};

export const navBarUserItemList: navBarItemListType[] = [
  {
    link: 'planMeal',
    img: recordsNotActiveIcon,
    alt: 'Иконка кнопки "Записи"',
    textLink: 'Записи',
  },
  {
    link: 'client',
    img: clientsNotActiveIcon,
    alt: 'Иконка кнопки "Клиенты"',
    textLink: 'Клиенты',
  },
  {
    link: '',
    img: messagesNotActiveIcon,
    alt: 'Иконка кнопки "Сообщения"',
    textLink: 'Сообщения',
  },
  {
    link: 'spec',
    img: profileNotActiveIcon,
    alt: 'Иконка кнопки "Профиль"',
    textLink: 'Профиль',
  },
];

export const navBarSpecialistItemList: navBarItemListType[] = [
  {
    link: 'planMeal',
    img: dietsNotActiveIcon,
    alt: 'Иконка кнопки "Питание"',
    textLink: 'Питание',
  },
  {
    link: 'planTraining',
    img: trainingNotActiveIcon,
    alt: 'Иконка кнопки "Тренировки"',
    textLink: 'Тренировки',
  },
  {
    link: '',
    img: messagesNotActiveIcon,
    alt: 'Иконка кнопки "Сообщения"',
    textLink: 'Сообщения',
  },
  {
    link: 'spec',
    img: profileNotActiveIcon,
    alt: 'Иконка кнопки "Профиль"',
    textLink: 'Профиль',
  },
];
