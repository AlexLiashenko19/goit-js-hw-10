import { fetchBreed, fetchCatByBreed, catInfoById } from "./cat-api"

refs = {
    breeds: document.querySelector('.breed-select'),
    loader: document.querySelector('.loader'),
    error: document.querySelector('.error'),
    container: document.querySelector('.cat-info')
};

fetchBreed().then(res => {
    refs.breeds.innerHTML = res.map(({id,name}) => {
        return `<option value="${id}">${name}</option>`
    })
});

