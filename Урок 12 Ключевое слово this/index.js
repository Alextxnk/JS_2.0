// Ключевое слово this

// Что такое this и зачем он нужен 
// this - это ключевое слово, которое указывает на текущий контекст выполнения кода
// чаще всего this являлется именно объектом
// this - тип данных object

console.log(this); // ссылается на глобальный объект window

const user = {
   name: 'Alex',
   yearOfBirth: 2002,
   // 1 способ записи функций в объект
   getName() {
      return this.name; // this ссылается на объект user, тк находится внутри этого объекта
   },
   calculateAge() {
      const currentYear = new Date().getFullYear();
      console.log('currentYear', currentYear);
      return currentYear - this.yearOfBirth;
   },
   // 2 способ записи функций в объект
   getAllInfo: function() {
      const age = this.calculateAge();
      console.log(`Имя: ${this.name}, Возраст: ${age}`);
   }
}

console.log(user.getName()); // Alex
console.log(user.calculateAge()); // 21
user.getAllInfo(); // Имя: Alex, Возраст: 21


// bind, call, apply - помогают привязать к функции определенный контекст
// все эти методы выполнют одну функцию - привязывают контекст к какой-либо функции,
// но у них есть ключевые различия


const newUser = {
   name: 'Dima'
}

const userName = user.getName.call(newUser);
console.log('userName:', userName); // Dima

console.log('-------------------------------------------------------');

// продолжение

const mainHero = {
   fullName: 'SpiderMan',
   health: 65,
   strength: 5
}

const badHero = {
   fullName: 'Joker',
   health: 55,
   strength: 7
}


// мы используем внутри этой функции this и это нам говорит о том, что эта функция не завязана на каком-то определенном объекте  

function printHeroInfo(extraInfo = '') {
   console.log('this:', this); // window
   console.log(`Имя: ${this.fullName}, Здоровье: ${this.health}, Сила: ${this.strength}, ${extraInfo}`);
}

console.log('без привязки контекста');
printHeroInfo(); // Имя: undefined, Здоровье: undefined, Сила: undefined, 

// Методы отличаются способом передачи дополнительных параметров
// в call параметры передаются через запятую, а в apply в массив

console.log('call');
printHeroInfo.call(badHero, 'Роль: Злодей'); // Имя: Joker, Здоровье: 55, Сила: 7, Роль: Злодей
console.log('apply');
printHeroInfo.apply(badHero, ['Роль: Злодей']); // то же самое выводится


// отличие от двух других методов в том, что bind не вызывает функцию, 
// он создает новую функцию с новым контекстом 
console.log('bind');
const bindedPrintHeroInfo = printHeroInfo.bind(mainHero, 'Роль: Герой');
bindedPrintHeroInfo(); // Имя: SpiderMan, Здоровье: 65, Сила: 5, Роль: Герой

// чтобы привязать контекст какой-то определенной функции,
// у нас есть три метода: bind, call и apply
// call и apply сразу же вызывают функцию с новым контекстом,
// который передается в качестве первого параметра
// bind не вызывает функцию, а создает новую функцию с новым контекстом и с переданными параметрами



// потеря контекста this
const newUser2 = {
   name: 'Alex',
   programmingLanguage: 'JavaScript',
   getName() {
      console.log('this:', this); 
      return this.name;
   },
   // у стрелочной функции нет своего this
   // и поэтому this в данном случае будет ссылаться уже на контекст выше  
   getProgrammingLanguage: () => {
      console.log('this:', this); // window
      return this.programmingLanguage;
   },
   // вот так будет работать с ключевым словом function
   newGetProgrammingLanguage: function() {
      console.log('this:', this); // window
      return this.programmingLanguage;
   }
}

console.log('getName:', newUser2.getName()); // Alex

// потерялся конекст, потому что мы вызываем функцию newGetName без какого-либо контекста
// 1 случай потери контекста
console.log('1 случай');
const newGetName = newUser2.getName;
console.log('newGetName:', newGetName()); // пусто, ссылается на window

console.log('--------------------------------');
// присвоили контекст
console.log('присвоили контекст');
console.log('newGetName:', newGetName.call(newUser2)); // Alex


// 2 случай потери контекста
// поменяли на стрелочную функцию
console.log('2 случай');
console.log('getProgrammingLanguage:', newUser2.getProgrammingLanguage()); // undefined
// даже если мы сделаем call - у нас все равно будет undefined


console.log('newGetProgrammingLanguage:', newUser2.newGetProgrammingLanguage()); // JavaScript
