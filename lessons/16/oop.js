// [[Prototype]]

// const arr = [ 1, 2, 3 ];

// arr.forEach(n => console.log(n));
// console.log([].__proto__.__proto__.__proto__);

// const obj = {
//   firstname: 'Rami',
//   lastname: 'El-Austa'
// };





// function Animal(name, color) {
//   this.name = name;
//   this.color = color;
// }

// Animal.prototype.say = function() {
//   console.log(`Ohm nom nom, my name is ${this.name}, haha!`);
// }

// const myAnimal = new Animal('Shmebulok', 'unknown');
// // myAnimal.say();

// // myAnimal.say = function() {
// //   console.log(`SHMEBULOOOK! ${this.name}`);
// // }


// const myAnimal2 = new Animal('Ktulhu', 'AAARARRR!!!');
// // myAnimal2.say();


// function Bear(name, color, foodType) {
//   Animal.call(this, name, color);

//   this.foodType = foodType;
// }

// Bear.prototype = Object.create(Animal.prototype);

// Object.defineProperty(Bear.prototype, 'constructor', {
//   value: Bear,
//   enumerable: false,
//   writable: true
// });

// Bear.prototype.roar = function() {
//   console.log('WAAAARARARA!!!');
// };

// const poBear = new Bear('Po', 'B&W', 'bamboo');

// poBear.say();
// poBear.roar();

// console.log(poBear, Object.getPrototypeOf(poBear));





class Animal {
  eats = true;

  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  say() {
    console.log(`Ohm nom nom, my name is ${this.name}, haha!`);
  }
}

const myAnimal = new Animal('Shmebulok', 'unknown');

// console.log(myAnimal, Object.getPrototypeOf(myAnimal));
// myAnimal.say();

class Bear extends Animal {
  bearFood = true;

  bearArrow = () => console.log(this.bearFood);

  constructor(...args) {
    super(...args);

    const [,,foodType] = args;
    this.foodType = foodType;
  }

  roar() {
    console.log('WWARARARARARA!!!');
  }
}

const myBearPooh = new Bear('Pooh', 'brown', 'honey');

// console.log(myBearPooh, Object.getPrototypeOf(myBearPooh));
// myBearPooh.say();
// myBearPooh.roar();
// myBearPooh.bearArrow();


const myObj = {
  foo: 10,

  bar() {
    console.log(this);
  },
  baz: () => console.log(this)
};

const bar = function(arg, arg2) {
  console.log(this, arg, arg2);
}

// myObj.bar();
// myObj.baz();
// bar();

// bar.call(myObj, 1, 2);
// bar.apply(myObj, [1, 2]);

const newBar = bar.bind(myObj);
newBar(1, 2);


const myConst = 1;

(function() {
  console.log(myConst);
})();