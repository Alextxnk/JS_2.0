// типы данных в JS

// Примитивы - простые типы данных (7 примитивных типов данных)
// Не примитивы - сложные типы данных (1 не примитивный - object)

// typeof
typeof('Alex')
typeof 'Alex'

// 1. string
const favoriteDrink = 'Coffee';
console.log('favoriteDrink:', favoriteDrink);
console.log(typeof favoriteDrink);
console.log('---');

// 2. number
const numberOfCups = 3;
console.log('numberOfCups:', numberOfCups);
console.log(typeof numberOfCups);
console.log('---');

// 3. boolean
const isColdDrink = false;
console.log('isColdDrink:', isColdDrink);
console.log(typeof isColdDrink);
console.log('---');

// 4. null - пусто, значение неизвестно 
const studentFavoriteDrink = null;
console.log('studentFavoriteDrink:', studentFavoriteDrink);
console.log(typeof studentFavoriteDrink); // typeof null - object, это исключение
console.log(typeof console.log); // function, тоже исключение, выводит несуществующий тип данных
console.log('---');

// 5. undefined - значение не было присвоено
let carOwner;
console.log('carOwner:', carOwner);
console.log(typeof carOwner);
console.log('---');

// 6. object
const drink = {
   // key: value,
   favoriteDrink: 'Coffee',
   numberOfCups: 3,
   isColdDrink: false,
   studentFavoriteDrink: null,
   carOwner: undefined
}
console.log('drink:', drink);
console.log(typeof drink);
console.log('---');

// 7. symbol - нужен для создания уникальных ключей объекта
const id = Symbol('id');
console.log('id:', id);
console.log(typeof id);
console.log('---');

// 8. bigint - большое число  (2^53 - 1)
const bigIntNumber = BigInt(10); // можно просто сразу написать 10n
console.log('bigIntNumber:', bigIntNumber); // 10n - n означает, что это тип данных BigInt
console.log(typeof bigIntNumber);
console.log('---');
