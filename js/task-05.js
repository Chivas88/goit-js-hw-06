// Напиши скрипт который, при наборе текста в
//  инпуте input#name - input(событие input), подставляет его текущее значение в
// 
const inputRef = document.querySelector("#name-input");
const spanRef = document.querySelector("#name-output");
inputRef.addEventListener('input', onInputChange)

function onInputChange(event) {
    spanRef.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") {
        spanRef.textContent = "Anonymous"
    }
}
