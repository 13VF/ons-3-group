const superheroes = ['Batman', 'Superman', 'Spiderman', 'Aquaman'];

// console.log(Array.isArray(arr));

// console.log(superheroes.length);
// console.log(superheroes[superheroes.length - 1]);

/*
superheroes.push('Wonderwoman');
console.log( superheroes.pop() );
superheroes.unshift('Hulk');
console.log( superheroes.shift() );

console.log(superheroes);
*/

// for (let i = 0; i < superheroes.length; i++) {
//   console.log(superheroes[i]);
// }

// superheroes.forEach( (element, index) => {
//   console.log(element, index);
// });

superheroes
  .map( element => {
    return element.toUpperCase();
  })
  .forEach( element => {
    console.log(element);
  });

// console.log(superheroes, superheroesUppercase);

const user = {
  name: 'Rami',
  age: 30,
  id: 1,
  isSuperhero: false,
  accessKeys: [ '15-098a0-9fu', '1029-8745-12' ],
  ons: {
    status: 'Teacher',
    courses: ['Frontend Developer', 'Python 18+']
  },
  authorize() {
    console.log(`User ${this.name} with id ${this.id} wants to authorize!`);
  },
  // sayHello: () => {
  //   console.log(`User ${this.name} says hello!`);
  // }
};

// user.authorize();
// user.sayHello();