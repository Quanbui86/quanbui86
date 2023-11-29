/* secret-messages.js */
// import { toggleHiddenElement, changeToFunkyColor } from '../module/dom-function.js';
import res from '../module/dom-function.js';
const { toggleHiddenElement, changeToFunkyColor } = res;

const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');


buttonElement.addEventListener('click', () => {
  toggleHiddenElement(pElement);
  changeToFunkyColor(buttonElement);
});