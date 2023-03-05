const DESCRIPTION = [
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
  'Дерево',
];

const NAME = [
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

previousValuesId = [];
previousValuesUrl = [];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const creatingCommentaries = () => ({
  id: getRandomInteger(1,300),
  avatar: `img/avatar/${ getRandomInteger (1, 6)}.svg`,
  message: COMMENTARIES[getRandomInteger(0, COMMENTARIES.length - 1)] ,
  name: NAME[getRandomInteger(0, NAME.length - 1)],
});

function createRandomIdFromRangeGenerator (min, max) {
  let currentValue = getRandomInteger(min, max);

  while (previousValuesId.includes(currentValue)) {
    currentValue = getRandomInteger(min, max);
  }
  previousValuesId.push(currentValue);
  return currentValue;
}

function createRandomUrlFromRangeGenerator (min, max) {
  let currentValue = getRandomInteger(min, max);

  while (previousValuesUrl.includes(currentValue)) {
    currentValue = getRandomInteger(min, max);
  }
  previousValuesUrl.push(currentValue);
  return currentValue;
}

const creatingMoreDetails = () => ({
  id: createRandomIdFromRangeGenerator(1, 25),
  url: `photos/${ createRandomUrlFromRangeGenerator (1, 25)}`,
  description: DESCRIPTION[getRandomInteger(0, DESCRIPTION.length - 1)],
  likes: getRandomInteger(15,200),
  comment: creatingCommentaries(),
});

const storageMoreDetails = Array.from({length: 25}, creatingMoreDetails);
