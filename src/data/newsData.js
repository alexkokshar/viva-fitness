import mainPic2022 from '../assets/news/1.jpg';
import post2022_1 from '../assets/news/2.jpg';

import mainPic2021 from '../assets/news/3.jpg';
import post2021_1 from '../assets/news/4.jpg';
import post2021_2 from '../assets/news/5.jpg';
import post2021_3 from '../assets/news/6.jpg';

export const news2022 = {
  mainPost: {
    pathPic: mainPic2022,
    descr: 'Мужчина рисует мелом на стене',
    date: '4 апреля 2022',
    datetime: '2022-04-04',
    name: 'VIVA ВАКАНСИИ',
    to: '/posts',
  },
  posts: [
    {
      id: 1,
      pathPic: post2022_1,
      descr: 'Зал для фитнеса с надувными мячами',
      date: '28 февраля 2022',
      datetime: '2022-02-28',
      name: 'Аренда залов в фитнес-клубе VIVA',
      to: '/posts/2',
    },
  ],
};

export const news2021 = {
  mainPost: {
    pathPic: mainPic2021,
    descr: 'Подарочный сертификат в руке',
    date: '31 декабря 2021',
    datetime: '2021-12-31',
    name: 'Подарочные сертификаты на любые услуги клуба',
    to: '/posts/3',
  },
  posts: [
    {
      id: 1,
      pathPic: post2021_1,
      descr: 'Мужчина жмет штангу, а тренер страхует позади',
      date: '30 декабря 2021',
      datetime: '2021-12-30',
      name: 'Что такое клип-карта и как ее получить?',
      to: '/posts/4',
    },
    {
      id: 2,
      pathPic: post2021_2,
      descr: 'Беговые дорожки на стадионе',
      date: '15 марта 2021',
      datetime: '2021-03-15',
      name: 'Скидки для отличников ГТО',
      to: '/posts/5',
    },
    {
      id: 3,
      pathPic: post2021_3,
      descr: 'Тренировка каратэ для детей в зале',
      date: '8 февраля 2021',
      datetime: '2021-02-08',
      name: 'Каратэ для детей в фитнес-клубе VIVA!',
      to: '/posts/6',
    },
  ],
};
