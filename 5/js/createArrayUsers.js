
// Функция получения рандомного числа
import {getRandomPositiveInteger} from './getRandomPositiveInteger.js';
// Массив данных пользователей
import {USERS_NAMES, USERS_COMMENTS, USERS_DESCRIPTIONS} from './data-createArrayUsers.js';

// Функция по созданию массива с пользователями и данными
const createArrayUsers = (generateValue) => {
  const createDataUsers = [];

  for (let i = 0; i <= generateValue - 1; i++) {
    createDataUsers[i] = {};
    createDataUsers[i].id = i + 1;
    createDataUsers[i].url = `photos/${  i  }.jpg`;
    createDataUsers[i].likes = getRandomPositiveInteger(15, 200);
    createDataUsers[i].description = USERS_DESCRIPTIONS[getRandomPositiveInteger(0, USERS_DESCRIPTIONS.length - 1)];
    createDataUsers[i].avatar = `img/avatar-${  getRandomPositiveInteger(1, 6)  }.svg`;
    createDataUsers[i].comment = USERS_COMMENTS[getRandomPositiveInteger(0, USERS_COMMENTS.length - 1)];
    createDataUsers[i].name = USERS_NAMES[getRandomPositiveInteger(0, USERS_NAMES.length - 1)];
  }

  return createDataUsers;
};

export {createArrayUsers};