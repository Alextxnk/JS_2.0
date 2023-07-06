// Работа со строками в JS

const name1 = 'Alex';
const name2 = "Dima";
const name3 = `Vlad`;

console.log(name1);
console.log(name2);
console.log(name3);

const name = 'Alex';
const profession = 'Frontend Dev';

const allInfo = name + ' ' + profession;
console.log(allInfo); // Alex Frontend Dev

const allInfo2 = `${name} ${profession}`; // лучше испольховать этот способ
console.log(allInfo2); // Alex Frontend Dev

// Длина строки и получение символов из строки
const programmingLanguage = 'JavaScript';
console.log('length', programmingLanguage.length); // 10
console.log('1st', programmingLanguage[0]); // J

// Методы строк
// toUpperCase, toLowerCase
// Эти методы не меняют строки, а выводят новую
const animal = 'Lion';
console.log(animal.toUpperCase()); // LION
console.log(animal.toLowerCase()); // lion

// Найти символы в строке - indeOf, includes
const text = 'My favorite language is JS';
console.log(text.indexOf('JS')); // 24, индекс первого элемента - J
console.log(text.includes('JS')); // true

// Обрезка строки
// slice, substring
const newProgrammingLanguage = 'My favorite language is JavaScript';
console.log(newProgrammingLanguage.slice(12)); // language is JavaScript
console.log(newProgrammingLanguage.slice(3, 23)); // favorite language is

console.log(newProgrammingLanguage.substring(3, 23)); // favorite language is

// Замена символов в строке
// replace, replaceAll

const text2 = 'JavaScript';
console.log(text2.replace('Script', '123')); // Java123

console.log(text2.replaceAll('a', 'A')); // JAvAScript

// repeat
const helloText = 'Hello';
console.log(helloText.repeat(3));

// trim
const nameOfUser = prompt('Как тебя зовут?');
console.log(nameOfUser.trim());

