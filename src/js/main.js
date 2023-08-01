import { fetchBreed, fetchCatByBreed, catsId, createMarkup } from './cat-api';
import { Notify } from "notiflix";
import SlimSelect from 'slim-select';

const refs = {
  breeds: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  container: document.querySelector('.cat-info'),
};

const { breeds, loader, container } = refs;


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
  })
  .catch(err => Notify.failure(err.status)).finally(() => {
    loader.classList.add("is-hidden");
    breeds.classList.remove("is-hidden");
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
    .catch(err => Notify.failure(err.status)).finally(() => {
      loader.classList.add("is-hidden");
    });
});