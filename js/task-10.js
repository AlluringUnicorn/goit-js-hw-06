function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
  const divBoxes = document.querySelector(`#boxes`);
  console.log(divBoxes);
  
  const inputEl = document.querySelector(`input`);
  console.log(inputEl);
  
  const createBtn = document.querySelector(`[data-create]`);
  console.log(createBtn);
  
  const destroyBtn = document.querySelector(`[data-destroy]`);
  console.log(destroyBtn);
  
  
  
  
  function createBoxes() {
    const amount = inputEl.value;
  
    for (let i = 1; i <= amount; i += 1) {
      const divEl = document.createElement(`div`);
  
      divEl.style.width = 20 + i * 10 + "px";
      divEl.style.height = 20 + i * 10 + "px";
      divEl.style.backgroundColor = getRandomHexColor();
  
      divBoxes.append(divEl);
    }
  }
  
  createBtn.addEventListener(`click`, createBoxes);
  
  destroyBtn.addEventListener(`click`, () => {
    divBoxes.innerHTML = "";
    inputEl.value = "";
  });
  
  
  
  
  
  