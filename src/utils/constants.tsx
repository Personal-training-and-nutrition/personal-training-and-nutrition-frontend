import train1 from '../assets/images/dayweekTraining/training-1-img.png';
import train2 from '../assets/images/dayweekTraining/training-2-img.png';
import train3 from '../assets/images/dayweekTraining/training-3-img.png';
import train4 from '../assets/images/dayweekTraining/training-4-img.png';
import train5 from '../assets/images/dayweekTraining/training-5-img.png';
import train6 from '../assets/images/dayweekTraining/training-6-img.png';
import train7 from '../assets/images/dayweekTraining/training-7-img.png';

import meal1 from '../assets/images/dayweekMeal/meal-1-img.png';
import meal2 from '../assets/images/dayweekMeal/meal-2-img.png';
import meal3 from '../assets/images/dayweekMeal/meal-3-img.png';
import meal4 from '../assets/images/dayweekMeal/meal-4-img.png';
import meal5 from '../assets/images/dayweekMeal/meal-5-img.png';
import meal6 from '../assets/images/dayweekMeal/meal-6-img.png';
import meal7 from '../assets/images/dayweekMeal/meal-7-img.png';

export const REGEX_USER_NAME = /^[A-Za-zА-Яа-яЁё/s /-]+$/;

export type DayBlockType = {
  day: string;
  weekday?: number | string;
  nameInput: string;
  placeholder: string;
  image: string;
  alt: string;
  tip: string;
  description: string;
}[];

export const navBarHideCases = [
  '/',
  '/login',
  '/register',
  // '/password-recovery',
  // '/password-recovery/form',
  // '/password-recovery/success',
  '/meal-plan/unauth',
  '/workout-plan/unauth',
  '/reset-password/',
];

export const trainingData: DayBlockType = [
  {
    day: 'Понедельник',
    nameInput: 'monday',
    placeholder: 'Напишите план на этот день',
    image: train1,
    alt: 'Картинка',
    tip: 'Добавьте тренировку на этот день',
    description: 'План тренировки',
  },
  {
    day: 'Вторник',
    nameInput: 'tuesday',
    placeholder: 'Напишите план на этот день',
    image: train2,
    alt: 'Картинка',
    tip: 'Добавьте тренировку на этот день',
    description: 'План тренировки',
  },
  {
    day: 'Среда',
    nameInput: 'wednesday',
    placeholder: 'Напишите план на этот день',
    image: train3,
    alt: 'Картинка',
    tip: 'Добавьте тренировку на этот день',
    description: 'План тренировки',
  },
  {
    day: 'Четверг',
    nameInput: 'thursday',
    placeholder: 'Напишите план на этот день',
    image: train4,
    alt: 'Картинка',
    tip: 'Добавьте тренировку на этот день',
    description: 'План тренировки',
  },
  {
    day: 'Пятница',
    nameInput: 'friday',
    placeholder: 'Напишите план на этот день',
    image: train5,
    alt: 'Картинка',
    tip: 'Добавьте тренировку на этот день',
    description: 'План тренировки',
  },
  {
    day: 'Суббота',
    nameInput: 'saturday',
    placeholder: 'Напишите план на этот день',
    image: train6,
    alt: 'Картинка',
    tip: 'Добавьте тренировку на этот день',
    description: 'План тренировки',
  },
  {
    day: 'Воскресенье',
    nameInput: 'sunday',
    placeholder: 'Напишите план на этот день',
    image: train7,
    alt: 'Картинка',
    tip: 'Добавьте тренировку на этот день',
    description: 'План тренировки',
  },
];

