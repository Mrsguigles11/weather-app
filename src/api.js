
import { addContent } from "./dom";

async function fetchData(location) {
    const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + location + '?key=2YN9GZYD2E6P3FS56XRD9ENCT', {mode: 'cors'});
    const json = await response.json();
    const data = {
        location: json.address,
        description: json.description,
        latitude: json.latitude,
        longitude: json.longitude
    }
    addContent(data);
    console.log("done");
}

export {fetchData};