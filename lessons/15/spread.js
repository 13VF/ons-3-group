function summ( ...numbers ) {
  console.log(numbers);
  // магический кодик который возвращает сумму всех значений
}

// summ( 1, 2, 3 );
const arr = [ 1, 2, 3 ];

const [ firstNumber, ...rest ] = arr;

console.log(firstNumber, rest);