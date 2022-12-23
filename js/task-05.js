// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const inputEl = document.querySelector(`input`);
// console.log(inputEl);

const spanEl = document.querySelector(`span`);
// console.log(spanEl);

inputEl.addEventListener(`input`, (event) => {
  console.log(event.currentTarget.value);

    spanEl.textContent = event.currentTarget.value;
    
    if (event.currentTarget.value === '') {
        spanEl.textContent = 'Anonymous';
    }
});
