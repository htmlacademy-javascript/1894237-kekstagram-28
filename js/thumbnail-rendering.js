import {storageMoreDetails} from './create-comments.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const dataStores = storageMoreDetails();
const pictureListFragment = document.createDocumentFragment();
const pictureListElement = document.querySelector('.pictures');

const renderPicture = () => {
  dataStores.forEach(({id, url, likes, comment}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = `./${url}.jpg`;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comment.message;
    pictureElement.dataset.pictureElementId = id;
    pictureListFragment.append(pictureElement);
  });
  pictureListElement.append(pictureListFragment);
  return pictureListElement;
};

export {renderPicture};
export {dataStores};
