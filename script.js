const key = "32f26704ce29667893ffe8e427ee1e89";


const receiveData = (city) => {
  const Url = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${city}&appid=${key}`
  const promise  = fetch(Url);
  return promise.then((response) => {
    return response.json();
  })
  
}

const searchCity = async () => {
  const city = document.getElementById('city-input').value;
  const info = await receiveData(city)
  showWeatherData(info)

}

const showWeatherData = (weatherData) => {
  document.getElementById("city-name").innerText = weatherData.name;
document.getElementById("weather-type").innerText = weatherData.weather[0].main;
  document.getElementById("temp").innerText = weatherData.main.temp;
  document.getElementById("min-temp").innerText = weatherData.main.temp_min;
  document.getElementById("max-temp").innerText = weatherData.main.temp_max;
}

