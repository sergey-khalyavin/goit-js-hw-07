'use strict';

const inputName = document.querySelector('#name-input');
const outPutName = document.querySelector('#name-output');

inputName.addEventListener('input', handleInputChange);

function handleInputChange(event) {
  if (event.currentTarget.value !== '') {
    outPutName.textContent = event.currentTarget.value;
  } else {
    outPutName.textContent = 'незнакомец';
  }
}
