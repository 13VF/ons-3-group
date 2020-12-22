const myNum = 4;
const myString = '1';
const myBool = true;
const myObj = {};

// console.log(typeof Number('11') ); // String(), Boolean()

function myFunction(toConsole) {
  console.log('Вы хотели вывести в консоль: ' + toConsole);
}

/* if (myNum > 3) {
  myFunction('Больше трёх');
} else if (myNum < 3) {
  myFunction('Меньше трёх');
} else {
  myFunction('Равен трём');
} */

console.log( (myNum > 3) ? 'Больше!' : 'Небольше:)' );

const isDisabled = true;
const textToButton = isDisabled ? 'Выключена' : 'Нажми на меня';