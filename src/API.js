/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */

export const APIManager = (() => {
  const fetchWeatherData = async (place) => {
    const modifiedPlaceValue = place.toLowerCase().replace(/ /g, '+');
    console.log(modifiedPlaceValue);
    const weatherForecastResponse = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=8aaac06ae0a3494f87b150612242303&q=${modifiedPlaceValue}&days=3`,
      { mode: 'cors' },
    );
    const weatherForecastData = await weatherForecastResponse.json();
    console.log(weatherForecastData);
    return weatherForecastData;
  };

  return {
    fetchWeatherData,
  };
})();
