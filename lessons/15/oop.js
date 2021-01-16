// [[Prototype]]

const arr = [ 1, 2, 3 ];

// arr.forEach(n => console.log(n));
// console.log([].__proto__.__proto__.__proto__);

const obj = {
  firstname: 'Rami',
  lastname: 'El-Austa'
};





function Animal(name) {
  this.name = name;
}

Animal.prototype.say = function() {
  console.log(this.name);
}

const myAnimal = new Animal('Shmebulok!');
myAnimal.say();

function Gnome(name, hat) {
  this.name = name;
  this.hat = hat;
}

Gnome.prototype = Animal.prototype;

const gnome1 = new Gnome('Shmebulok 1!', '--^^--');
gnome1.say();

console.log(gnome1.__proto__);






const ani = {
  eats: true
};

const rabbit = {
  jumps: true
};

rabbit.__proto__ = ani;