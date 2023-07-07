// Ключевое слово this

// Что такое this и зачем он нужен 
// this - это ключевое слово, которое указывает на текущий контекст выполнения кода
// чаще всего this являлется именно объектом
// this - тип данных object

console.log(this); // ссылается глобальный объект window

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

const newUser = {
   name: 'Dima'
}

const userName = user.getName.call(newUser);
console.log('userName:', userName); // Dima