export const mealData: DayBlockType = [
  {
    day: 'Понедельник',
    nameInput: 'monday',
    weekday: 1,
    placeholder: 'Напишите меню',
    image: meal1,
    alt: 'Картинка',
    tip: 'Создайте меню на этот день',
    description: 'Меню на день',
  },
  {
    day: 'Вторник',
    nameInput: 'tuesday',
    weekday: 2,
    placeholder: 'Напишите меню',
    image: meal2,
    alt: 'Картинка',
    tip: 'Создайте меню на этот день',
    description: 'Меню на день',
  },
  {
    day: 'Среда',
    nameInput: 'wednesday',
    weekday: 3,
    placeholder: 'Напишите меню',
    image: meal3,
    alt: 'Картинка',
    tip: 'Создайте меню на этот день',
    description: 'Меню на день',
  },
  {
    day: 'Четверг',
    nameInput: 'thursday',
    weekday: 4,
    placeholder: 'Напишите меню',
    image: meal4,
    alt: 'Картинка',
    tip: 'Создайте меню на этот день',
    description: 'Меню на день',
  },
  {
    day: 'Пятница',
    nameInput: 'friday',
    weekday: 5,
    placeholder: 'Напишите меню',
    image: meal5,
    alt: 'Картинка',
    tip: 'Создайте меню на этот день',
    description: 'Меню на день',
  },
  {
    day: 'Суббота',
    nameInput: 'saturday',
    weekday: 6,
    placeholder: 'Напишите меню',
    image: meal6,
    alt: 'Картинка',
    tip: 'Создайте меню на этот день',
    description: 'Меню на день',
  },
  {
    day: 'Воскресенье',
    nameInput: 'sunday',
    weekday: 7,
    placeholder: 'Напишите меню',
    image: meal7,
    alt: 'Картинка',
    tip: 'Создайте меню на этот день',
    description: 'Меню на день',
  },
];
type NoteType = {
  note: string;
  name: string;
}[];
export const notes: NoteType = [
  { note: 'Заболевания', name: 'ill' },
  { note: 'Опыт диет', name: 'diet' },
  { note: 'Опыт тренировок', name: 'training' },
  { note: 'Вредные привычки', name: 'badhabit' },
  { note: 'Предпочтения в еде', name: 'foodprefer' },
];

export const tempWorkoutPlan = [
  {
    id: '0',
    specialist: '<integer>',
    user: '<integer>',
    name: 'Входим в ритм!',
    describe: '<string>',
    training: [
      {
        id: '123',
        weekday: '1',
        spec_comment:
          'Тренировка 45 мин. \n Упражнения\n 1. Разминка 5 мин.\n 2. Приседание 4 подхода по 12 раз, отдых между подходами 2 мин.\n 3. Отжимание 4 подхода по 12 раз, отдых между подходами 2 мин.',
        user_comment: 'Все зашло',
      },
      {
        id: '234',
        weekday: '3',
        spec_comment:
          'Тренировка 15 мин. \n Упражнения\n 1. Разминка 5 мин.\n 2. Приседание 4 подхода по 12 раз, отдых между подходами 2 мин.\n 3. Отжимание 4 подхода по 12 раз, отдых между подходами 2 мин.',
        user_comment: 'Все понравилось, проблем не было.',
      },
      {
        id: '345',
        weekday: '5',
        spec_comment:
          'Тренировка 5 мин. \n Упражнения\n 1. Разминка 5 мин.\n 2. Приседание 4 подхода по 50 раз, отдых между подходами 2 мин.\n 3. Отжимание 4 подхода по 12 раз, отдых между подходами 2 мин.',
        user_comment: 'Тяжело за 5 мин присесть 200 раз.',
      },
    ],
  },
];

export const tempMealPlan = [
  {
    id: '0',
    specialist: '<integer>',
    user: '<integer>',
    name: 'Минус 2кг (1 неделя)',
    describe: '<string>',
    training: [
      {
        id: '123',
        weekday: '1',
        spec_comment:
          'Завтрак \n 1. Овсянка 100гр \n 2. Горсть ягод \n 3. Чай с чайной ложкой сахара \n ‎\n Ужин \n 1. Филе минтая 200гр \n 2. Помидор средний \n 3. Вода с лимоном',
        user_comment: 'Сорвалась и съела милку в обед, пока слишком сложно',
      },
      {
        id: '234',
        weekday: '3',
        spec_comment:
          'Завтрак \n 1. Овсянка 100гр \n 2. Горсть ягод \n 3. Чай с чайной ложкой сахара \n ‎\n Ужин \n 1. Филе минтая 200гр \n 2. Помидор средний \n 3. Вода с лимоном',
        user_comment: '',
      },
      {
        id: '345',
        weekday: '5',
        spec_comment:
          'Завтрак \n 1. Овсянка 100гр \n 2. Горсть ягод \n 3. Чай с чайной ложкой сахара \n ‎\n Ужин \n 1. Филе минтая 200гр \n 2. Помидор средний \n 3. Вода с лимоном',
        user_comment: '',
      },
    ],
  },
];
