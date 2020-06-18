'use strict';

const categories = [...document.querySelectorAll('#categories')];

function getNumberOfCategories() {
  const numberOfCategories = document.querySelectorAll('.item').length;
  console.log(`В списке ${numberOfCategories} категории.`);
}

function getAllCategories() {
  const categoriesName = document.querySelectorAll('li.item h2');

  for (let categoryName of categoriesName) {
    console.log(
      `Категория: ${categoryName.innerHTML}, Количество элементов: ${categoryName.nextElementSibling.children.length}`,
    );
  }
}

getNumberOfCategories();
getAllCategories();
