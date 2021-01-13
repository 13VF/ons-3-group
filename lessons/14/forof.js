const arr = [ 1, 'second', 3, 'four', 5 ];

const obj = {
  one: 1,
  two: 2,
  three: 3,
  four: 4
};

for ( let number of arr ) {
  console.log(number);
}

for ( let entry of Object.entries(obj) ) { // Object.keys() || Object.values()
  console.log(entry);
}

for ( let key in obj ) {
  console.log(key);
}
