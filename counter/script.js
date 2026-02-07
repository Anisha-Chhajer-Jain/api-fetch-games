var input = document.querySelector('.input');
var btn = document.querySelector('.btn');
var main = document.querySelector('.main');

function display(data) {

    main.innerHTML = `
        <p class="date">${new Date().toDateString()}</p>
        <p class="location">${data.location.name}, ${data.location.country}</p>

        <div class="icon">
            <img src="${data.current.condition.icon}" alt="">
        </div>

        <p class="temp">${data.current.temp_c}°</p>
        <p>${data.current.condition.text}</p>

        <div class="details">
            <p><span>Wind:</span> <span>${data.current.wind_kph} km/h</span></p>
            <p><span>Humidity:</span> <span>${data.current.humidity}%</span></p>
            <p><span>Pressure:</span> <span>${data.current.pressure_mb} mb</span></p>
            <p><span>Cloud:</span> <span>${data.current.cloud}%</span></p>
        </div>
    `;

    input.value = "";
}

function getData() {
    fetch(`https://api.weatherapi.com/v1/current.json?key=51a069297d9b4be7b9c51556250912&q=${input.value}&aqi=yes`)
        .then(res => res.json())
        .then(data => display(data));
}

btn.addEventListener('click', getData);
