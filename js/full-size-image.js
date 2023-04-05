import { dataStores } from './thumbnail-rendering.js';

const bigPicture = document.querySelector('.big-picture');
const pictureListElement = document.querySelector('.pictures');
const commentListElement = document.querySelector('.social__comments');
const pictureTemplate = document.querySelector('.social__comment');
const pictureListFragment = document.createDocumentFragment();
const commentsCount = document.querySelector('.social__comment-count');
const downloadMoreButton = document.querySelector('.comments-loader');
const body = document.querySelector('body');
const buttonCancel = document.querySelector('.big-picture__cancel');

const onFilterChange = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
};

buttonCancel.addEventListener('click', onFilterChange);

document.addEventListener('keydown', (esc) => {
  if (esc.code === 'Escape') {
    onFilterChange();
  }
});

const renderComments = (comments) => {
  comments.forEach(({avatar, name, message}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.social__picture').src = `./${avatar}`;
    pictureElement.querySelector('.social__picture').alt = name;
    pictureElement.querySelector('.social__text').textContent = message;
    pictureListFragment.append(pictureElement);
  });
  commentListElement.append(pictureListFragment);
  return pictureListElement;
};

const showFullSizePicture = () => {
  bigPicture.classList.remove('hidden');
  commentsCount.classList.add('hidden');
  downloadMoreButton.classList.add('hidden');
  body.classList.add('modal-open');
};

const renderFullSizePicture = (picture) => {
  bigPicture.querySelector('.big-picture__img img').src = `./${picture.url}.jpg`;
  bigPicture.querySelector('.social__caption').textContent = picture.description;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;
  bigPicture.querySelector('.comments-count').textContent = picture.comment.length;
  renderComments(picture.comment);
  showFullSizePicture();
};

const renderPictures = () => {
  pictureListElement.addEventListener('click', (evt) => {
    const picture = evt.target.closest('[data-picture-element-id]');
    if (!picture) {
      return;
    }
    const FullSizePicture = dataStores.find(
      (item) => item.id === +picture.dataset.pictureElementId
    );
    renderFullSizePicture(FullSizePicture);
  });
};

export {renderPictures};
