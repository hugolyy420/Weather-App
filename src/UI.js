import './style.css';
import { APIManager } from './API';

APIManager.fetchWeatherData().then(APIManager.processWeatherData);
