// eslint-disable-next-line import/prefer-default-export
export const APIManager = (() => {
  const fetchWeatherData = async () => {
    const weatherForecastResponse = await fetch(
      'https://api.weatherapi.com/v1/forecast.json?key=8aaac06ae0a3494f87b150612242303&q=hong+kong&days=3',
      { mode: 'cors' },
    );
    const weatherForecastData = await weatherForecastResponse.json();
    console.log(weatherForecastData);
    return weatherForecastData;
  };

  const processWeatherData = (data) => {
    console.log('start');
    const dataLocation = data.location.name;
    const dataTodayDateAndTime = data.location.localtime;
    const dataTodayDate = dataTodayDateAndTime.split(' ')[0];
    const dataCurrentTime = dataTodayDateAndTime.split(' ')[1];
    const dataCurrentWeatherCondition = data.current.condition.text;
    const dataCurrentHumidity = data.current.humidity;
    const dataCurrentWindSpeed = data.current.wind_kph;
    const dataCurrentChanceOfRain =
      data.forecast.forecastday[0].day.daily_chance_of_rain;
    const { temp_c, temp_f } = data.current;
    const { feelslike_c, feelslike_f } = data.current;

    // today
    // location, date and time, temperature(C and F), feels like(C & F)
    // weather condition(e.g. Partly Cloudy), humidity, chance of rain, wind speed
    class CurrentWeatherData {
      constructor(
        location,
        todayDate,
        currentTime,
        currentWeatherCondition,
        currentHumidity,
        currentWindSpeed,
        currentChanceOfRain,
        currentTemperature,
        currentFeelsLike,
      ) {
        this.location = location;
        this.todayDate = todayDate;
        this.currentTime = currentTime;
        this.currentWeatherCondition = currentWeatherCondition;
        this.currentHumidity = currentHumidity;
        this.currentWindSpeed = currentWindSpeed;
        this.currentChanceOfRain = currentChanceOfRain;
        this.currentTemperature = currentTemperature;
        this.currentFeelsLike = currentFeelsLike;
      }
    }

    const currentWeatherDataObject = new CurrentWeatherData(
      dataLocation,
      dataTodayDate,
      dataCurrentTime,
      dataCurrentWeatherCondition,
      dataCurrentHumidity,
      dataCurrentWindSpeed,
      dataCurrentChanceOfRain,
      { temp_c, temp_f },
      { feelslike_c, feelslike_f },
    );

    console.log(currentWeatherDataObject);
    // forecast
    // day, weather condition, max and min temperature, humidity, chance of rain
  };

  return { fetchWeatherData, processWeatherData };
})();
