const API_KEY="826ed434fc09ea07e8c78fa0b8daa1d9";

function onGeoOk(position){
    const lat=position.coords.latitude;
    const lon=position.coords.longitude;
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then((data)=>{
        const city=document.querySelector("#weather span:first-child");
        const weather=document.querySelector("#weather span:nth-child(2)");
        const temperature=document.querySelector("#weather span:nth-child(3)");
        const temperatureRange=document.querySelector("#weather span:nth-child(4)");
        const temperatureFeelslike=document.querySelector("#weather span:nth-child(5)");
      
        city.innerText=data.name;
        weather.innerText=data.weather[0].main;
        temperature.innerText=`  stemperature ${Math.round(data.main.temp)}℃,  `;
        temperatureRange.innerText=`min ${Math.round(data.main.temp_min)}℃ / max ${Math.round(data.main.temp_max)}℃,  `;
        temperatureFeelslike.innerText=`It feels like ${Math.round(data.main.feels_like)}℃`;

    });
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);