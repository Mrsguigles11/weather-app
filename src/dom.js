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
  const location = document.createElement('h2');
  location.textContent = object.location;
  const temperature = document.createElement('span');
  temperature.setAttribute('class', 'temperature');
  temperature.textContent = object.temperature + '\u{000B0}' + "f";
  temperature.style.color = checkTemp(object.temperature);
  const description = document.createElement('div');
  description.textContent = object.description;
  description.setAttribute('class', 'description');
  mainContentBox.append(location, temperature, description);
  const locationBox = document.createElement('div');
  locationBox.setAttribute('class', 'content_box');
  const latitude = document.createElement('div');
  latitude.textContent = "Latitude: " + object.latitude;
  const longitude = document.createElement('div');
  longitude.textContent = "Longitude: " + object.longitude;
  locationBox.append(latitude, longitude);
  const conditionsBox = document.createElement('div');
  conditionsBox.setAttribute('class', 'content_box');
  const humidity = document.createElement('div');
  humidity.textContent = "Humidity: " + object.humidity;
  const pressure = document.createElement('div');
  pressure.textContent = "Pressure: " + object.pressure;
  conditionsBox.append(humidity, pressure);
  cache.content.append(mainContentBox, locationBox, conditionsBox);
}

// temperature.textContent = object.temperature + '\u{000B0}' + "c";

function checkTemp(temp) {
    if (temp <= 50) {
        return "#01cdfe"
    }
    else if (temp <= 68) {
        return "#eeba30"
    }
    else {
        return "#ae0001"
    }
}


export { bindEvents, addContent };
