let API_Key = "b67acd2048c8767444f7abc7cb5e12c6";
let API_URL = "https://api.openweathermap.org/data/2.5/weather?q=&appid=b67acd2048c8767444f7abc7cb5e12c6&units=metric";

let searchBox =document.querySelector(".search input");
let searchBtn =document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city) {
    let responce = await fetch(API_URL + city + `&appid= ${API_Key}`);

    let data = await responce.json();
   
    

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Cloud"){
                weatherIcon.src = "images/clouds.png";
    }else  if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }else  if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }else  if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }else  if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
}
}

 searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);

 });


