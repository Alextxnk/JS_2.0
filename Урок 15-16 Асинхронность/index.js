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
// then принимает в себя callback, вызывающийся при успешном выполнении промиса

// 2. catch вызывается, если была ошибка, выполняется reject

// 3. finally вызывается в последнюю очередь независимо от исхода

promise
   .then((successMessage) => {
      console.log(`successMessage: ${successMessage}`); // successMessage: Alex является JavaScript разработчиком
   })
   .catch((error) => {
      console.log('error', error); // error: Alex НЕ является JavaScript разработчиком
   })
   .finally(() => {
      console.log('finally'); // finally
   });

// fetch - это специальная функция, с помощью которой мы можем получать данные по url
// fetch(url); // получаем промис
// const url = 'https://jsonplaceholder.typicode.com/todos/1';

// у fetch также есть then, catch и finally
// вторым параметром передается объект с настройками нашего запроса
// далее then необходимо декодировать(расшифровать) в формате JSON

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

const createTodoElement = (text) => {
   const todoElement = document.createElement('li');
   const todoElementAnchor = document.createElement('a');
   todoElementAnchor.href = '#';
   todoElementAnchor.textContent = text;
   todoElement.append(todoElementAnchor);

   return todoElement;
};

const toggleLoader = () => {
   const loader = document.querySelector('#loader');
   console.log('loader', loader);

   const isHidden = loader.hasAttribute('hidden');
   if (isHidden) {
      loader.removeAttribute('hidden');
   } else {
      loader.setAttribute('hidden', '');
   }
};

const dataContainer = document.querySelector('#data-container');
console.log('dataContainer', dataContainer);

const getAllTodos = () => {
   toggleLoader();

   const result = fetch(TODOS_URL, {
      method: 'GET'
   });

   console.log('result', result);

   result
      .then((response) => {
         // console.log('fetch response', response);

         if (!response.ok) {
            throw new Error('Ошибка запроса');
         }

         return response.json();
      })
      .then((todos) => {
         console.log('todos', todos);
         todos.forEach((todo) => {
            const todoHTML = createTodoElement(todo.title);
            dataContainer.append(todoHTML);
         });
      })
      .catch((error) => {
         console.log('error', error);
      })
      .finally(() => {
         toggleLoader();
      });
};

getAllTodos();

// Promise.all - это специальный метод у промисов, который нужен для того,
// чтобы обработать список некоторых промисов
// возвращает fullfilled в том случае, если все переданные промисы тоже имеют статус fullfilled
// если хотябы один промис имеет статус rejected, то тогда Promise.all вернет rejected

// возвращает промис, который будет выполнен тогда, когда все промисы
// переданные в качестве массива будт выполнены успешно,
// либо когда один из промисов вернет ошибку

/* Promise.all([
   new Promise(), 
   new Promise(), 
   new Promise()
]); */

// возвращаемые значения:
// fullfilled - value - удачное выполнение промиса
// rejected - error - ошибка

const todosIds = [43, 10, 5, 100, 101];

const getTodosByIds = (ids) => {
   const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
   Promise.all(requests)
      .then((responses) => {
         const dataResults = responses.map((response, index) => {
            console.log(`response ${index}`, response);
            return response.json();
         });
         console.log('dataResults', dataResults);

         return Promise.all(dataResults);
      })
      .then((todos) => {
         console.log('todos', todos);
         todos.forEach((todo) => {
            const todoHTML = createTodoElement(todo.title);
            dataContainer.append(todoHTML);
         });
      })
      .catch((error) => {
         console.log('error', error);
      });
};

getTodosByIds(todosIds);

// Promise.race - тоже принимает в себя массив промисов и возвращает самый быстро выполненый промис

const promise1 = new Promise((resolve) => {
   setTimeout(() => {
      resolve('First');
   }, 1000);
});

const promise2 = new Promise((resolve) => {
   setTimeout(() => {
      resolve('Second');
   }, 500);
});

const promise3 = new Promise((resolve) => {
   setTimeout(() => {
      resolve('Third');
   }, 250);
});

Promise.race([promise1, promise2, promise3])
   .then((result) => {
      console.log('result', result); // Third - выполнится быстрее всего
   })
   .catch((error) => {
      console.log('error', error);
   });

// главная проблема then, catch, finally и их замена на
// async, await

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

fetch(USERS_URL)
   .then((response) => response.json())
   .then((users) => {
      console.log('users', users);
      const firstUserId = users[0]?.id;
      console.log('firstUserId', firstUserId);

      fetch(`${TODOS_URL}?userId=${firstUserId}`)
         .then((response) => response.json())
         .then((todos) => {
            console.log('NewTodos', todos);
         })
         .catch((error) => {
            console.log('error', error);
         });
   })
   .catch((error) => {
      console.log('error', error);
   });

// async, await
// если мы указываем перед функцией async,
// то она автоматически возвращает промис

// также у нас существует конструкция await(ожидать),
// которая существует для обработки асинхронных запросов

// так наш код не растет вправо, а идет линейно
// это нам позволяет делать конструкция async, await

// ошибки тут обрабатываются при помощи try, catch, finally

// если хотябы в одной строчке кода try будет ошибка, то выполнится catch
try {
} catch (error) {
   console.log('error', error);
} finally {
   console.log('finally');
}

const getTodosWithUserData = async () => {
   try {
      const response = await fetch(USERS_URL); // await будет ждать, пока не выполнится запрос
      console.log('asyncResponse', response);

      if (!response.ok) {
         throw new Error('Ошибка в получении данных о пользователях');
      }

      const users = await response.json();
      console.log('asyncUsers', users);
      const firstUserId = users[0]?.id;

      const todosResponse = await fetch(`${TODOS_URL}?userId=${firstUserId}`);

      if (!todosResponse.ok) {
         throw new Error('Ошибка в получении данных о задачах');
      }

      const todos = await todosResponse.json();
      console.log('asyncTodos', todos);
   } catch (error) {
      console.log('error', error);
   } finally {
      console.log('asyncFinally');
   }
};

const asyncPromise = getTodosWithUserData();
console.log('asyncPromise', asyncPromise);
