// 1. Найти инпут и кнопку на странице и записать их в переменные
const input = document.querySelector('.inputNumber');
const button = document.querySelector('.button');

// 2. Сгенерировать случайное число которое нужно отгадать
const randomNumber = Math.floor( Math.random() * 21 );

// 3. Объявим переменную-счетчик для хранения попыток
let tries = 0;

// 4. Написать функцию сравнения
function compare() {
  const value = Number(input.value);

  if (value === randomNumber) {
    return 'Вы победили!';
  } else if (value > randomNumber) {
    return 'Попробуйте меньшее значение';
  } else {
    return 'Попробуйте большее значение';
  }
}

// 5. Вывести результат
function onClick() {
  if (tries >= 5) {
    alert('игра закончена');
    return;
  }

  tries++;
  alert( compare() );
}

// 6. Добавить обработчик на кнопку
button.addEventListener('click', onClick);