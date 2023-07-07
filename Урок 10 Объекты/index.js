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
const goodInfo = {
   id: 1,
   price: 80,
   currency: '$',
   name: 'shoes'
};

console.log(goodInfo);

// for in
console.log('for in');
for (const key in goodInfo) {
   console.log(key, goodInfo[key]);

}

// Object.keys
console.log('Object.keys');
const keys = Object.keys(goodInfo)
console.log(keys);

// Object.values
console.log('Object.values');
const values = Object.values(goodInfo);
console.log(values);

// Object.entries - объединяет в себе keys и values
console.log('Object.entries');
const entries = Object.entries(goodInfo);
console.log(entries);


// работа с ключами объекта
// ключ в JS может быть двух типов - string | symbol
// Symbol - это специальный тип в JS, который существует для создания уникальных ключей объекта, потому что если создать в объекте два одинаковых ключа, то выведется только значение второго
// в целом можно присвоить сколько угодно ключей с одинковым именем ключа, выведется только значение последнего ключа

// если наш ключ будет типом данных Symbol, то тогда такой проблемы не возникнет

const id = Symbol('id');

const user = {
   [id]: 1,
   name: 'Alex'
   // 10: '123',
   // undefined: undefined,
   // [false]: false
}

console.log(user);

// получение значения
console.log(user[id]); // 1


// in
console.log('in');
console.log('name' in user); // true
console.log('key' in user);  // false

// проверка ключа Symbol
console.log(id in user); // true


// Объединение нескольких объектов в один 
// 1 способ - рекомендуется использовать этот способ
// ...
console.log('spread');
const developerInfo = {
   age: 25,
   experience: 3
}

const developerExtraInfo = {
   height: 180,
   isJunior: false
}

const developerSpread = {
   ...developerInfo,
   ...developerExtraInfo
}

// если в объектах будут ключи с одинаковым назаванием, берется значение из последнего ключа
console.log(developerSpread);


// 2 способ - более старый
// Object.assign
console.log('Object.assign');
const developer2 = Object.assign(developerInfo, developerExtraInfo);
console.log(developer2);


// Опциональная цепочка ?. - идеальный способ проверить содержится ли элемент в объекте
console.log(developer?.jobAllInfo?.framework); // ReactJS

