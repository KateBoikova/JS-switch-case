'use strict'

// 1) Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.

const num = Number(prompt('Enter any of this numbers: 1, 2, 3 or 4'));
let result;
switch (num) {
  case 1:
    result = 'winter';
    break;
  case 2:
    result = 'spring';
    break;
  case 3:
    result = 'summer';
    break;
  case 4: 
    result = 'autumn';
    break;
}
console.log(`It's ${result}.`);


// 2) В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

const month = Number(prompt('Enter any number form 1 to 12: '));
switch (month) {
  case 1:
  case 2:
  case 12:
    console.log(`It's winter`);
    break;
  case 3:
  case 4:
  case 5:
    console.log(`It's spring`);
    break;
  case 6:
  case 7:
  case 8:
    console.log(`Ìt's summer`);
    break;
  case 9:
  case 10:
  case 11:
    console.log(`It's autumn`);
    break;
}

// 3) Запросить у пользователя номер дня недели и вывести соответствующее полное строковое название (например, если пользователь вводит 7 - выводится сообщение "воскресенье"). предусмотреть ошибку введения (default)

const weekDay = Number(prompt('Enter number of the day of the week: '));
switch(weekDay) {
  case 1:
    alert('Monday');
    break;
  case 2:
    alert('Tuesday');
    break;
  case 3:
    alert('Wednesday');
    break;
  case 4:
    alert('Thursday');
    break;
  case 5:
    alert('Friday');
    break;
  case 6:
    alert('Saturday');
    break;
  case 7:
    alert('Sunday');
    break;
  default:
    alert('Wrong number');
    break;
}

// 4) В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

const day = Number(prompt('Enter number of the day of the month: '));
switch (true) {
  case day >= 1 && day <= 10:
    alert('First decade');
    break;
  case day > 10 && day <= 20:
    alert('Second decade');
    break;
  case day > 20 && day <= 31:
    alert('Third decade');
    break;
  default:
    alert('Wrong number');
    break; 
}