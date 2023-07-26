// Асинхронность (Promise и fetch)

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

// resolve - это функция, которая вызывается, если промис был выполнен успешно
// reject - вызывается в случае ошибки

// pending - undefined - ожидание
// fullfilled - value - удачное выполнение промиса
// rejected - error - ошибка

const developer = {
   name: 'Alex',
   isJSDev: true
};

// для обработки асинхронного кода у нас есть промис,
// промис принимает в себя функцию и данная функция принимает в себя 
// еще две функции resolve и reject
// resolve нужен, чтобы выполнить промис со статусом fullfilled
// reject - для того, чтобы промис выполнился со статусом rejected

const promise = new Promise((resolve, reject) => {
   if (developer.isJSDev) {
      setTimeout(() => {
         resolve(`${developer.name} является JavaScript разработчиком`);
      }, 3000);
   } else {
      reject(`${developer.name} НЕ является JavaScript разработчиком`);
   }
});

console.log(promise); // Promise { <pending> } | Promise { <rejected> 'Alex НЕ является JavaScript разработчиком' }

// также у промисов есть три метода: 
// then, catch, finally
// 1. then будет вызываться, когда будет успешное выполнение промиса - выполняется resolve
// then принимает в себя callback

// 2. catch вызывается, если была ошибка, выполняется reject

// 3. finally вызывается в последнюю очередь независимо от исхода

promise
   .then((successMessage) => {
      console.log(`successMessage: ${successMessage}`); // successMessage: Alex является JavaScript разработчиком
   })
   .catch((err) => {
      console.log(`error: ${err}`); // error: Alex НЕ является JavaScript разработчиком
   })
   .finally(() => {
      console.log('finally'); // finally
   });
