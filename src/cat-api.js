import axios from "axios";
export { fetchBreeds, fetchCatByBreed};

axios.defaults.headers.common["x-api-key"] = "live_yp906wtcEPJuX5du0SOgJkHJeFbYyNaTl4Hd32P7anVvYHl8mjjlUIKSYquuHnJ6";

const BASE_URL = "https://api.thecatapi.com/v1";
const IMG_SRCH = "/images/search";
const API_KEY = "live_yp906wtcEPJuX5du0SOgJkHJeFbYyNaTl4Hd32P7anVvYHl8mjjlUIKSYquuHnJ6";
const BREAD_IDS = "breed_ids=";
const BREAD = "/breeds";

function fetchBreeds() {
    return axios.get(`${BASE_URL}${BREAD}`)
    .then(responce => {
        return responce.data;
        // console.log(responce.data)
        })
    .catch( error => {
        throw new Error(error.statusText)
    }
    )
};

function fetchCatByBreed(breedId) {
return axios.get(`${BASE_URL}${IMG_SRCH}?${BREAD_IDS}${breedId}`)
.then(responce => {
    return responce.data
    // console.log(responce.data)
})
}