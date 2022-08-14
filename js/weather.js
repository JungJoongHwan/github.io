const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "1636d5eee7009079d210b99bce1851ff";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            city.innerText = data.name;
            const c_deg = Math.round(parseFloat(data.main.temp) - 273.15);
            weather.innerText = `${data.weather[0].main} / ${c_deg}.`;
        });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);