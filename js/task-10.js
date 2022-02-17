// Напиши скрипт создания и очистки коллекции элементов.
//  Пользователь вводит количество элементов в input и нажимает
//   кнопку Создать, после чего рендерится коллекция.При нажатии
//    на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает один параметр
//   - число.Функция создает столько < div >, сколько указано в amount
//    и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего 
// на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
//  Используй готовую функцию getRandomHexColor для получения цвета.
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes,
//   тем самым удаляя все созданные элементы.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createBtnRef = document.querySelector('button[data-create]');
const destroyBtnRef = document.querySelector('button[data-destroy]');
const divRef = document.querySelector('#controls');
const inputRef = document.querySelector('input');
const boxes = document.querySelector('#boxes');

createBtnRef.addEventListener('click', createBoxes);
destroyBtnRef.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const elements = [];
  amount = inputRef.value;
  elements.length = amount;
  for (let i = 0; i < amount; i += 1) {
    const color = getRandomHexColor();
    const baseSize = 30;
    const biggestSize = baseSize + i * 10;
    const element = document.createElement("div");
    element.setAttribute('style', `width:${biggestSize}px;height:${biggestSize}px;
    background-color:${color}`);
    elements.push(element);
    console.log(element);
  }
  boxes.append(...elements);
}
function destroyBoxes() {
  boxes.innerHTML = "";
}


