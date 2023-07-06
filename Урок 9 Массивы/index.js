// Массивы
// Массив - это набор элементов одного или нескольких типов

const salaries = [100, 200, 1000, 300, 700, 400, 500, 250];
console.log(salaries);

console.log(salaries.length); // 5 - количество элементов в массиве 


// добавление, удаление, изменение массивов

salaries.push(600); // добавление в конец массива
console.log(salaries);

salaries.unshift(50); // добавление в начало массива
console.log(salaries);

salaries.pop(); // удаление из конца массива
console.log(salaries);

salaries.shift(); // удаление из начала массива
console.log(salaries);

// изменение элементов массива
salaries[0] = 150;
console.log(salaries);


// перебор элементов массива
// for, for of, forEach
console.log('for');
for (let i = 0; i < salaries.length; i++) {
   console.log(salaries[i]);
}

console.log('for of');
for (const cost of salaries) {
   console.log(cost);
}

console.log('forEach');
salaries.forEach((cost, index, array) => {
   console.log(cost);
   console.log(index);
   console.log(array);
})


// работа с методами массивов
// map - этот метод возвращает новый массив, в котором содержатся элементы, измененные с помощью нашей callback функции

console.log('map');
const updatedSalaries = salaries.map((cost, index, array) => {
   console.log(cost);
   return cost * 2;
});
console.log('updatedSalaries');
console.log(updatedSalaries);


// filter - возвращает отфильтрованный массив
console.log('filter');
const filteredSalaries = salaries.filter((cost, index, array) => {
   return cost > 300;
})
console.log(filteredSalaries);


// find - находит первый элемент, который удовлетворяет условию
console.log('find');
const searchSalary = salaries.find((cost) => {
   return cost > 300;
})
console.log(searchSalary);


// findIndex - находит индекс первого элемента, удовлетворяющего условию
console.log('findIndex');
const serachedIndex = salaries.findIndex((cost => {
   return cost === 300;
}))
console.log(serachedIndex);


// some, every
// some - смотрит значения в массиве, если хоть одно удовлетворяет условию, возвращает true
console.log('some');
const elementExists = salaries.some((cost) => {
   return cost === 300;
})
console.log(elementExists); // true


// every - возвращет true, если все элементы в массиве удовлетворяют условию
console.log('every');
const allElementExists = salaries.every((cost) => {
   return cost === 300;
})
console.log(allElementExists); // false 


// метод массивов reduce
console.log('reduce');
const sum = salaries.reduce((accumulator, cost, index, array) => {
   console.log(`accumulator: ${accumulator}, cost: ${cost}`);
   return accumulator + cost;
}, 0); // начиает прибавлять с нуля
console.log(sum); // 1550 - получаем сумму всех элементов массива с помощью аккумулятора

// sort - сортирует массив по возрастанию или убыванию
// < 0
// > 0
// 0
console.log('sort');
salaries.sort((a, b) => {
   return a - b; // b - a сортировка по убыванию
})
console.log(salaries);
// если не передать callback в sort, то тогда будет отсортированно по строкам, исходя из индексов элемента строки, это хорошо подходит для сортировки массива с именами 
const names = ['Dima', 'Petya', 'Alex'];
names.sort(); // отсортирует массив в алфавитном порядке
console.log(names);

names.sort((a, b) => {
   if (a < b) {
      return 1;
   }

   if (a > b) {
      return -1;
   }

   return 0;
}); // отсортирует массив строк по убыванию, для возрастания нужно поменять знаки > и <
console.log(names);

// для сортировки по чилсам нужно обязвтельно передавать callback, 
// для сотрировки по строкам 
// метод sort изменяет текущий массив, в то время как методы map и filter возвращали новый массив


// методы splice, slice 


// splice - его задача в том, чтобы удалить какие-то элементы из массива и вставить на его позиции другие элементы 
// этот метод изменяет текущий массив
console.log('splice');
const cars = ['BMW', 'Mercedes', 'Audi'];

cars.splice(0, 1); // 1 аргумент - индекс, с которого начинаем удаление, 2 - по какой индекс удаляем не включительно, 3 аргумент - то на что заменяем (он может отсутствовать)
console.log(cars); // ['Mercedes', 'Audi']

const removedElements = cars.splice(0, 1, 'Ford', 'Maseratti');
console.log(cars); // ['Ford', 'Maseratti', 'Audi']
console.log(`removedElements: ${removedElements}`); // Mercedes


// slice - этот метод принимает только два параметра, начало и кнец обрезки массива
// этот метод НЕ изменяет текущий массив
console.log('slice');
const agesOfDevelopers = [20, 25, 27, 30];
const sliceElements = agesOfDevelopers.slice(0, 2);
console.log(agesOfDevelopers); // [20, 25, 27, 30]
console.log(`sliceElements: ${sliceElements}`); // 20,25


// indexOf - ищет элемент в массиве и возвращает его индекс, если такого элемента нет, то мы получим -1
console.log('indexOf');
const indexOfCar = cars.indexOf('Audi');
console.log(indexOfCar); // 2


// includes - проверяет существует ли данный элемент в массиве и возвращает булево значение 
console.log('includes');
const isCarIncludes = cars.includes('Ford');
console.log(isCarIncludes); // true


// split + join



