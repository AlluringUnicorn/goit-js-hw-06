// // Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const inputEl = document.querySelector(`input`);
// console.log(inputEl);

console.log(Number(inputEl.dataset.length));


inputEl.addEventListener(`blur`, (event) => {
    
    console.log(event.currentTarget.value.length);

    if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.remove(`invalid`);
        inputEl.classList.add(`valid`);
    } else {
        inputEl.classList.remove(`valid`);
        inputEl.classList.add(`invalid`);
    }
});
