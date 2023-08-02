export function createMarkup(cat, container) {
    return (container.innerHTML = `   
                    <img class="cat-img" src="${cat.url}" width="340"/>
                    <div class="cat-description">
                    <h2>${cat.breeds[0].name}</h2>
                    <p>${cat.breeds[0].description}</p>
                    <p><h3>Temperament:</h3> ${cat.breeds[0].temperament}</p>
                </div>`);
  }
  