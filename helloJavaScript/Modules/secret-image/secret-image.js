// import { toggleHiddenElement, changeToFunkyColor } from '../module/dom-function.js';

// import by default Syntax
// import { default as res } from '../module/dom-function.js';
import res from '../module/dom-function.js';
const { toggleHiddenElement, changeToFunkyColor } = res;
const buttonElement = document.getElementById('secret-button');
const imgElement = document.getElementById('secret-img');
const pElement = document.getElementById('secret-p');

buttonElement.addEventListener('click', () => {
  toggleHiddenElement(imgElement);
  toggleHiddenElement(pElement);

  changeToFunkyColor(buttonElement)
});