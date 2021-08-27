import './css/styles.css';
import PixabayApi from './js/apiService';
import cardsPicturesTpl from './templates/cardsPictures.hbs';
import * as basicLightbox from 'basiclightbox';

import { error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';

const refs = {
  container: document.querySelector('#gallery'),
  searchForm: document.querySelector('#search-form'),
  clearPageBtn: document.querySelector('#clear-page-btn'),
  loadMoreBtn: document.querySelector('#load-more-btn'),
};

const pixabayApi = new PixabayApi();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);
refs.clearPageBtn.addEventListener('click', onClearPage);
refs.container.addEventListener('click', onPicturesClick);


// function onSearch(e) {
//   e.preventDefault();
//   onClearPage();
//   if (e.currentTarget.elements.query.value === '') return;
//   pixabayApi.query = e.currentTarget.elements.query.value;
//   pixabayApi.resetPage();
//   e.currentTarget.elements.query.value = '';
//   pixabayApi.fetchPictures()
//     .then(renderGallery)
//     .catch(errResult);
// }

async function onSearch(e) {
  e.preventDefault();
  onClearPage();
  if (e.currentTarget.elements.query.value.trim() === '') return;
  pixabayApi.query = e.currentTarget.elements.query.value.trim();
  pixabayApi.resetPage();
  e.currentTarget.elements.query.value = '';
  
  try {
  const result = await pixabayApi.fetchPictures()
  renderGallery(result);
  } catch(error) {
  errResult(error);
  }
}

// function onLoadMore() {
//   pixabayApi.fetchPictures()
//     .then(renderGallery)
//     .then(scroll)
//     .catch(errResult);
// }

async function onLoadMore() {
  try {
    const result = await pixabayApi.fetchPictures();
    renderGallery(result);
    scroll(result);
  } catch (error) {
    errResult(error);
  }
}

function scroll() {
  refs.container.lastElementChild.scrollIntoView({ behavior: "smooth" });
}

function onClearPage() {
  refs.container.innerHTML = '';
}

function renderGallery(res) {
  if (res.total === 0) {
    const errNotify = error({
      text: "Matches not found. Please enter a more specific query",
      delay: 3000,
    });
  }
  const markup = cardsPicturesTpl(res.hits);
  refs.container.insertAdjacentHTML('beforeend', markup);
}

function errResult(error) {
  pixabayApi.resetPage();
  console.log('err', error);
  const errNotify = error({
    text: error,
    delay: 3000,
  });
}

function onPicturesClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') return;

  const box = basicLightbox.create(`
    <img src=${e.target.dataset.source}>
  `)
  box.show()
}