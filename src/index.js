// import './css/styles.css'
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