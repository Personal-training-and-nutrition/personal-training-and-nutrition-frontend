import monday from '../assets/images/dayblock/training/Image.svg';
import tuesday from '../assets/images/dayblock/training/Image-1.svg';
import wednes from '../assets/images/dayblock/training/Image-2.svg';
import thursday from '../assets/images/dayblock/training/Image-3.svg';
import friday from '../assets/images/dayblock/training/Image-4.svg';
import saturday from '../assets/images/dayblock/training/Image-5.svg';
import sunday from '../assets/images/dayblock/training/Image-6.svg';

export type DayBlockType = {
  day: string;
  nameInput: string;
  placeholder: string;
  image: string;
  alt: string;
  tip: string;
  description: string;
}[];

export const trainingData: DayBlockType = [
  {
    day: 'Понедельник',
    nameInput: 'monday',
    placeholder: 'Напишите план на этот день',
    image: monday,
    alt: 'Картинка',
    tip: 'Добавьте тренировку на этот день',
    description: 'План тренировки',
  },
  {
    day: 'Вторник',
    nameInput: 'tuesday',
    placeholder: 'Напишите план на этот день',
    image: tuesday,
    alt: 'Картинка',
    tip: 'Добавьте тренировку на этот день',
    description: 'План тренировки',
  },
  {
    day: 'Среда',
    nameInput: 'wednesday',
    placeholder: 'Напишите план на этот день',
    image: wednes,
    alt: 'Картинка',
    tip: 'Добавьте тренировку на этот день',
    description: 'План тренировки',
  },
  {
    day: 'Четверг',
    nameInput: 'thursday',
    placeholder: 'Напишите план на этот день',
    image: thursday,
    alt: 'Картинка',
    tip: 'Добавьте тренировку на этот день',
    description: 'План тренировки',
  },
  {
    day: 'Пятница',
    nameInput: 'friday',
    placeholder: 'Напишите план на этот день',
    image: friday,
    alt: 'Картинка',
    tip: 'Добавьте тренировку на этот день',
    description: 'План тренировки',
  },
  {
    day: 'Суббота',
    nameInput: 'saturday',
    placeholder: 'Напишите план на этот день',
    image: saturday,
    alt: 'Картинка',
    tip: 'Добавьте тренировку на этот день',
    description: 'План тренировки',
  },
  {
    day: 'Воскресенье',
    nameInput: 'sunday',
    placeholder: 'Напишите план на этот день',
    image: sunday,
    alt: 'Картинка',
    tip: 'Добавьте тренировку на этот день',
    description: 'План тренировки',
  },
];

export const mealData: DayBlockType = [
  {
    day: 'Понедельник',
    nameInput: 'monday',
    placeholder: 'Напишите меню',
    image: monday,
    alt: 'Картинка',
    tip: 'Создайте меню на этот день',
    description: 'Меню на день',
  },
  {
    day: 'Вторник',
    nameInput: 'tuesday',
    placeholder: 'Напишите меню',
    image: tuesday,
    alt: 'Картинка',
    tip: 'Создайте меню на этот день',
    description: 'Меню на день',
  },
  {
    day: 'Среда',
    nameInput: 'wednesday',
    placeholder: 'Напишите меню',
    image: wednes,
    alt: 'Картинка',
    tip: 'Создайте меню на этот день',
    description: 'Меню на день',
  },
  {
    day: 'Четверг',
    nameInput: 'thursday',
    placeholder: 'Напишите меню',
    image: thursday,
    alt: 'Картинка',
    tip: 'Создайте меню на этот день',
    description: 'Меню на день',
  },
  {
    day: 'Пятница',
    nameInput: 'friday',
    placeholder: 'Напишите меню',
    image: friday,
    alt: 'Картинка',
    tip: 'Создайте меню на этот день',
    description: 'Меню на день',
  },
  {
    day: 'Суббота',
    nameInput: 'saturday',
    placeholder: 'Напишите меню',
    image: saturday,
    alt: 'Картинка',
    tip: 'Создайте меню на этот день',
    description: 'Меню на день',
  },
  {
    day: 'Воскресенье',
    nameInput: 'sunday',
    placeholder: 'Напишите меню',
    image: sunday,
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

