const BASE_URL = 'https://api.thecatapi.com/v1';
const api_key = "live_CxzBagUefcHs9Kon2FFTN2k9j51PXR8yF9MhL7KNkdHT3H74ZUg7tpnM4C5mu1fh";

export function fetchCat() {
    return fetch(`${BASE_URL}/breeds?api_key=${api_key}`).then((res) => {
        if (!res.ok) throw new Error(res.status);
        return res.json();
      });
};

export function fetchCatByBreed(breedId) {
    return fetch(`${url}/images/search?api_key=${api_key}&breed_ids=${breedId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });  
};