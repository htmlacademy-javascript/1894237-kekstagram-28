import {getRandomInteger} from './utils.js';
import {createId} from './utils.js';
import {createUrl} from './utils.js';
import {DESCRIPTIONS} from './data.js';
import {NAMES} from './data.js';
import {COMMENTARIES} from './data.js';

const COMMENT_COUNT = 20;

const getRandomArrayElement = (array) =>
  array[getRandomInteger(0, array.length - 1)];

const createMessage = () =>
  Array.from({ length: getRandomInteger(1, 2)}, () =>
    getRandomArrayElement(COMMENTARIES)
  ).join(' ');

const createCommentaries = () => ({
  id: getRandomInteger(1,300),
  avatar: `img/avatar-${ getRandomInteger (1, 6)}.svg`,
  message: createMessage(),
  name: NAMES[getRandomInteger(0, NAMES.length - 1)],
});

const createMoreDetails = () => ({
  id: createId(),
  url: `photos/${ createUrl()}`,
  description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
  likes: getRandomInteger(15,200),
  comment: Array.from(
    { length: getRandomInteger(0, COMMENT_COUNT) },
    createCommentaries
  ),
});
/* eslint-disable */
const storageMoreDetails = () => Array.from({length: 25}, createMoreDetails);
/* eslint-enable */

export {storageMoreDetails};
