/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
/* eslint-disable camelcase */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import * as dateFns from 'date-fns';
import { weatherIcons } from './weatherIcons';

export const dataProcessor = (() => {
  const temperatureUnitToggler = document.querySelector('.temperature-toggler');

  const formatDate = (tzid) => {
    const dataCurrentTime = new Date().toLocaleString('en-US', {
      timeZone: `${tzid}`,
    });
    const [datePart, timePart] = dataCurrentTime.split(', ');
    const parsedDate = dateFns.parse(datePart, 'M/d/yyyy', new Date());
    const parsedTime = dateFns.parse(timePart, 'h:mm:ss a', new Date());
    const formattedDate = dateFns.format(parsedDate, 'EEEE dd MMMM yyyy');
    const formattedTime = dateFns.format(parsedTime, 'HH:mm');
    return { formattedDate, formattedTime };
  };

  const formateTime = (time) => {
    const parsedTime = dateFns.parse(time, 'hh:mm aa', new Date());
    const formattedTime = dateFns.format(parsedTime, 'HH:mm');
    return formattedTime;
  };

  const getDateWeekday = (dateString) => {
    const parsedDate = dateFns.parseISO(dateString);
    const weekday = dateFns.format(parsedDate, 'EEEE');
    return weekday;
  };

  const getWeatherIconClass = (weatherCode, isDaytime = true) => {
    const weather = weatherIcons.find((icon) =>
      icon.codes.includes(weatherCode),
    );
    if (!weather) return;
    let iconClass;
    if (weather.codes.includes(1000) && !isDaytime) {
      iconClass = weather.icon.replace('wi-day-sunny', 'wi-night-clear');
    } else {
      iconClass = isDaytime
        ? weather.icon
        : weather.icon.replace('day', 'night');
    }

    return iconClass;
  };

  const celsiusToFahrenheit = (...celsius) =>
    Math.round(celsius * (9 / 5) + 32);

  const fahrenheitToCelsius = (...fahrenheit) =>
    Math.round((fahrenheit - 32) * (5 / 9));

  const formatTemp = (data) => {
    const formattedTemp = {};
    for (const key in data) {
      if (temperatureUnitToggler.classList.contains('celsius')) {
        formattedTemp[key] = `${Math.round(data[key])}°C`;
      } else {
        formattedTemp[key] = `${celsiusToFahrenheit(data[key])}°F`;
      }
    }
    return formattedTemp;
  };

  const processCurrentWeatherData = (data) => {
    const dataLocation = data.location.name;
    const dataCountry = data.location.country;
    const formattedDataLocation = [dataLocation, dataCountry].join(', ');
    const weatherCode = data.current.condition.code;
    const dataCurrentWeatherCondition = data.current.condition.text;
    const dataCurrentHumidity = data.current.humidity;
    const dataCurrentWindSpeed = Math.round(data.current.wind_kph);
    const dataCurrentChanceOfRain =
      data.forecast.forecastday[0].day.daily_chance_of_rain;
    const { temp_c, feelslike_c } = data.current;
    const { maxtemp_c, mintemp_c } = data.forecast.forecastday[0].day;
    const object = { temp_c, feelslike_c, maxtemp_c, mintemp_c };
    const formattedTemp = formatTemp(object);
    const { tz_id } = data.location;
    const { formattedDate, formattedTime } = formatDate(tz_id);
    const dataIsDay = data.current.is_day;
    const isDay = dataIsDay === 1;
    const iconClass = getWeatherIconClass(weatherCode, isDay);
    const uvIndex = data.current.uv;
    const sunRise = data.forecast.forecastday[0].astro.sunrise;
    const formattedSunRise = formateTime(sunRise);
    const sunSet = data.forecast.forecastday[0].astro.sunset;
    const formattedSunSet = formateTime(sunSet);

    class CurrentWeatherData {
      constructor(
        location,
        todayDate,
        currentTime,
        currentWeatherCondition,
        currentHumidity,
        currentWindSpeed,
        currentChanceOfRain,
        // eslint-disable-next-line no-shadow
        { temp_c },
        // eslint-disable-next-line no-shadow
        { feelslike_c },
        { maxtemp_c },
        { mintemp_c },
        // eslint-disable-next-line no-shadow
        weatherCode,
        isDay,
        iconClass,
        uvIndex,
        sunRise,
        sunSet,
      ) {
        this.location = location;
        this.todayDate = todayDate;
        this.currentTime = currentTime;
        this.currentWeatherCondition = currentWeatherCondition;
        this.currentHumidity = currentHumidity;
        this.currentWindSpeed = currentWindSpeed;
        this.currentChanceOfRain = currentChanceOfRain;
        this.currentTemperature = temp_c;
        this.currentFeelsLike = feelslike_c;
        this.todayMaxTemperature = maxtemp_c;
        this.todayMinTemperature = mintemp_c;
        this.weatherCode = weatherCode;
        this.isDay = isDay;
        this.iconClass = iconClass;
        this.uvIndex = uvIndex;
        this.sunRise = sunRise;
        this.sunSet = sunSet;
      }
    }

    const currentWeatherDataObject = new CurrentWeatherData(
      formattedDataLocation,
      formattedDate,
      formattedTime,
      dataCurrentWeatherCondition,
      dataCurrentHumidity,
      dataCurrentWindSpeed,
      dataCurrentChanceOfRain,
      formattedTemp,
      formattedTemp,
      formattedTemp,
      formattedTemp,
      weatherCode,
      isDay,
      iconClass,
      uvIndex,
      formattedSunRise,
      formattedSunSet,
    );

    return currentWeatherDataObject;
  };

  const processForeCastWeatherData = (data) => {
    const forecastWeatherDataArray = [];
    const [, dayOne, dayTwo] = data.forecast.forecastday;
    const forecastWeatherArray = [dayOne, dayTwo];
    forecastWeatherArray.forEach((obj) => {
      const { date } = obj;
      const weekday = getDateWeekday(date);
      const weatherCondition = obj.day.condition.text;
      const { maxtemp_c, mintemp_c, daily_chance_of_rain } = obj.day;
      const tempPair = formatTemp({ maxtemp_c, mintemp_c });
      const maxTemp = tempPair.maxtemp_c;
      const minTemp = tempPair.mintemp_c;
      const weatherCode = obj.day.condition.code;
      const iconClass = getWeatherIconClass(weatherCode);
      const weatherDataObject = {
        weekday,
        weatherCondition,
        maxTemp,
        minTemp,
        daily_chance_of_rain,
        weatherCode,
        iconClass,
      };
      forecastWeatherDataArray.push(weatherDataObject);
    });

    return forecastWeatherDataArray;
  };

  return {
    processCurrentWeatherData,
    processForeCastWeatherData,
    celsiusToFahrenheit,
    fahrenheitToCelsius,
  };
})();
