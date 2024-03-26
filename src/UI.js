/* eslint-disable import/prefer-default-export */
import './style.css';
import { APIManager } from './API';
import { dataProcessor } from './dataProcessor';

export const domController = (() => {
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
    const currentWeatherIcon = document.querySelector('.weather-icon');

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
    currentWeatherIcon.className = `weather-icon ${currentWeatherData.iconClass}`;

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
      const forecastWeatherIcon = document.createElement('i');

      forecastDayContainer.classList.add('forecast-day');
      weekday.classList.add('weekday');
      maxTemperature.classList.add('max-temp', 'temperature');
      minTemperature.classList.add('min-temp', 'temperature');
      forecastWeatherCondition.classList.add('weather-condition');
      forecastChanceOfRain.classList.add('daily-chance-of-rain');
      forecastWeatherIcon.className = `weather-icon ${data.iconClass}`;

      weekday.textContent = data.weekday;
      maxTemperature.textContent = `${data.maxTemp}°C`;
      minTemperature.textContent = `${data.minTemp}°C`;
      forecastWeatherCondition.textContent = data.weatherCondition;
      forecastChanceOfRain.textContent = `${data.daily_chance_of_rain}%`;

      forecastDayContainer.append(
        weekday,
        maxTemperature,
        minTemperature,
        forecastWeatherIcon,
        forecastWeatherCondition,
        forecastChanceOfRain,
      );
      weatherForecastContainer.appendChild(forecastDayContainer);
    });
  };

  const clearForeCastContainer = () => {
    const weatherForecastContainer =
      document.querySelector('.weather-forecast');
    weatherForecastContainer.textContent = '';
  };

  return { renderWeatherInfo, clearForeCastContainer };
})();
