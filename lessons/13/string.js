'use strict';

// const str1 = 'Привет! Меня зовут: ';
// const str3 = ' и я изучаю JS.';
// console.log(str1 + name + (age ? (', мне ' + age + ' лет,') : ('')) + str3);

/*
function sayHelloToConsole(username = 'Аноним', age) {
  const ageToRender = age ? `, мне ${age} лет,` : '';

  console.log( `Привет!\nМеня зовут: ${ username }${ ageToRender } и я изучаю JS.` );
}

sayHelloToConsole(undefined, 30);
*/

const mySuperVariable = 'My name is Groot! My name is Groot.';
const startIndex = mySuperVariable.indexOf('!');

console.log(mySuperVariable.substring(startIndex + 1));