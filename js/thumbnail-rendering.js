import {storageMoreDetails} from './create-comments.js';

const pictureTemplate = document.querySelector('#picture').content;
const dataToFill = storageMoreDetails();
const pictureListFragment = document.createDocumentFragment();
const pictureListElement = document.querySelector('#picture');

dataToFill.forEach(({url, likes, comment}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = `${url}.jpg`;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comment.message;
  pictureListFragment.append(pictureElement);
});

pictureListElement.append(pictureListFragment);
