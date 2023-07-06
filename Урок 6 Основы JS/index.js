// Основы JS
// Математика и операторы сравнения 
const counter = -10;
console.log('counter', counter);
console.log('+,', 2 + 2); // сложение
console.log('-,', 10 - 6); // вычитание
console.log('*,', 5 * 7); // умножение
console.log('/,', 40 / 8); // деление
console.log('**,', 5**2); // возведение в степень
console.log('%,', 10 % 5); // остаток от деления

// инкремент и декремент
let cupsOfCoffee = 1;
cupsOfCoffee++;

// >, <, >=, <=, ==, !=, ===, !==

// сравнение строк
console.log('JavaScript' == 'Javascript'); // false
console.log('S', 'S'.charCodeAt()); // 83
console.log('s', 's'.charCodeAt()); // 115

// == сравнивает значения - приведение типов
// === сравнивает типы - без приведения типов

console.log('1' === 1); // false

// логические конструкции
// if, if else, switch case, ? :

const isFrontendDeveloper = true;

if(isFrontendDeveloper) {
   console.log('Good');
}

const favoriteDrink = 'Coffee';
const message = favoriteDrink === 'Coffee' ? 'Good' : 'Bad';
console.log(message);

// скипнул, то что уже знаю

// циклы
for (let i = 0; i < 3; i++) {
   console.log(i);
}

