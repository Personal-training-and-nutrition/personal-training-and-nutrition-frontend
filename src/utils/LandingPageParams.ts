import imageZeroUser from '../assets/images/landingPage/mobile/spec/image-0.png';
import imageOneUser from '../assets/images/landingPage/mobile/spec/image-1.png';
import imageTwoUser from '../assets/images/landingPage/mobile/spec/image-2.png';
import imageZeroSpec from '../assets/images/landingPage/mobile/users/image-0.png';
import imageOneSpec from '../assets/images/landingPage/mobile/users/image-1.png';
import imageTwoSpec from '../assets/images/landingPage/mobile/users/image-2.png';

import imageZeroUserDesktop from '../assets/images/landingPage/desktop/users/image-0.png';
import imageOneUserDesktop from '../assets/images/landingPage/desktop/users/image-1.png';
import imageTwoUserDesktop from '../assets/images/landingPage/desktop/users/image-2.png';
import imageZeroSpecDesktop from '../assets/images/landingPage/desktop/spec/image-0.png';
import imageOneSpecDesktop from '../assets/images/landingPage/desktop/spec/image-1.png';
import imageTwoSpecDesktop from '../assets/images/landingPage/desktop/spec/image-2.png';

export const landingPageSpeciatistParams = [
  {
    title: 'Храните историю о клиентах',
    subtitle: 'Вся информация в одном сервисе. Быстрый доступ к контактам',
    img: imageZeroUser,
    isRight: false,
  },
  {
    title: 'Отслеживайте прогресс клиента',
    subtitle: 'Наглядная информация о достижениях в питании и тренировках',
    img: imageOneUser,
    isRight: true,
  },
  {
    title: 'Отправляйте рекомендации',
    subtitle: 'Общайтесь с клиентом, корректируйте планы питания и тренировок онлайн',
    img: imageTwoUser,
    isRight: false,
  },
];

export const landingPageUsersParams = [
  {
    title: 'Сохраняйте план тренировок',
    subtitle: 'Получайте рекомендации и занимайтесь с нашими лучшими тренерами',
    img: imageZeroSpec,
    isRight: false,
  },
  {
    title: 'Сохраняйте рекомендации по питанию',
    subtitle: 'Корректируйте меню для достижения отличного результата',
    img: imageOneSpec,
    isRight: true,
  },
  {
    title: 'Общайтесь online со специалистами',
    subtitle: 'Всегда готовы поддержать вас на пути к здоровью',
    img: imageTwoSpec,
    isRight: false,
  },
];

export const landingPageUsersImagesFromDesktop = [imageZeroUserDesktop, imageOneUserDesktop, imageTwoUserDesktop];
export const landingPageSpecImagesFromDesktop = [imageZeroSpecDesktop, imageOneSpecDesktop, imageTwoSpecDesktop];
