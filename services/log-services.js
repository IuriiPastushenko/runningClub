import chalk from 'chalk';

// оформление вывода ошибки
const printError = (error) =>{
  console.log(chalk.bgRed('ERROR') + ' ' + error);
};

// оформление вывода дата-время
const printDateTime = (date, time) => {
  console.log(chalk.blueBright.bold( 'Date: ') + date);
  console.log(chalk.blue( 'Time: ') + time);
};

// оформление вывода Страва
const printResult = (message) =>{
  console.log(chalk.bgGreen('RESULT')+' '+ message);
};


export {printError, printResult, printDateTime};

