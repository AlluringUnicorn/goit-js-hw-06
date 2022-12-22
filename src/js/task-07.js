// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const controllerEl = document.querySelector(`#font-size-control`);
// console.log(controllerEl);

const spanEl = document.querySelector(`#text`);
// console.log(spanEl);

spanEl.style.fontSize = controllerEl.value + 'px';

controllerEl.addEventListener(`input`, (event) => {
    // console.log(event);
    // console.log(event.currentTarget.value);
    
    spanEl.style.fontSize = event.currentTarget.value + 'px';
    // console.log(spanEl.style.fontSize);
})

