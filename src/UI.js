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
  const currentChanceOfRain = document.querySelector('.chance-of-rain');
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
      renderWeatherInfo(weatherDataArray);
      console.log(weatherDataArray);
    } catch (err) {
      console.log(err);
    }
  });
})();
