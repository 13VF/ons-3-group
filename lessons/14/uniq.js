const arr1 = [ 1, 2, 2, 3, 3, 3, 3, 3, 3 ];
const arr2 = [ 2, 15, 15, 1, 1, 1, 23, 7, 8, 7, 1, 1 ];

// Вернуть новый массив в котором только уникальные значения.

function onlyUniqueValues(arr) {
  const result = [];
  const sortedArray = arr.sort( (a, b) => a - b );

  sortedArray.forEach( (num, index, array) => {
    if (num === array[index + 1]) {
      return;
    } else {
      result.push(num);
    }
  });

  return result;
}

console.log(onlyUniqueValues(arr2));

function uniq(arr) {
  const res = arr.reduce((acc, num) => {
    acc[num] = true;
    return acc;
  }, {});

  return Object.keys(res).map( num => Number.parseInt(num) );
}

const arrNew = uniq(arr2);

console.log( arrNew.reverse() );
console.log( arrNew.join(' -- ') );
