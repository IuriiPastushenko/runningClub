#!/usr/bin/env node;

import { getArgs } from "./ helpers/argv.js";
import { printResult, printDateTime, printError } from "./services/log-services.js";
import { saveKeyValue } from "./services/storage_service.js";
import { weather } from "./services/storage_key.js";
// сохранение айди

const args = getArgs(process.argv);

const saveToken = async (id) => {
  
  
  try {
    await saveKeyValue(id,weather);
    printResult('ID сохранен');
  } catch (e) {
    printError(e.message);
  }
}

// управляющая функция
const initRC = () => {
  if (args.date) {
    printDateTime(args.date, args.time);
    printResult("Connect");
  };
  if (args[999]) {
    return saveToken(999)
  } else {printError('Не передан ID')}
}

initRC();