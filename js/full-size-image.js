import { dataStores } from './thumbnail-rendering.js';

const bigPicture = document.querySelector('.big-picture');
const pictureListElement = document.querySelector('.pictures');
const commentListElement = document.querySelector('.social__comments');
const pictureTemplate = document.querySelector('.social__comment');
const downloadMoreButton = document.querySelector('.comments-loader');
const body = document.querySelector('body');
const buttonCancel = document.querySelector('.big-picture__cancel');
const COMMENTS_PER_PORTION = 5;
const commentsLoader = document.querySelector('.comments-loader');
const socialCommentsCount = document.querySelector('.social__comment-count');

let numberOfMessagesShown = 0;
let allMessage = [];

const renderComments = (comment) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.social__picture').src = comment.avatar;
  pictureElement.querySelector('.social__picture').alt = comment.name;
  pictureElement.querySelector('.social__text').textContent = comment.message;
  return pictureElement;
};

const showMessages = (comments) => {

  numberOfMessagesShown += COMMENTS_PER_PORTION;
  if (numberOfMessagesShown >= comments.length) {
    commentsLoader.classList.add('hidden');
    numberOfMessagesShown = comments.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < numberOfMessagesShown; i++) {
    const commentElement = renderComments(comments[i]);
    fragment.append(commentElement);
  }
  commentListElement.innerHTML = '';
  commentListElement.append(fragment);
  socialCommentsCount.innerHTML = `${numberOfMessagesShown } из <span class="comments-count">${ comments.length }</span> комментариев</div>`;
};

downloadMoreButton.addEventListener('click', () => {
  showMessages(allMessage);
});

const onFilterChange = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  numberOfMessagesShown = 0;
};

buttonCancel.addEventListener('click', onFilterChange);

document.addEventListener('keydown', (esc) => {
  if (esc.code === 'Escape') {
    onFilterChange();
  }
});

const showFullSizePicture = () => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
};

const renderFullSizePicture = (picture) => {
  bigPicture.querySelector('.big-picture__img img').src = `./${picture.url}.jpg`;
  bigPicture.querySelector('.social__caption').textContent = picture.description;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;
  bigPicture.querySelector('.comments-count').textContent = picture.comment.length;
  showMessages(picture.comment);
  showFullSizePicture();
  allMessage = picture.comment;
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
