/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
// АПИ погоды https://openweathermap.org/current

import axios from 'axios';
import { currentCity, currentSportsman } from '../helpers/argv.js';
import { getKeyValue } from './storage_service.js';
import {
  printWindSpeed, printTemp, printDesc, printError,
} from './log_services.js';

const getWeather = async () => {
  const token = await getKeyValue(currentSportsman);
  if (!token) {
    throw printError('Не задан ключ АПИ погоды');
  }

  const coordinaty = await getKeyValue(currentCity);
  if (!coordinaty) {
    throw printError('Не заданы координаты города  ');
  }

  const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
      lat: coordinaty.lat,
      lon: coordinaty.lon,
      appid: token,
      units: 'metric',
      lang: 'ua',
    },
  });
  const weatherStreet = data.weather[0].description;
  printDesc(weatherStreet);
  const { temp } = data.main;
  printTemp(temp);
  const wind = JSON.stringify(data.wind);
  printWindSpeed(wind);
};

export { getWeather };
