import recordsNotActiveIcon from '../assets/images/navbar/notActive/account-not-active-icon.svg';
import recordsActiveIcon from '../assets/images/navbar/active/account-active-icon.svg';
import clientsNotActiveIcon from '../assets/images/navbar/notActive/clients-not-active-icon.svg';
import clientsActiveIcon from '../assets/images/navbar/active/clients-active-icon.svg';
import messagesNotActiveIcon from '../assets/images/navbar/notActive/messages-not-active-icon.svg';
import messagesActiveIcon from '../assets/images/navbar/active/messages-active-icon.svg';
import profileNotActiveIcon from '../assets/images/navbar/notActive/profile-not-active-icon.svg';
import profileActiveIcon from '../assets/images/navbar/active/profile-active-icon.svg';

type navBarItemListType = {
  link: string;
  imgNotActive: string;
  imgActive: string;
  alt: string;
  textLink: string;
};

export const navBarItemList: navBarItemListType[] = [
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
