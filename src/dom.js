
import { fetchData } from "./api";

const cache = {
    input: document.querySelector('input'),
    searchbtn: document.querySelector('button')
}

function bindEvents() {
    cache.searchbtn.addEventListener('click', () => {
        fetchData(cache.input.value);
    })
}

export {bindEvents};