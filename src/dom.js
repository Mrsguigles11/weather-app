import { fetchData } from "./api";

const cache = {
  input: document.querySelector("input"),
  searchbtn: document.querySelector("button"),
  content: document.querySelector(".content"),
};

function bindEvents() {
  cache.searchbtn.addEventListener("click", () => {
    fetchData(cache.input.value);
  });
}

function addContent(object) {
  cache.content.innerHTML = "";
  cache.input.value = "";
  const mainContentBox = document.createElement('div');
  mainContentBox.setAttribute('class', 'main_content_box');
  cache.content.append(mainContentBox);
  for (let i = 0; i<2; i++) {
    const box = document.createElement('div');
    box.setAttribute('class', 'content_box');
    cache.content.appendChild(box);
  }
}

export { bindEvents, addContent };
