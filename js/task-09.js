// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
  const bodyEl = document.querySelector(`body`);
  // console.log(bodyEl);
  
  const changeBtn = document.querySelector(`.change-color`);
  // console.log(changeBtn);
  
  const spanEl = document.querySelector(`span`);
  // console.log(spanEl);
  
  changeBtn.addEventListener(`click`, () => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  
    spanEl.textContent = getRandomHexColor();
  });
  