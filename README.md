# runningClub

		
Приложение позволяет получить данные об активности спортсмена в определенный день и погоде в месте активности		
		
Основной файл	/Users/igorpastusenko/iurii/runningClub/club.js	
		
Ввод дданых - через командную строку		
пример ввода	node club.js today Kremenchuk 1707	
		
Обработка ввода	/Users/igorpastusenko/iurii/runningClub/helpers/argv.js	
		
При вводе обрабатываем три параметра:		
	если дата есть в справочнике дат - выводим текущую дату и время	
	если даты нет - выводим ошибку и выходим из программы	
	справочник дат	/Users/igorpastusenko/iurii/runningClub/directories/sportsmen_keys.js
		
	если город есть в справочнике городов	
	если города нет - выводим ошибку и выходим из программы	
	справочник городов	/Users/igorpastusenko/iurii/runningClub/directories/city_keys.js
		
	если  спортсмен есть в справочнике спортсменов - выводим текущую дату и время	
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
		
