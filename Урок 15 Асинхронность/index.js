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

const promise = new Promise((resolve, reject) => {
   if (developer.isJSDev) {
      setTimeout(() => {
         resolve(`${developer.name} является JavaScript разработчиком`);
      }, 3000);
   } else {
      reject(`${developer.name} НЕ является JavaScript разработчиком`);
   }
});

console.log(promise); // Promise { <pending> }


// then, catch, finally
// then будет вызываться, когда будет выполняться resolve
promise.then(() => {

})

