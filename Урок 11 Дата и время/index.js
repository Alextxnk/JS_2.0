// Дата и время в JS

// Date
const date = new Date();
console.log(date);

// new Date(year, month, day, hours, minutes, seconds, ms)

// месяцы 0 (январь) до 11(декабрь)

const newDate = new Date(2000, 1, 10, 11, 55, 5, 5000);
console.log(newDate);

console.log(date.getFullYear()); // 2023
console.log(date.getMonth()); // 6 - июль
console.log(date.getDate()); // 7 - число
console.log(date.getHours()); // 16
console.log(date.getMinutes()); // 2
console.log(date.getSeconds()); // 53
console.log(date.getMilliseconds()); // 600

// День недели
// 0 (воскресенье) до 6 (суббота)
console.log(date.getDay()); // 5 - пятница

if (date.getDay() === 5) {
   console.log('Пятница');
}


// Установить дату
newDate.setFullYear(2001);
newDate.setMonth(3);
newDate.setDate(15);
newDate.setHours(18);
newDate.setMinutes(20);

console.log(newDate);


// Разность между датами
// getTime

console.log(date.getTime()); // количество миллисекунд с 01.01.1970
console.log(newDate.getTime()); 

const difference = date.getTime() - newDate.getTime();
console.log('difference', difference / 1000 / 60);

// newDate.getTime() === Date.now()

// посчитать время выполнения алгоритма
const startTime = Date.now();

for (let i = 0; i < 10000000; i++) {} 

const endTime = Date.now();

const difference2 = endTime - startTime;
console.log(difference2); // разница в миллисекундах

