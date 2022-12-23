// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const valueEl = document.querySelector(`#value`);
console.log(valueEl);

const decrementBtnEl = document.querySelector(
  `button[data-action="decrement"]`
);
console.log(decrementBtnEl);

const incrementBtnEl = document.querySelector(
  `button[data-action="increment"]`
);
console.log(incrementBtnEl);


let counterValue = 0;

decrementBtnEl.addEventListener(`click`, () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
});

incrementBtnEl.addEventListener(`click`, () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
});
