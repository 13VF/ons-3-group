let primitiveValue = 'я обычная примитивная строка';
let objectValue = {
  field: 'wololo'
};

const changePrimitive = primitive => {
  primitive = 'что-то другое';
  console.log(primitive.substring(0, 3));
  // primitiveValue = 'поменяем что-то в ней';
};

const changeFieldInObject = obj => {
  obj.field = 'новое значение';
};

changePrimitive(primitiveValue);
changeFieldInObject(objectValue);

console.log(primitiveValue);
console.log(objectValue);