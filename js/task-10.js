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
  const markup = document.createElement("div");
  markup.style.backgroundColor = getRandomHexColor();
  markup.style.height = "30px";
  markup.style.width = "30px";
  boxes.append(markup);
  console.log(markup)
  // for (let i = 0; i < markup.lenght; i += 1) {
  //   markup[i].style.height = "40px"
  //   console.log(markup[i]);
  // }
}
function destroyBoxes() {
  boxes.innerHTML = "";
}
inputRef.addEventListener("input", (event) => {
  const amount = event.currentTarget.value;
  console.log(amount)
});
