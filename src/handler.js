import './style.css';
import { dataProcessor } from './dataProcessor';
import { domController } from './UI';
import { APIManager } from './API';

(function setEventListeners() {
  const submitButton = document.querySelector('.submit-button');
  const searchBar = document.querySelector('.search-bar');

  submitButton.addEventListener('click', async (event) => {
    event.preventDefault();
    const placeValue = searchBar.value;
    try {
      const weatherData = await APIManager.fetchWeatherData(placeValue);
      const weatherDataArray = [
        dataProcessor.processCurrentWeatherData(weatherData),
        dataProcessor.processForeCastWeatherData(weatherData),
      ];
      domController.clearForeCastContainer();
      domController.renderWeatherInfo(weatherDataArray);
      console.log(weatherDataArray);
    } catch (err) {
      console.log(err);
    }
  });
})();
