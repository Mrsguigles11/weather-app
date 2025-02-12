
import { fetchData } from "./api";

const cache = {
    input: document.querySelector('input'),
    searchbtn: document.querySelector('button'),
    content: document.querySelector('.content')
}

function bindEvents() {
    cache.searchbtn.addEventListener('click', () => {
        fetchData(cache.input.value);
    })
}

function addContent(object) {
    cache.content.innerHTML = "";
    const location = document.createElement('div');
    location.textContent = `Location: ${object.location}`;
    const description = document.createElement('div');
    description.textContent = `Description: ${object.description}`;
    const latitude = document.createElement('div');
    latitude.textContent = `Latitude: ${object.latitude}`;
    const longitude = document.createElement('div');
    longitude.textContent = `Longitude: ${object.longitude}`;
    cache.content.append(location, description, latitude, longitude);
}

export {bindEvents, addContent};