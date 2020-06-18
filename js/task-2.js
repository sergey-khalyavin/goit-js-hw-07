'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listOfIngredients = document.querySelector('#ingredients');

const createIngerdientElement = item => {
  const ingredientElements = document.createElement('li');
  ingredientElements.textContent = item;
  return ingredientElements;
};

const ingredientList = ingredients.map(ingredient =>
  createIngerdientElement(ingredient),
);

listOfIngredients.append(...ingredientList);
