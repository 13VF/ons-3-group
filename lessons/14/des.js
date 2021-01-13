const user = {
  name: 'rami',
  id: 123,
  hobby: 'coding'
};

const arr = [ 'Rami', 'El-Austa' ];

// const name = user.name;
// const id = user.id;
// const hobby = user.hobby;

// const uName = arr[0];
// const uSecondName = arr[1];

const { name, id, madHobby = 'games' } = user;
const [ uName, uSecondName ] = arr;

console.log(name, id, madHobby, uName, uSecondName);

console.log( ['Frontender', ...arr] );
console.log( { surname: 'el-austa', ...user} );