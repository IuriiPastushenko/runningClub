/* eslint-disable prefer-destructuring */
/* eslint-disable import/no-mutable-exports */
import { city } from '../directories/city_keys.js';
import { day } from '../directories/date_keys.js';
import { member } from '../directories/sportsmen_keys.js';

// обработка входящего запроса
let currentData;
let currentCity;
let currentSportsman;

function getArgs(args) {
  const res = {};
  const [a, b, ...dates] = args;

  if (dates[0] in day) {
    currentData = dates[0];
    res[currentData] = true;
  }

  if (dates[1] in city) {
    currentCity = dates[1];
    res[currentCity] = true;
  }

  if (dates[2] in member) {
    currentSportsman = dates[2];
    res[currentSportsman] = true;
  }

  return res;
}

export {
  getArgs, currentData, currentCity, currentSportsman,
};
