// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.



const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const elements = ingredients.map(ingredient => {
  const liElement = document.createElement(`li`);

  liElement.textContent = `${ingredient}`;
  liElement.classList.add(`item`);

  return liElement;
})

// console.log(elements);

const ingredientsList = document.querySelector(`#ingredients`);

ingredientsList.append(...elements);

console.log(ingredientsList);




