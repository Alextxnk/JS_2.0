// классы + ООП
// Объектно ориентированное программирование - это методология программирования,
// в основе которой лежат объекты

// мы будем создавать объекты с помощью некоторых сущностей: function и class

function animal(name) {
   this.name = name;

   this.getName = function() {
      return this.name;
   }
}


const cat = new animal('Cat');
console.log('cat', cat);
console.log(cat.name); // Cat
console.log(cat.getName()); // Cat


// чтобы передавать что-то в класс у нас есть специальная сущность - конструктор
// конструктор - это специальная функция, которая вызывается сразу же при создании экземпляра класса
// и инициализирует начальные параметры
// основная цель конструктора - инициализация начальных значений

console.log('----------------------------------------');

// современная версия классов
class Pet {
   constructor(name) {
      this.name = name;
   }

   getName() {
      return this.name;
   }
}

// создаем экземпляр класса
const dog = new Pet('Dog');
console.log(dog); // Dog



// 4 принципа ООП
// 1. Наследование
// 2. Инкапсуляция
// 3. Полиморфизм
// 4. Абстракция

// Наследование - это создание дочерних классов на основе родительских
// наследование помогает нам декомпозировать логику, создавая похожие сущности от одного шаблона  

class Plane {
   constructor(type, numberOfPassengers) {
      this.type = type;
      this.numberOfPassengers = numberOfPassengers;
   }

   startFlight() {
      console.log('Fly');
   }
}

const plane = new Plane('Пассажирский', 100);
console.log(plane);
// вызов метода класса
plane.startFlight(); // Fly

class MilitaryPlane extends Plane {
   constructor(type) {
      // с помощью super - вызываем конструктор родительского класса 
      // и передаем параметры type и numberOfPassengers
      // super - вызвал конструктор родительского класса и инициализировали параметры
      super(type, 0);
      this.numberOfGuns = 0;
   }

   setNumberOfGuns(numberOfGuns) {
      this.numberOfGuns = numberOfGuns;
   }

   shoot() {
      console.log('Shooting...');
   }
}

const militaryPlane = new MilitaryPlane('Военный');
console.log(militaryPlane);
militaryPlane.startFlight(); // можем вызывать родительские методы,
// если написать такой же метод в дочернем классе, тогда вызовется он  

militaryPlane.setNumberOfGuns(4);
militaryPlane.shoot(); // Shooting...
console.log(militaryPlane);


// inctanceof - проверяет принадлежит ли объект какому-то определенному классу
console.log(militaryPlane instanceof MilitaryPlane); // true
console.log(militaryPlane instanceof Plane); // true



// Инкапсуляция - это скрытие данных от доступа вне класса либо при наследовании
// изначально все поля являются public

class Developer {
   #salary; // инициализируем поле, с ним можем работать только внутри класса

   constructor(name, programmingLanguage) {
      this.name = name;
      this.programmingLanguage = programmingLanguage;
      this.#salary = 3000; // private поле с помощью #
   }

   // получение значения приватного поля с помощью геттера
   get getSalary() {
      return this.#salary;
   }

   // изменение значения приватного поля с помощью сеттера
   set setSalary(salary) {
      this.#salary = salary;
   }

   startCoding() {
      console.log(`${this.name} is coding`);
      console.log(`Salary is ${this.#salary} $`);
      this.#printProgrammingLanguage();
   }

   // private метод
   #printProgrammingLanguage() {
      console.log(`Programming language is ${this.programmingLanguage}`);
   }
}

const developer = new Developer('Alex', 'JavaScript');
console.log(developer);
developer.startCoding(); // Alex is coding Salary is 3000 $ Programming language is JavaScript
// обращение к private методу
// developer.printProgrammingLanguage(); // Programming language is JavaScript

// поля и методы к которым мы можем обращаться через точку называются публичными
// модификаторы доступа
// public
// private - #

class JuniorDeveloper extends Developer {
   constructor(name, programmingLanguage) {
      super(name, programmingLanguage)
   }
}

const juniorDeveloper = new JuniorDeveloper('Alex', 'JS');
console.log(juniorDeveloper);
// juniorDeveloper.printProgrammingLanguage(); // Programming language is JS


// к private полю мы не можем обратиться через точку ни в родительском, ни в дочернем классах
// console.log(developer.#salary); // private поле

// get и set 
// get ипользуется для того, чтобы получить значение приватного поля
// 
console.log(developer.getSalary); // 3000

developer.setSalary = 2500;
console.log(developer.getSalary); // 2500



// Полиморфизм - это одно действие и несколько реализаций
class Animal {
   constructor(name) {
      this.name = name;
   }

   // одно действие и несколько реализаций
   makeSound() {}
}

class Dog extends Animal {
   constructor(name) {
      super(name);
   }

   makeSound() {
      console.log('Гав-гав');
   }
}

class Horse extends Animal {
   constructor(name) {
      super(name);
   }

   makeSound() {
      console.log('Иго-го');
   }
}



// Абстракция - это использование только тех характеристик объекта, 
// которые с наибольшей точностью представляют его в какой-то определенной системе 
class Footballer {
   constructor(name, club) {
      this.name = name;
      this.club = club;
   }

   shoot() {}
   celebrateGoal() {}
   pass() {}
}

// класс Footballer является абстрактным, т.к. он описывает какие-то общие параметры,
// которые присущи каждому футболисту 

// с помощью абстракного класса мы можем создавать дочерние классы, 
// такие как нападающий, голкипер, защитник и т.д. 
// и в дочерних классах уже конкретно описывать параметры класса


// тоесть в классе Footballer мы используем только те характеристики объекта, 
// которые с большей точностью представляют его в данной системе 
// и все эти параметры являются обобщенными, 

// конкретизацию для всех этих параметров мы делаем уже в дочерних классах 

class Forward extends Footballer {
   constructor(name, club) {
      super(name, club);
   }

   shoot() {
      console.log('Очень сильный удар');
   }

   celebrateGoal() {
      console.log('Ураа, гол');
   }

   pass() {
      console.log('Средненький пас');
   }
}



// статические поля и методы
class Car {
   static isCar(car) {
      return car instanceof Car;
   }

   static #initialParams = {
      name: 'Audi',
      maxSpeed: 320
   }

   constructor(name, maxSpeed) {
      this.name = name || Car.#initialParams.name;
      this.maxSpeed = maxSpeed || Car.#initialParams.maxSpeed;
   }

   drive() {
      console.log(`Car ${this.name} is driving`);
      console.log(`Max speed is ${this.maxSpeed}`);
   }
}

const car = new Car('BMW', 350);
console.log(car);
car.drive(); 

const isCar = Car.isCar(car);
console.log(isCar); // true

// car.isCar(); // ошибка, т.к. это статический метод
// к статическому полю или методу мы получаем доступ при обращении к классу напрямую

// статические поля и методы нужны, когда поле либо метод не принадлежат 
// к конкретному объекту, а принадлежат к классу,
// либо когда внути нашего метода не используется this

// если в каком-либо методе или поле есть this, то оно не может быть статическим

const initialParamsCar = new Car();
console.log(initialParamsCar);
initialParamsCar.drive();

// static нужен нам чтобы создавать поля и методы, которые принадлежат именно классу,
// а не каким-то конкретным его объектам,
// также в static нельзя использовать this

