// Callback - это функция, которая передается как параметр внутрь другой функции

// примеры передачи Callback
const promise = new Promise(() => {});

setTimeout(() => {}, 500);

const FIRST_TODO_URL = 'https://jsonplaceholder.typicode.com/todos/1';

const getTodo = (callback) => {
   fetch(FIRST_TODO_URL)
      .then((response) => response.json())
      .then((todo) => {
         // console.log('todo', todo);
         callback(todo);
      })
      .catch((error) => {
         console.log('error', error);
      });
};

getTodo((todoItem) => {
   console.log('todoItem', todoItem);
});

// Callback это не всегда хорошо, потому что из-за них код растет вправо

// ------------------------------------------------------------------
// Синхронный код - выполняется пошагово, сверху вниз

/* setTimeout(() => console.log(2), 0); // 4

Promise.resolve(1).then(console.log); // 3

new Promise((res) => {
   console.log(3); // обычный console.log
   res(3);
}) // 1

console.log(4); // 2 */

// Очередность выполнения в Event Loop
// 1 - синхронная - обычные таски. 3, 4, 1, 2
// 2 - микротаски - промисы. 1. 0
// 3 - макротаски - таймауты. 2

// setTimeout
// setInterval
// Они являются асинхронными

// вызывается один раз
/* setTimeout(() => {
   console.log('setTimeout');
}, 1000); */

// вызывается через интервал времени, много раз
/* setInterval(() => {
   console.log('setInterval');
}, 5000) */
// ------------------------------------------------------------------

// Event Loop. Call Stack (Стек вызовов)

// Event Loop(событийный цикл) - это бесконечный цикл,
// в котором движок JS ожидает задачи, выполняет их и потом ждет новые задачи
// у этого цикла есть свой порядок выполнения

function sayHello(name) {
   console.log(`Hello ${name}`);
}

console.log('start');
sayHello('Alex 1');

// он проходит через Call Stack (Стек вызовов) и попадает в Callback Queue (Очередь вызовов), 
// далее ждет конца выполнения стека 

setTimeout(() => {
   sayHello('Dima 2');
}, 0);

sayHello('Bob 3');
console.log('end');

// после выполнения всего синхронного кода Event Loop идет смотреть, 
// что есть в Callback Queue (Очереди вызовов) и выполняет операции

// Web API - сущности, которые нам предоставляет браузер:setTimeout и setInterval

// Они являются асинхронными, их предоставляет движок браузера
// эти функции обрабатываются в специальной сущности - Callback Queue (Очереди вызовов) 

// FIFO - очередь (англ. First In, First Out – «Первым пришёл — первым ушёл») и 
// LIFO - стек (англ. Last In, First Out – «последним пришёл — первым ушёл») 

