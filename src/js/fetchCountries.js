const BASE_URL = 'https://restcountries.eu/rest/v2/name/';
/**
 * Возвращает Promise Response - JSON, страны согласно фильтру по названию,
 * с ресурса https://restcountries.eu/rest/v2.
 *
 * @param {string} name Строка для фильтрации по названию.
 * @param {array} fields Массив запрашиваемых полей.
 * @return {object} Promise Response стран JSON.
 */
export default function fetchCountries(name, fields = false) {
  let url = BASE_URL + name;
  if (fields) {
    url += `?fields=${fields.join(';')}`
  }
  return fetch(url)
    .then(response => response.json());
}