const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '22997657-91d4620e666f378f8f41767fa';

export default class PixabayJSON {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  // fetchPictures() {
  //   const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}
  //     &page=${this.page}&per_page=12&key=${API_KEY}`;
  //   return fetch(url)
  //     .then(res => res.json())
  //     .then(res => {
  //       this.page += 1;
  //       return res
  //     });
  // }

  async fetchPictures() {
    const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}
      &page=${this.page}&per_page=12&key=${API_KEY}`;
    const response = await fetch(url);
    const picturesJson = await response.json();
    this.page += 1;

    return picturesJson;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
