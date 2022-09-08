import { homedir } from 'os';
import { join} from 'path';
import { promises } from 'fs';
import { printError } from './log_services.js';

const filePath = join(homedir(),'iurii/runningClub/directories/data_club.json');


// запись в файл данных
const isExist = async (path) => {
	try {
		await promises.stat(path);
		return true;
	} catch (err) {
		return false;
	}
};

const saveKeyValue = async (key, value) => {
  let data = {};
  if (await isExist(filePath)) {
		const file = await promises.readFile(filePath);
		data = JSON.parse(file);
	}
  data[key] = value;
  await promises.writeFile(filePath, JSON.stringify(data));
};

//чтение из файла
const getKeyValue = async(key) => {
    if (await isExist(filePath)) {
      const file = await promises.readFile(filePath);
      const data = JSON.parse(file);
      return data[key];
    }
    throw printError('Ошибка чтения ключа из JSON-файла ');
};

export {saveKeyValue, getKeyValue};