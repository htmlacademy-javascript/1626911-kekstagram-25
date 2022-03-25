import {createDataUsers} from './createArrayUsers.js';

const commentsList = document.querySelector('.social__comments');
// Поиск в template блок comments
const commentsItem = document.querySelector('#comments').content
  .querySelector('.social__comment');

const addComment = function (indexComment) {
  // Делаем полный клон блока
  const taskComments = commentsItem.cloneNode(true);

  // Задаем src для картинки
  const taskCommentsImg = taskComments.querySelector('img');
  taskCommentsImg.src = createDataUsers[indexComment].avatar;
  taskCommentsImg.alt = createDataUsers[indexComment].name;

  const taskCommentsText = taskComments.querySelector('p');
  taskCommentsText.textContent = createDataUsers[indexComment].comment;

  // Пушим на страницу
  commentsList.appendChild(taskComments);
};

export {addComment};