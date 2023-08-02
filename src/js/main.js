import { fetchBreed, fetchCatByBreed, catsId  } from './cat-api';
import { createMarkup } from "./markup";
import { Notify } from "notiflix";
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css'

const refs = {
  breeds: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  container: document.querySelector('.cat-info'),
  error: document.querySelector('.error'),
  select: document.querySelector('.js-breed-select'),
};

const { breeds, loader, container, error, select } = refs;

loader.classList.remove("is-hidden");

fetchBreed()
  .then(res => {
    breeds.innerHTML = res
      .map(({ id, name }) => {
        return `<option value="${id}">${name}</option>`;
      })
      .join('\n'); 
    new SlimSelect({
      select: '.breed-select',
    });
select.classList.remove("is-hidden")
  })
  .catch(err => {
    Notify.failure(err.status)
    error.classList.remove("is-hidden")
  })
  .finally(() => {
    loader.classList.add("is-hidden");
  });

breeds.addEventListener('change', () => {
  const selectedBreedId = breeds.value;
  container.innerHTML = "";
  loader.classList.remove("is-hidden");
  fetchCatByBreed(selectedBreedId)
    .then(img => {
      catsId(img[0].id)
    .then(res => {
      createMarkup(res, container);
    })
  })
  .catch(err => {
    Notify.failure(err.status)
    error.classList.remove("is-hidden")
  })
  .finally(() => {
    loader.classList.add("is-hidden");
  });
});