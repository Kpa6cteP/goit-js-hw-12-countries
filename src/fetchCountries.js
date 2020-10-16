import template from './template.hbs';

const countries = document.querySelector('.countries')
const baseUrl = `https://restcountries.eu/rest/v2/name/`

function createItem(data, place) {
  const item = template(data);
  place.insertAdjacentHTML("afterbegin", item)
}

export default function fetchCountries(searchQuery) {
  countries.innerHTML = '';
  let url = `${baseUrl}${searchQuery}`;
  fetch(url)
  .then(res => res.json())
  .then(countriesList => {
  createItem(countriesList, countries)
})
}