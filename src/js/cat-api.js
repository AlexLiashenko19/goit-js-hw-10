import { Notify } from "notiflix";
const BASE_URL = 'https://api.thecatapi.com/v1';

export function fetchBreed() {
  return fetch(`${BASE_URL}/breeds`).then(res => {
    if (!res.ok) throw new Error(res.status);
    return res.json()
  }); 
};

export function fetchCatByBreed(breedId) {
  return fetch(
    `${BASE_URL}/images/search?breed_ids=${breedId}`
  ).then(res => res.json());
};

export function catsId(id) {
  return fetch(`${BASE_URL}/images/${id}`).then(res =>
    res.json()
    );
};

