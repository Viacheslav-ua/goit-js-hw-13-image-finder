 import './css/styles.css'
// import fCountries from './js/fetchCountries'
// import listCountriesTpl from './templates/listCountries.hbs';
// import cardCountryTpl from './templates/cardCountry.hbs';

// import debounce from 'lodash.debounce';

// import { error } from '@pnotify/core';
// import '@pnotify/core/dist/BrightTheme.css';

// const fields = [
//   'name',
//   'capital',
//   'population',
//   'languages',
//   'flag',
// ];

// const refs = {
//   container: document.querySelector('.countries'),
//   searchFiled: document.querySelector('.search-filed'),
// }

// refs.searchFiled.addEventListener('input', debounce(onEnterName, 500));

// function onEnterName(e) {
//   const strName = e.target.value;

//   fCountries(strName, fields)
//     .then(renderResult)
//     .catch(errResult);
// }

// function renderResult(result) {
//   if (result.length > 1 && result.length <= 10) {
//     const markup = listCountriesTpl(result.map(item => item.name));
//     refs.container.innerHTML = markup;
//     return
//   } else if (result.length === 1) {
//     const markup = cardCountryTpl(...result);
//     refs.container.innerHTML = markup;
//     return
//   } else if (result.length > 10) {
//     refs.container.innerHTML = '';
//     const errNotify = error({
//       text: "Too many matches found. Please enter a more specific query",
//       delay: 1000,
//       addClass: 'notify-err',
//       closer: false,
//       sticker: false,
//     });
//   } else if (result.status === 404) {
//     refs.container.innerHTML = '';
//     const errNotify = error({
//       text: "Matches not found. Please enter a more specific query",
//       delay: 1000,
//       addClass: 'notify-err',
//       closer: false,
//       sticker: false,
//     });
//   } else {
//     refs.container.innerHTML = '';
//   }

// }

// function errResult(result) {
//   refs.container.innerHTML = '';
//   console.log('err', error);
// }

class GetJSON {
//   constructor(url, obj) {
//       this.url = url;
//       this.obj = obj;
// }

  query(url, obj) {
      // fetch(url, obj).then(response => response.json());
    return url + obj
  }
}

class GetPixabay extends GetJSON {
  base_url = 'https://pixabay.com/api/';
  api_key = '22997657-91d4620e666f378f8f41767fa';

  // constructor(str) {
  //     // super(url);
  //     this.str = str;
  // }

  query() {
    return  super.query(base_url, api_key)
  }
  
}

const x = new GetPixabay('jjjkkk');
console.log(x.query);
