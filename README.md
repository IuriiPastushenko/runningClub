# runningClub

App allows to get data about activity of athlete in the definite day and weather in the place of activity.
	
Main file is runningClub/club.js.

Input data entry is done through common line.
As a example, node club.js today Kremenchuk 1707.
		
Input processing is done in file: runningClub/helpers/argv.js.
		
After input is done process three parameters:

if the date is in the date directory - is displayed the current date and time;
if there is no date, is displayed an error and exit the program;
date directory: runningClub/directories/sportsmen_keys.js;

if the place of activity is in the place directory - is displayed the current date and time;
if there is no place, is displayed an error and exit the program;
date directory: runningClub/directories/sportsmen_keys.js;

if the athlete is in the directory of athletes - is continued the work of the program:
if there is no athlete, is displayed an error and exit the program;
athlete directory: runningClub/directories/sportsmen_keys.js.

Visual effects are used in data processing.
File of effects: runningClub/services/log-services.js.

After processing - is formed a file for transferring data to the API handler.
If error - exit the program;
Write-read file for API: runningClub/services/storage_service.js.

Service openweathermap.org - is got the weather from the coordinates place of start 
(description, temperature and wind speed).

File for API openweathermap.org: runningClub/services/weather_api_sevices.js.


		
Приложение позволяет получить данные об активности спортсмена в определенный день и погоде в месте активности		
		
Основной файл	/Users/igorpastusenko/iurii/runningClub/club.js	
		
Ввод дданых - через командную строку		
пример ввода	node club.js today Kremenchuk 1707	

Обработка ввода	/Users/igorpastusenko/iurii/runningClub/helpers/argv.js	
		
При вводе обрабатываем три параметра:		
	если дата есть в справочнике дат - выводим текущую дату и время	
	если даты нет - выводим ошибку и выходим из программы	
	справочник дат	/Users/igorpastusenko/iurii/runningClub/directories/sportsmen_keys.js
		
	если город есть в справочнике городов	 - продолжаем работу программы.
	если города нет - выводим ошибку и выходим из программы	
	справочник городов	/Users/igorpastusenko/iurii/runningClub/directories/city_keys.js
		
	если  спортсмен есть в справочнике спортсменов - продолжаем работу программы.
	если даты нет - выводим ошибку и выходим из программы	
	справочник спортсменов	/Users/igorpastusenko/iurii/runningClub/directories/sportsmen_keys.js
		
При выводе используются визуальные эффекты		
	файл эффектов при выводе 	/Users/igorpastusenko/iurii/runningClub/services/log-services.js
		
После обработки - формируем файл для передачи данных в обработчик АПИ		
	если ошибка - выходим из программы	
	файл записи-чтения	/Users/igorpastusenko/iurii/runningClub/services/storage_service.js
	файл данных	/Users/igorpastusenko/iurii/runningClub/directories/data_club.json
		
Сервис openweathermap.org - по координатам места старта получаем погоду		
(описание, температура и скорость ветра)		
	файл АПИ погоды	/Users/igorpastusenko/iurii/runningClub/services/weather_api_sevices.js