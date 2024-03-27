/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
/* eslint-disable import/prefer-default-export */

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
    const currentWeatherIcon = document.querySelector('.current-weather-icon');
    const todayMaxTemp = document.querySelector('.today-max-temp');
    const todayMinTemp = document.querySelector('.today-min-temp');
    const sunRise = document.querySelector('.sunrise');
    const sunSet = document.querySelector('.sunset');
    const uvIndex = document.querySelector('.uv-index');

    location.textContent = currentWeatherData.location;
    currentDate.textContent = currentWeatherData.todayDate;
    currentTime.textContent = currentWeatherData.currentTime;
    currentWeatherCondition.textContent =
      currentWeatherData.currentWeatherCondition;
    currentTemperature.textContent = currentWeatherData.currentTemperature;
    feelsLikeTemperature.textContent = currentWeatherData.currentFeelsLike;
    currentHumidity.textContent = `${currentWeatherData.currentHumidity}%`;
    currentChanceOfRain.textContent = `${currentWeatherData.currentChanceOfRain}%`;
    currentWindSpeed.textContent = `${currentWeatherData.currentWindSpeed} kph`;
    currentWeatherIcon.className = `current-weather-icon ${currentWeatherData.iconClass}`;
    todayMaxTemp.textContent = currentWeatherData.todayMaxTemperature;
    todayMinTemp.textContent = currentWeatherData.todayMinTemperature;
    sunRise.textContent = currentWeatherData.sunRise;
    sunSet.textContent = currentWeatherData.sunSet;
    uvIndex.textContent = currentWeatherData.uvIndex;

    const forecastWeatherData = data[1];
    const weekdays = document.querySelectorAll('.weekday');
    const forecastWeatherConditions =
      document.querySelectorAll('.weather-condition');
    const maxTemperatures = document.querySelectorAll('.max-temp');
    const minTemperatures = document.querySelectorAll('.min-temp');
    const forecastChanceOfRain = document.querySelectorAll(
      '.daily-chance-of-rain',
    );
    const forecastWeatherIcons = document.querySelectorAll(
      '.forecast-weather-icon',
    );

    for (let i = 0; i < forecastWeatherData.length; i++) {
      weekdays[i].textContent = forecastWeatherData[i].weekday;
      maxTemperatures[i].textContent = forecastWeatherData[i].maxTemp;
      minTemperatures[i].textContent = forecastWeatherData[i].minTemp;
      forecastWeatherConditions[i].textContent =
        forecastWeatherData[i].weatherCondition;
      forecastChanceOfRain[i].textContent =
        `${forecastWeatherData[i].daily_chance_of_rain}%`;
      forecastWeatherIcons[i].className =
        `forecast-weather-icon ${forecastWeatherData[i].iconClass}`;
    }
  };

  const weatherContainer = document.querySelector('.weather-container');
  const loadingSpinnerContainer = document.querySelector(
    '.loading-spinner-container',
  );
  const locationDateContainer = document.querySelector(
    '.location-date-container',
  );

  const showLoadingSpinner = () => {
    loadingSpinnerContainer.style.display = 'block';
    weatherContainer.style.display = 'none';
    locationDateContainer.style.display = 'none';
  };

  const hideLoadingSpinner = () => {
    loadingSpinnerContainer.style.display = 'none';
    weatherContainer.style.display = 'grid';
    locationDateContainer.style.display = 'block';
  };

  const displayErrorMessage = (err) => {
    loadingSpinnerContainer.style.display = 'none';
    const errMessage = document.querySelector('.err-message');
    errMessage.textContent = err;
    errMessage.style.display = 'block';
  };

  const hideErrorMessage = () => {
    const errMessage = document.querySelector('.err-message');
    errMessage.style.display = 'none';
  };

  return {
    renderWeatherInfo,
    showLoadingSpinner,
    hideLoadingSpinner,
    displayErrorMessage,
    hideErrorMessage,
  };
})();
