import axios from "axios";
import { fetchBreeds, fetchCatByBreed } from "./cat-api"

// https://api.thecatapi.com/v1/breeds

const loader = document.querySelector(".loader");
const error = document.querySelector(".error");
const catInfo = document.querySelector(".cat-info");
const breadSelect = document.querySelector(".breed-select");

breadSelect.addEventListener("change", handleChange)

fetchBreeds()
.then(responce => {
    const pets = responce.map(({id, name}) => {
        return `<option value="${id}">${name}</option>`
    }).join("");
    breadSelect.insertAdjacentHTML("beforeend", pets);
})
.catch(error => console.log(error));


function handleChange() {
    const selectBread = breadSelect.value;
    fetchCatByBreed(selectBread)
    .then(responce => {
        const informations = responce.map(({url, breeds}) => {
            return `
            <img src="${url}"/>
            `
        }).join("")
        catInfo.innerHTML = `${informations}`
    })
}

