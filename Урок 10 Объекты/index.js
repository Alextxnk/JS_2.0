// Объекты в JS
// Создание объектов, получение значения объектов по ключу

const developer = {
   // key: value
   name: 'Alex',
   age: 21,
   job: 'Front-end',
   jobAllInfo: {
      framework: 'ReactJS'
   }
}

console.log(developer);

// 1 способ получения значения
console.log(developer.name); // Alex
console.log(developer.jobAllInfo.framework); // ReactJS

// 2 способ получения значения
const key = 'age'
console.log(developer[key]); // 21
console.log(developer['jobAllInfo']['framework']); // ReactJS


// Добавление, удаление и изменение элементов объекта
const student = {
   id: 1,
   programmingLanguage: 'JS',
   hasExperienceInReact: true
}

// добавление
student.experience = 8;
console.log(student);

// удаление
delete student.hasExperienceInReact;
console.log(student);

// изменение
student.experience = 12;
console.log(student);


// Объект - ссылочный тип данных
// 7 типов данных - примитивы (не ссылочный тип)
// 1 - не примитив - объект (ссылочный тип)

const setName = (entity, value) => {
   if (typeof entity === 'object') {
      entity.name = value;
   } else {
      entity = value;
   }
}

const newDeveloper = {
   name: 'Alex'
}
let developerName = 'Alex';

setName(newDeveloper, 'Alexey');
setName(developerName, 'Alexey');

console.log(newDeveloper);
console.log(developerName);
// у строки не поменяется значение, потому что строка это не ссылочный тип

console.log({} === {}); // false
console.log([] === []); // false

const entity = {};
const entityCopy = entity;
console.log(entity === entityCopy); // true - здесь мы сравниваем ссылки не объекты


// перебор объектов, создание массивов из объектов


