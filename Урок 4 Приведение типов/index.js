// Приведение типов в JS
// JS язык с динамической типизацией
// Рекомендуется использовать явное преобразование типов

// Виды преобразования типов:
// 1. К строке 
let age = 20;
console.log('age number:', age, typeof age);
age = String(age); // явное преобразование
console.log('age string:', age, typeof age);

let implicitAge = '1' + 20; // неявное преобразование
console.log('implicitAge string:', implicitAge, typeof implicitAge);

//  2. К числу
let experience = '5';
experience = Number(experience); // явное преобразование
console.log('experience number:', experience, typeof experience);

let implicitExperience = '5';
implicitExperience = +implicitExperience; // неявное преобразование
console.log('implicitExperience number:', implicitExperience, typeof implicitExperience);

console.log(Number('Hello world')); // NaN - Not a Number
//  3. К boolean
let text = 'Hello';
text = Boolean(text);
console.log('text boolean:', text, typeof text);

// null, undefined, Nan, 0, '' - false