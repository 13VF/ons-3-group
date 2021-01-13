const arr = [1, 2, 3, 4, 5, 6];
const arr2 = [7, 8];

const arr3 = Array.prototype.concat( arr2, arr );

// console.log( arr3.splice(0, 2, 9, 3, 9) );
// console.log( arr3 );

// console.log( arr3.slice(0, 2) );
// console.log( arr3 );

// console.log( arr3.indexOf(1) );
// console.log( arr3.lastIndexOf(9) );

// const indexOfLastNine = arr3.lastIndexOf(9);

// console.log( arr3.splice(indexOfLastNine, 1) );
// console.log( arr3 );

const cars = [
  {
    model: 'bmw',
    year: '1992',
    used: false
  },
  {
    model: 'mercedes',
    year: '1998',
    used: true
  },
  {
    model: 'audi',
    year: '2006',
    used: true
  },
  {
    model: 'zaporozhec',
    year: '1975',
    used: true
  }
];

console.log( cars.find( car => car.model === 'bmw' ) );
console.log( cars.find( car => car.used ) );
console.log( cars.findIndex( car => car.model === 'mercedes' ) );

const indexOfUsedCar = cars.findIndex( car => car.used );
const usedCar = cars[indexOfUsedCar];

console.log( cars.includes(usedCar) );

// cars.splice(1, 1);

console.log( cars.includes(usedCar) );

const usedCars = cars.filter( car => car.used );

