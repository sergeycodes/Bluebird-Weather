const apiKey = "c587da6bd825cbfd958f23736f930a13";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
const geoCodeUrl = "https://api.openweathermap.org/geo/1.0/direct?q=";
const units = "imperial";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
    /*
    const geoResponse = await fetch(geoCodeUrl + city + "&appid=" + apiKey);
    if(geoResponse.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        return;
    }
    var geoData = await geoResponse.json();
    console.log(geoData);
    const lat = geoData[0].lat;
    const lon = geoData[0].lon;
    */
    const response = await fetch(apiUrl + city + "&appid=" + apiKey + "&units=" + units);

    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        return;
    }

    var data = await response.json();

    console.log(data);
    
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " mph";

    document.querySelector(".s-current").innerHTML = data.snow + " mm";
    console.log(data.snow);
    document.querySelector(".s-3h").innerHTML = data.snow + " mm";

    document.querySelector(".s-deep").innerHTML = data.snow_deep + " cm";


    const weatherCondition = data.weather[0].main;
    if(weatherCondition == "Clouds") {
        const weatherIcon = document.querySelector(".weather-icon");
        weatherIcon.src = "images/clouds.png";
    }else if(weatherCondition == "Clear") {
        const weatherIcon = document.querySelector(".weather-icon");
        weatherIcon.src = "images/clear.png";
    }else if(weatherCondition == "Rain") {
        const weatherIcon = document.querySelector(".weather-icon");
        weatherIcon.src = "images/rain.png";
    }else if(weatherCondition == "Snow") {
        const weatherIcon = document.querySelector(".weather-icon");
        weatherIcon.src = "images/snow.png";
    }else if(weatherCondition == "Drizzle") {
        const weatherIcon = document.querySelector(".weather-icon");
        weatherIcon.src = "images/drizzle.png";
    }else if(weatherCondition == "Mist") {
        const weatherIcon = document.querySelector(".weather-icon");
        weatherIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}

searchBox.addEventListener("keyup", (e) => {
    if(e.keyCode == 13) {
        let city = searchBox.value;
        checkWeather(city);
    }
});

searchBtn.addEventListener("click", () => {
    let city = searchBox.value;
    checkWeather(city);
});


/* nav bar javascript */
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
