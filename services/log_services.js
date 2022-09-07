import chalk from 'chalk';

// оформление вывода ошибки
const printError = (error) =>{
  console.log(chalk.bgRed('ERROR') + ' ' + error);
};

// оформление вывода дата-время
const printDateTime = (date) => {
  let dateOutput = new Date().toLocaleDateString();
  let TimeOutput = new Date().toLocaleTimeString();
  console.log(chalk.blueBright.bold('Date: ') + dateOutput);
  console.log(chalk.blue('Time: ') + TimeOutput);
};

// оформление вывода температуры
const printDesc = (desk) => {
  console.log(chalk.bgMagentaBright.bold('On street: ') + ' ' + desk);
};


// оформление вывода температуры
const printTemp = (temp) => {
  console.log(chalk.bgYellowBright.bold('Temp:      ') + ' ' + temp);
};

// оформление вывода скорости ветра
const printWindSpeed = (wind) => {
  console.log(chalk.bgCyanBright.bold('Wind:      ') + ' ' + wind);
};

// оформление вывода корректного ввода
const printReadInput = (message) =>{
  console.log(chalk.bgGreen('Read input:')+' '+ message);
};

export {printError, printReadInput, printDateTime, printWindSpeed, printTemp, printDesc};

