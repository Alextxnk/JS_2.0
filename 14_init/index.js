// 1. DOM

const tasksBlock = document.getElementById('tasks'); // id
console.log(tasksBlock);

// document - это глобальный объект, который позволяет нам легко работать 
// с html элементами в JS

// дерево начинается с document, потом html и остальные

const tasksWrapper = document.getElementsByClassName('tasks__wrapper'); // class
console.log(tasksWrapper); // возвращает коллекцию (псевдомассив) HTMLCollection

const button = document.getElementsByTagName('button'); // tag
console.log(button); // возвращает коллекцию (псевдомассив) HTMLCollection


// эти методы являются устаревшими, есть более современные способы получения html элементов
// querySelector, querySelectorAll
// querySelector ищет только первое совпадение
// querySelectorAll возвращает список всех совпадений в виде псевдомассива NodeList

// рекомендуется использовать querySelector, потому что он является более функциональным
// и более своременным

const tasksBlock2 = document.querySelector('#tasks'); // id
console.log(tasksBlock2);

const tasksWrapper2 = document.querySelector('.tasks__wrapper'); // class
console.log(tasksWrapper2); 

const button2 = document.querySelectorAll('button'); // tag
console.log(button2); // возвращает NodeList

const input = document.querySelector('[name="taskName"]'); // attribute name
console.log(input);

button2.forEach((button, index) => {
   console.log(index, button);
})


// можно получать родительские крупные элементы, а потом уже от них обращаться к другим
// это поможет уменьшить количество вершин в DOM-дереве и оптимизировать поиск по нему



// 2. Свойства и методы HTML элементов
// изменение по className
console.log(tasksWrapper2.className); // tasks__wrapper
// tasksWrapper2.className = 'tasks__wrapper_1';
// console.log(tasksWrapper2.className); // tasks__wrapper_1


// изменение по id
console.log(tasksBlock2.id); // tasks
// tasksBlock2.id = 'tasks2';
// console.log(tasksBlock2.id); // tasks2


const submitButton = document.querySelector('.create-task-block__button');
console.log(submitButton.innerText);
console.log(submitButton.textContent);

submitButton.textContent = 'Создать новую задачу';


// innerHTML
console.log(tasksBlock2.innerHTML);

// отличия: если в textContent мы пропишем какие-то теги, то они не будут обработаны
// а innerHTML делает перерендер 

// children

const createTaskForm = document.querySelector('.create-task-block');
console.log(createTaskForm);
// тут хранятся все children, которые содержатся внутри тега form,
// они являются детьми данного тега, т.к. расположены внутри него 

// еще children доступны только для чтения, мы не можем заменить их значения
console.log(createTaskForm.children); // input, button, button


// data-атрибуты
const firstNavButton = document.querySelector('.main-navigation__button-item');
console.log(firstNavButton.dataset); // получили объект {buttonId: '1'}
// вот так выглядит в HTML data-button-id="1"
// а в JS dataset.buttonId
console.log(firstNavButton.dataset.buttonId); // 1

// мы можем изменять дата-атрибуты
firstNavButton.dataset.buttonId = 10;
console.log(firstNavButton.dataset.buttonId); // 10


// style - c его попмщью можно изменять и получать конкретные стили
console.log(firstNavButton.style); // получаем огромный объект со свойствами

firstNavButton.style.fontWeight = 'bold';
firstNavButton.style.boxShadow = 'inset 0 0 0 2px #fff';



// 3. создание HTML элементов и добавление их в DOM
// createElement благодаря этому методу мы можем создавать HTML элементы

const newNawButton = document.createElement('a');
newNawButton.className= 'main-navigation__button-item';
newNawButton.href ='#tasks_expired';
newNawButton.dataset.buttonId = '4';
newNawButton.textContent = 'Просроченные задачи'
console.log(newNawButton);


// append, prepend - чтоб добавить в DOM
// append - добавляет в конец
// prepend - добавляет в начало
const mainNavigation = document.querySelector('.main-navigation');
console.log(mainNavigation);

// mainNavigation.append(newNawButton); // добавили в конец
// mainNavigation.prepend(newNawButton); // добавление в начало

// этот метод тоже добавляет элементы, принимает разные параметры
// beforebegin, afterbegin, beforeend, afterend 
mainNavigation.insertAdjacentElement('beforeend', newNawButton);



// 4. Остальные методы HTML элементов
// remove - удаление элементов из DOM

newNawButton.remove(); // удалили элемент

// closest ищет ближайший родительский элемент, либо тот элемент,
// который стоит перед точкой
const taskItemText = document.querySelector('.task-item__text');
console.log(taskItemText);

const taskItem = taskItemText.closest('.task-item');
console.log(taskItem);

// classList: add, remove, toggle
// этот метод работает с классами нашего HTML элемента

const firstNavigationButton = document.querySelector('.main-navigation__button-item');
console.log(firstNavigationButton);

// add - добавляет новый класс к уже существующему
firstNavigationButton.classList.add('main-navigation__button-item_selected');


// remove - удаляет класс
firstNavigationButton.classList.remove('main-navigation__button-item_selected');


// toggle - объединяет в себе add и remove
// если класс из переданного параметра существует, то он его удаляет
// а если не существует, то добавляет 

// добавит класс
firstNavigationButton.classList.toggle('main-navigation__button-item_selected'); 
// удалит класс
firstNavigationButton.classList.toggle('main-navigation__button-item_selected');  



const createTaskInput = document.querySelector('.create-task-block__input');
console.log(createTaskInput);


// hasAttribute и getAttribute
console.log(createTaskInput.hasAttribute('type')); // true
console.log(createTaskInput.getAttribute('type')); // text
console.log(createTaskInput.getAttribute('value')); // Посмотреть урок по JavaScript


