// АПИ погоды https://openweathermap.org/current

import { currentCity, currentSportsman } from "../helpers/argv.js";
import { getKeyValue } from "./storage_service.js";
import axios from "axios";
import { printWindSpeed, printTemp, printDesc } from "./log_services.js";



const getWeather  = async () => {
  const token = await getKeyValue(currentSportsman);
  if (!token) {
    throw new Error ('Не задан ключ АПИ погоды');
  };

  const coordinaty = await getKeyValue(currentCity);
  if (!coordinaty) {
    throw new Error ('Не заданы координаты города  ');
  };

  const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
      lat: coordinaty.lat,
      lon: coordinaty.lon,
      appid: token,
      units: 'metric',
      lang: 'ua'
    }
  } );  
  let weatherStreet = data.weather[0].description;
  printDesc(weatherStreet);
  let temp = data.main.temp;;
  printTemp(temp);
  let wind = JSON.stringify(data.wind);
  printWindSpeed(wind);
};

export {getWeather};

