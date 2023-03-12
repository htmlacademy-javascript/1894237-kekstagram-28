const DESCRIPTIONS = [
  'Вспоминая лето',
  'Бой быков',
  'Мы с друзьями',
  'Утро в саду',
  'Вот так бывает, когда забыл закрыть балкон',
  'Просто фото',
  'На работе бывает вот так',
  'Моя любовь',
  'Это памятник вождю всех времен и народов',
  'Тачка на прокачку',
  'Байкал',
  'Виды города',
  'Бульон на говядине',
  'Снежное утро',
  'Мой любимый город',
  'Когда я не понял, как так',
  'Цирк',
  'Вспоминая прошлое',
  'Зашел домой блин',
  'Кто это я не помню',
  'Реальность',
  'Звездное небо',
  'Моя бывшая школа',
  'Тратуар',
  'Дерево'
];

const NAMES = [
  'Артём',
  'Иван',
  'Екатерина',
  'Сергей',
  'Игорь',
  'Владимир',
];

const COMMENTARIES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

let currentValueId = 0;
let currentValueUrl = 0;


const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createCommentaries = () => ({
  id: getRandomInteger(1,300),
  avatar: `img/avatar/${ getRandomInteger (1, 6)}.svg`,
  message: COMMENTARIES[getRandomInteger(0, COMMENTARIES.length - 1)] ,
  name: NAMES[getRandomInteger(0, NAMES.length - 1)],
});

function createId() {
  currentValueId += 1;
  return currentValueId;
}

function createUrl() {
  currentValueUrl += 1;
  return currentValueUrl;
}

const createMoreDetails = () => ({
  id: createId(),
  url: `photos/${ createUrl()}`,
  description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
  likes: getRandomInteger(15,200),
  comment: createCommentaries(),
});

const storageMoreDetails = Array.from({length: 25}, createMoreDetails);
