/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */

export const APIManager = (() => {
  const fetchWeatherData = async (place) => {
    const modifiedPlaceValue = place.toLowerCase().replace(/ /g, '+');
    try {
      const weatherForecastResponse = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=8aaac06ae0a3494f87b150612242303&q=${modifiedPlaceValue}&days=3`,
        { mode: 'cors' },
      );
      const weatherForecastData = await weatherForecastResponse.json();
      return weatherForecastData;
    } catch (err) {
      console.log(err);
    }
  };

  return {
    fetchWeatherData,
  };
})();
