// function declaration
// видна везде и до объявления функции
function func1() {
   console.log('func1');
}
func1();

// function expression 
// видна только после объявления функции
const func2 = function() {
   console.log('func2');
}
func2();

// стрелочная функция
const func3 = () => {
   console.log('func3');
}
func3();

