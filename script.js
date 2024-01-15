const apiKey = "25853302a1071aae3ecc500142e273fd";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searcBox = document.querySelector(".search input")
const searcBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")


document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert('You cannot access the codes of the project this way :)')
});

async function checkweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }

    else {
        var data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "° C";
        document.querySelector(".humidiyt").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == "Mis") {
            weatherIcon.src = "images/mist.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

}

searcBtn.addEventListener("click", () => {
    checkweather(searcBox.value);
})

