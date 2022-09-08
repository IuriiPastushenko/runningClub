#!/usr/bin/env node;

import { getArgs, currentData, currentCity, currentSportsman} from "./helpers/argv.js";
import { printReadInput, printDateTime, printError } from "./services/log_services.js";
import { saveKeyValue } from "./services/storage_service.js";
import { weather } from "./directories/weather_keys.js";
import { getWeather } from "./services/weather_api_sevices.js";
import { city } from "./directories/city_keys.js";

// чтение вввода
getArgs(process.argv);

// обработка ввода
const saveToken = async (id, key) => {
  try {
    if (key == 'city') {
      await saveKeyValue(id, city[id]);
      printReadInput('Координаты города записаны');
    } else {
        await saveKeyValue(id, weather[id]);
        printReadInput('Ключ АПИ погоды записан');
    }
  } catch (err) {
    printError(err.message);
  }
}

const initRC = () => {

  if (currentData) {
    printDateTime(currentData);
    printReadInput(currentData);
  } else {
    throw printError('Дата не определена');
  };

  if (currentCity) {
    printReadInput(currentCity);
    saveToken(currentCity, 'city')
  } else {
    throw printError('Город не определен');
  };

  if (currentSportsman) {
    printReadInput(currentSportsman);
    saveToken(currentSportsman, 'name');
  } else {
    throw printError('Спортсмен не определен')
    }

}

initRC();

// получение данных о погоде
const weatherStart = async ()=> { 
  try {
    await getWeather();
  } catch (err) {
      printError('Ошибка АПИ погоды');
      throw printError(err.message);
    }  
};

weatherStart();

