
async function fetchData(location) {
    const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + location + '?key=2YN9GZYD2E6P3FS56XRD9ENCT');
    const data = response.json();
    console.log(data);
    return data;
}

export {fetchData};