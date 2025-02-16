import { fetchData } from "./api";

const cache = {
  input: document.querySelector("input"),
  searchbtn: document.querySelector("button"),
  content: document.querySelector(".content"),
  switch: document.querySelector(".switch"),
  checkbox: document.querySelector("#checkbox"),
  switchText: document.querySelector(".switch_text")
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
  const latitudeHeading = document.createElement('div');
  latitudeHeading.textContent = "Latitude";
  latitudeHeading.setAttribute('class', 'box_heading');
  const latitude = document.createElement('span');
  latitude.textContent = object.latitude;
  const latitudeCont = document.createElement('div');
  latitudeCont.setAttribute('class', 'info_cont');
  latitudeCont.append(latitudeHeading, latitude);
  const longitudeHeading = document.createElement('div');
  longitudeHeading.textContent = "Longitude";
  longitudeHeading.setAttribute('class', 'box_heading');
  const longitude = document.createElement('div');
  longitude.textContent = object.longitude;
  const longitudeCont = document.createElement('div');
  longitudeCont.setAttribute('class', 'info_cont');
  longitudeCont.append(longitudeHeading, longitude);
  locationBox.append(latitudeCont, longitudeCont);
  const conditionsBox = document.createElement('div');
  conditionsBox.setAttribute('class', 'content_box');
  const humidityHeading = document.createElement('div');
  humidityHeading.textContent = "Humidity";
  humidityHeading.setAttribute('class', 'box_heading');
  const humidity = document.createElement('div');
  humidity.textContent = object.humidity;
  const humidityCont = document.createElement('div');
  humidityCont.setAttribute('class', 'info_cont');
  humidityCont.append(humidityHeading, humidity);
  const pressureHeading = document.createElement('div');
  pressureHeading.textContent = "Pressure";
  pressureHeading.setAttribute('class', 'box_heading');
  const pressure = document.createElement('div');
  pressure.textContent = object.pressure;
  const pressureCont = document.createElement('div');
  pressureCont.setAttribute('class', 'info_cont');
  pressureCont.append(pressureHeading, pressure);
  conditionsBox.append(humidityCont, pressureCont);
  cache.content.append(mainContentBox, locationBox, conditionsBox);
  cache.switch.style.display = "inline-block";
  cache.checkbox.addEventListener('click', () => {
    if (cache.checkbox.checked === true) {
        const convertedTemp = (object.temperature - 32) * 5/9;
        temperature.textContent = Math.trunc(convertedTemp) + '\u{000B0}' + "c";
    }
    else {
        temperature.textContent = object.temperature + '\u{000B0}' + "f";
    }
  })
  cache.switchText.style.display = "block";
}

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
