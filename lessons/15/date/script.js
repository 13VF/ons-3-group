const wrapper = document.querySelector('.wrapper');
const allElements = document.querySelectorAll('.element');

// const allElementsHTML = Array.from(allElements).map( el => console.log(el.innerHTML) );
// console.dir(allElements);

const currentDate = new Date();
// console.log(currentDate);
// const ms = currentDate.getTime();
// console.log( (new Date(ms)) );


// TODO: добавлять нули вначале строки
const timeElement = document.querySelector('.time');

function getTimeString(dateObject) {
  return `${dateObject.getHours()}:${dateObject.getMinutes()}:${dateObject.getSeconds()}`;
}

timeElement.innerHTML = getTimeString(currentDate);

setInterval( () => {
  const time = new Date();
  timeElement.innerHTML = getTimeString(time);
}, 1000 );

const payloadObject = {
  field1: 'wololo',
  field2: 'my name is groot!'
};
const payloadString = JSON.stringify(payloadObject);

console.log( JSON.parse(payloadString) );
