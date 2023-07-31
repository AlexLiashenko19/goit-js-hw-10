const BASE_URL = 'https://api.thecatapi.com/v1';
const api_key = "live_CxzBagUefcHs9Kon2FFTN2k9j51PXR8yF9MhL7KNkdHT3H74ZUg7tpnM4C5mu1fh";

export function fetchBreed() {
    return fetch('https://api.thecatapi.com/v1/breeds').then((res) => {
        if (!res.ok) throw new Error(res.status);
        return res.json();
      });
};

export function fetchCatByBreed(breedId) {
  return fetch(`https://api.thecatapi.com/images/search?breed_ids=${breedId}`).then(res => res.json())
};

export function catInfoById(id) {
  return fetch(`https://api.thecatapi.com/images/search?breed_ids=${id}`).then(res => res.json())
};

// export function createMarkup() {
//   return `<div class="box-img"><img src="https://api.thecatapi.com/v1" alt="${breeds[0].name}" width="400"/></div><div class="box"><h1>${breeds[0].name}</h1><p>${breeds[0].description}</p><p><b>Temperament:</b> ${breeds[0].temperament}</p></div>`
// }