const arr = [ 1, 2, 3, 12, 13, 6, 66 ];

function getSumm(arr) {
  let summ = 0;

  arr.forEach(num => {
    summ += num;
  });

  return summ;
}

function getSummWithReduce(arr) {
  return arr.reduce( ( accumulator, number ) => {
    return accumulator + number;
  }, 0);
}

// console.log(getSummWithReduce(arr));

const users = [
  {
    name: 'rami',
    id: 1,
    posts: 13
  },
  {
    name: 'ann',
    id: 2,
    posts: 4
  },
  {
    name: 'petr',
    id: 3,
    posts: 5
  }
];

console.log(
  users
    .map( user => Math.pow(user.posts, 2) ) // [ 13, 4, 5 ]
    .reduce( (acc, qua) => {
      return (acc += qua);
    }, 0) // 22
);
