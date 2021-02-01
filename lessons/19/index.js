// console.log('Я обычная программа, пишу тебе из начала кода!');

// const myPromiseRobot = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const randomNumber = Math.floor( Math.random() * 11 );

//     ( randomNumber > -1 )
//       ? resolve('Он здесь, всё в порядке!')
//       : reject('Кажется он не дошел, нужна помощь!');
//   }, 5000);
// });

// myPromiseRobot
//   .then((result) => {
//     console.log(result);
//     return '123';
//   })
//   .then( (result) => { console.log(result) } )
//   .catch( (result) => { console.log(result, 'Вызываю поддержку с воздуха!') } )
//   .finally( () => { console.log('Я служил тебе верно, хозяин, пришла пора уходить...') } );

// console.log('Я обычная программа, завершаю работу...');

async function doSomething6() {
  try {
    const result = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    console.log( await result.json() );
  } catch(error) {
    console.log(error);
  }
}

doSomething6();