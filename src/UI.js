import './style.css';
import { APIManager } from './API';

const renderWeatherInfo = (data) => {
  const currentWeatherData = data[0];
  const location = document.querySelector('.location');
  const currentDate = document.querySelector('.date');
  const currentTime = document.querySelector('.time');
  const currentWeatherCondition = document.querySelector(
    '.current-weather-condition',
  );
  const currentTemperature = document.querySelector('.current-temperature');
  const feelsLikeTemperature = document.querySelector('.feels-like');
  const currentHumidity = document.querySelector('.humidity');
  const currentChanceOfRain = document.querySelector('.today-chance-of-rain');
  const currentWindSpeed = document.querySelector('.wind-speed');

  location.textContent = currentWeatherData.location;
  currentDate.textContent = currentWeatherData.todayDate;
  currentTime.textContent = currentWeatherData.currentTime;
  currentWeatherCondition.textContent =
    currentWeatherData.currentWeatherCondition;
  currentTemperature.textContent = `${currentWeatherData.currentTemperature}°C`;
  feelsLikeTemperature.textContent = `${currentWeatherData.currentFeelsLike}°C`;
  currentHumidity.textContent = `${currentWeatherData.currentHumidity}%`;
  currentChanceOfRain.textContent = `${currentWeatherData.currentChanceOfRain}%`;
  currentWindSpeed.textContent = `${currentWeatherData.currentWindSpeed} kph`;

  const forecastWeatherData = data[1];
  forecastWeatherData.forEach((data) => {
    const weatherForecastContainer =
      document.querySelector('.weather-forecast');
    const forecastDayContainer = document.createElement('div');
    const weekday = document.createElement('div');
    const maxTemperature = document.createElement('div');
    const minTemperature = document.createElement('div');
    const forecastWeatherCondition = document.createElement('div');
    const forecastChanceOfRain = document.createElement('div');

    forecastDayContainer.classList.add('forecast-day');
    weekday.classList.add('weekday');
    maxTemperature.classList.add('max-temp', 'temperature');
    minTemperature.classList.add('min-temp', 'temperature');
    forecastWeatherCondition.classList.add('weather-condition');
    forecastChanceOfRain.classList.add('daily-chance-of-rain');

    weekday.textContent = data.weekday;
    maxTemperature.textContent = `${data.maxTemp}°C`;
    minTemperature.textContent = `${data.minTemp}°C`;
    forecastWeatherCondition.textContent = data.weatherCondition;
    forecastChanceOfRain.textContent = `${data.daily_chance_of_rain}%`;

    forecastDayContainer.append(
      weekday,
      maxTemperature,
      minTemperature,
      forecastWeatherCondition,
      forecastChanceOfRain,
    );
    weatherForecastContainer.appendChild(forecastDayContainer);
  });
};

const clearForeCastContainer = () => {
  const weatherForecastContainer = document.querySelector('.weather-forecast');
  weatherForecastContainer.textContent = '';
};

(function setEventListeners() {
  const submitButton = document.querySelector('.submit-button');
  const searchBar = document.querySelector('.search-bar');

  submitButton.addEventListener('click', async (event) => {
    event.preventDefault();
    const placeValue = searchBar.value;
    try {
      const weatherData = await APIManager.fetchWeatherData(placeValue);
      const weatherDataArray = [
        APIManager.processCurrentWeatherData(weatherData),
        APIManager.processForeCastWeatherData(weatherData),
      ];
      clearForeCastContainer();
      renderWeatherInfo(weatherDataArray);
      console.log(weatherDataArray);
    } catch (err) {
      console.log(err);
    }
  });
})();
