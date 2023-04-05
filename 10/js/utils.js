let currentValueId = 0;
let currentValueUrl = 0;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function createId() {
  currentValueId += 1;
  return currentValueId;
}

function createUrl() {
  currentValueUrl += 1;
  return currentValueUrl;
}

export {createId};
export {createUrl};
export {getRandomInteger};
