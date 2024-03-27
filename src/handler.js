/* eslint-disable no-shadow */
import './style.css';
import { dataProcessor } from './dataProcessor';
import { domController } from './UI';
import { APIManager } from './API';

(function setEventListeners() {
  const searchButton = document.querySelector('.search-button');
  const searchBar = document.querySelector('.search-bar');
  const temperatureUnitToggler = document.querySelector('.temperature-toggler');
  temperatureUnitToggler.classList.add('celsius');

  temperatureUnitToggler.addEventListener('click', () => {
    const temperatureDataContainers = document.querySelectorAll('.temperature');
    temperatureDataContainers.forEach((container) => {
      const temperatureDataContainer = container;
      const temperatureString = temperatureDataContainer.textContent;
      const temperatureData = temperatureString.match(/\d+/g);
      if (temperatureUnitToggler.classList.contains('celsius')) {
        const formattedTemperatureData =
          dataProcessor.celsiusToFahrenheit(temperatureData);
        temperatureDataContainer.textContent = `${formattedTemperatureData}°F`;
      } else {
        const formattedTemperatureData =
          dataProcessor.fahrenheitToCelsius(temperatureData);
        temperatureDataContainer.textContent = `${formattedTemperatureData}°C`;
      }
    });
    if (temperatureUnitToggler.classList.contains('celsius')) {
      temperatureUnitToggler.classList.replace('celsius', 'fahrenheit');
    } else {
      temperatureUnitToggler.classList.replace('fahrenheit', 'celsius');
    }
  });

  async function displayWeatherinfo(event) {
    event.preventDefault();
    domController.hideErrorMessage();
    domController.showLoadingSpinner();
    const placeValue = searchBar.value;
    try {
      if (placeValue === '') {
        throw new Error('Please do not search with blank value');
      }
      const weatherData = await APIManager.fetchWeatherData(placeValue);

      if (weatherData.error) {
        throw new Error(weatherData.error.message);
      }

      const weatherDataArray = [
        dataProcessor.processCurrentWeatherData(weatherData),
        dataProcessor.processForeCastWeatherData(weatherData),
      ];
      domController.renderWeatherInfo(weatherDataArray);
      domController.hideLoadingSpinner();
    } catch (err) {
      domController.displayErrorMessage(
        err || 'An error occurred while fetching weather data.',
      );
    }
  }

  searchButton.addEventListener('click', displayWeatherinfo);

  window.addEventListener('load', (event) => {
    searchBar.value = 'Hong Kong';
    displayWeatherinfo(event);
  });
})();
