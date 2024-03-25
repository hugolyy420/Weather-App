/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/API.js":
/*!********************!*\
  !*** ./src/API.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APIManager: () => (/* binding */ APIManager)
/* harmony export */ });
// eslint-disable-next-line import/prefer-default-export
const APIManager = (() => {
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./API */ "./src/API.js");



_API__WEBPACK_IMPORTED_MODULE_1__.APIManager.fetchWeatherData().then(_API__WEBPACK_IMPORTED_MODULE_1__.APIManager.processWeatherData);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsUUFBUSxjQUFjO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksaUJBQWlCO0FBQzdCLFlBQVksMkJBQTJCOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGdCQUFnQjtBQUN4QixRQUFRLDBCQUEwQjtBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7Ozs7OztVQ3ZFRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUNjOztBQUVuQyw0Q0FBVSx5QkFBeUIsNENBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/ZTMyMCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9VSS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuZXhwb3J0IGNvbnN0IEFQSU1hbmFnZXIgPSAoKCkgPT4ge1xuICBjb25zdCBmZXRjaFdlYXRoZXJEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHdlYXRoZXJGb3JlY2FzdFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAnaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9OGFhYWMwNmFlMGEzNDk0Zjg3YjE1MDYxMjI0MjMwMyZxPWhvbmcra29uZyZkYXlzPTMnLFxuICAgICAgeyBtb2RlOiAnY29ycycgfSxcbiAgICApO1xuICAgIGNvbnN0IHdlYXRoZXJGb3JlY2FzdERhdGEgPSBhd2FpdCB3ZWF0aGVyRm9yZWNhc3RSZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2cod2VhdGhlckZvcmVjYXN0RGF0YSk7XG4gICAgcmV0dXJuIHdlYXRoZXJGb3JlY2FzdERhdGE7XG4gIH07XG5cbiAgY29uc3QgcHJvY2Vzc1dlYXRoZXJEYXRhID0gKGRhdGEpID0+IHtcbiAgICBjb25zb2xlLmxvZygnc3RhcnQnKTtcbiAgICBjb25zdCBkYXRhTG9jYXRpb24gPSBkYXRhLmxvY2F0aW9uLm5hbWU7XG4gICAgY29uc3QgZGF0YVRvZGF5RGF0ZUFuZFRpbWUgPSBkYXRhLmxvY2F0aW9uLmxvY2FsdGltZTtcbiAgICBjb25zdCBkYXRhVG9kYXlEYXRlID0gZGF0YVRvZGF5RGF0ZUFuZFRpbWUuc3BsaXQoJyAnKVswXTtcbiAgICBjb25zdCBkYXRhQ3VycmVudFRpbWUgPSBkYXRhVG9kYXlEYXRlQW5kVGltZS5zcGxpdCgnICcpWzFdO1xuICAgIGNvbnN0IGRhdGFDdXJyZW50V2VhdGhlckNvbmRpdGlvbiA9IGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dDtcbiAgICBjb25zdCBkYXRhQ3VycmVudEh1bWlkaXR5ID0gZGF0YS5jdXJyZW50Lmh1bWlkaXR5O1xuICAgIGNvbnN0IGRhdGFDdXJyZW50V2luZFNwZWVkID0gZGF0YS5jdXJyZW50LndpbmRfa3BoO1xuICAgIGNvbnN0IGRhdGFDdXJyZW50Q2hhbmNlT2ZSYWluID1cbiAgICAgIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWluO1xuICAgIGNvbnN0IHsgdGVtcF9jLCB0ZW1wX2YgfSA9IGRhdGEuY3VycmVudDtcbiAgICBjb25zdCB7IGZlZWxzbGlrZV9jLCBmZWVsc2xpa2VfZiB9ID0gZGF0YS5jdXJyZW50O1xuXG4gICAgLy8gdG9kYXlcbiAgICAvLyBsb2NhdGlvbiwgZGF0ZSBhbmQgdGltZSwgdGVtcGVyYXR1cmUoQyBhbmQgRiksIGZlZWxzIGxpa2UoQyAmIEYpXG4gICAgLy8gd2VhdGhlciBjb25kaXRpb24oZS5nLiBQYXJ0bHkgQ2xvdWR5KSwgaHVtaWRpdHksIGNoYW5jZSBvZiByYWluLCB3aW5kIHNwZWVkXG4gICAgY2xhc3MgQ3VycmVudFdlYXRoZXJEYXRhIHtcbiAgICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgdG9kYXlEYXRlLFxuICAgICAgICBjdXJyZW50VGltZSxcbiAgICAgICAgY3VycmVudFdlYXRoZXJDb25kaXRpb24sXG4gICAgICAgIGN1cnJlbnRIdW1pZGl0eSxcbiAgICAgICAgY3VycmVudFdpbmRTcGVlZCxcbiAgICAgICAgY3VycmVudENoYW5jZU9mUmFpbixcbiAgICAgICAgY3VycmVudFRlbXBlcmF0dXJlLFxuICAgICAgICBjdXJyZW50RmVlbHNMaWtlLFxuICAgICAgKSB7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICAgICAgdGhpcy50b2RheURhdGUgPSB0b2RheURhdGU7XG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSBjdXJyZW50VGltZTtcbiAgICAgICAgdGhpcy5jdXJyZW50V2VhdGhlckNvbmRpdGlvbiA9IGN1cnJlbnRXZWF0aGVyQ29uZGl0aW9uO1xuICAgICAgICB0aGlzLmN1cnJlbnRIdW1pZGl0eSA9IGN1cnJlbnRIdW1pZGl0eTtcbiAgICAgICAgdGhpcy5jdXJyZW50V2luZFNwZWVkID0gY3VycmVudFdpbmRTcGVlZDtcbiAgICAgICAgdGhpcy5jdXJyZW50Q2hhbmNlT2ZSYWluID0gY3VycmVudENoYW5jZU9mUmFpbjtcbiAgICAgICAgdGhpcy5jdXJyZW50VGVtcGVyYXR1cmUgPSBjdXJyZW50VGVtcGVyYXR1cmU7XG4gICAgICAgIHRoaXMuY3VycmVudEZlZWxzTGlrZSA9IGN1cnJlbnRGZWVsc0xpa2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY3VycmVudFdlYXRoZXJEYXRhT2JqZWN0ID0gbmV3IEN1cnJlbnRXZWF0aGVyRGF0YShcbiAgICAgIGRhdGFMb2NhdGlvbixcbiAgICAgIGRhdGFUb2RheURhdGUsXG4gICAgICBkYXRhQ3VycmVudFRpbWUsXG4gICAgICBkYXRhQ3VycmVudFdlYXRoZXJDb25kaXRpb24sXG4gICAgICBkYXRhQ3VycmVudEh1bWlkaXR5LFxuICAgICAgZGF0YUN1cnJlbnRXaW5kU3BlZWQsXG4gICAgICBkYXRhQ3VycmVudENoYW5jZU9mUmFpbixcbiAgICAgIHsgdGVtcF9jLCB0ZW1wX2YgfSxcbiAgICAgIHsgZmVlbHNsaWtlX2MsIGZlZWxzbGlrZV9mIH0sXG4gICAgKTtcblxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRXZWF0aGVyRGF0YU9iamVjdCk7XG4gICAgLy8gZm9yZWNhc3RcbiAgICAvLyBkYXksIHdlYXRoZXIgY29uZGl0aW9uLCBtYXggYW5kIG1pbiB0ZW1wZXJhdHVyZSwgaHVtaWRpdHksIGNoYW5jZSBvZiByYWluXG4gIH07XG5cbiAgcmV0dXJuIHsgZmV0Y2hXZWF0aGVyRGF0YSwgcHJvY2Vzc1dlYXRoZXJEYXRhIH07XG59KSgpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IEFQSU1hbmFnZXIgfSBmcm9tICcuL0FQSSc7XG5cbkFQSU1hbmFnZXIuZmV0Y2hXZWF0aGVyRGF0YSgpLnRoZW4oQVBJTWFuYWdlci5wcm9jZXNzV2VhdGhlckRhdGEpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9