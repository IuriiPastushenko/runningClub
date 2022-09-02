import { homedir } from 'os';
import { join} from 'path';
import { promises } from 'fs';

const filepath = join(homedir(),'iurii', 'runningClub','data_club.json');
// const saveKeyValue = async(key, value) => {
// console.log(filepath)
//   };

// проверка существования файла
const isExist = async (path) => {
  try {
    await promises.stat(path);
    return true;
  } catch (e) {
      return false;
  }
}

// запись в файл данных
const saveKeyValue = async(key, value) => {
  let data = {};
  if (await isExist(filepath)) {
    const file = await promises.readFile(filepath,'utf-8');
    data = JSON.parse(file);
  }
  data[key] = value;
  await promises.writeFile(filepath, JSON.stringify(data,'utf-8'))
};

//
const getKeyValue = async(key) => {
  if (await isExist(filepath)) {
    const file = await promises.readFile(filepath,'utf-8');
    const data = JSON.parse(file);
    return data[key];
  }
  return undefined;
};

export {saveKeyValue, getKeyValue};