// DOM

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
