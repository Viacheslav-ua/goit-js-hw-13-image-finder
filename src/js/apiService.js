const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '22997657-91d4620e666f378f8f41767fa';

export default class PixabayJSON {
  constructor() {
    this.searchQuery = '';
  }

  fetchPictures() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=1&per_page=12&key=22997657-91d4620e666f378f8f41767fa`;
    return fetch(url).then(res => res.json());
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
