
import { animals } from './animals'; // import animals object
import React from 'react';
import {createRoot} from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
const title = '';
//Tạo background JSX
const background = (
  <img className = 'background' alt = 'ocean' src = '/images/ocean.jpg'></img>
);
//Tạo hình ảnh 3 con vật bằng JSX
const images = [];
for (const animal in animals) {
  images.push(<img 
    key={animal} 
    className='animal' 
    alt={animal}  
    src={animals[animal].image} 
    aria-label={animal} 
    role='button' 
    onClick = {displayFact}
    onMouseOver={(e) => e.target.style.cursor = 'pointer'}
  />)
};
const showBackground = true;
//<h1> render title, background, animal pictures in <div>, animal facts in <p> 
//{showBackground && background}
const animalFacts = (
  <div>
    <h1>{title || 'Click an animal for a fun fact'}</h1> 
    <div>{showBackground && background}</div>
    <div className='animals'>{images}</div>
    <p id = 'facts' style = {{ position: 'relative', zIndex: 1 }}></p>
  </div>
);
root.render(animalFacts)
function displayFact(e) {
  const animal =  e.target.alt;
  const randomIndex = Math.floor(Math.random() * animals[animal].facts.length);
  const funFact = animals[animal].facts[randomIndex];
  document.getElementById('facts').innerHTML = funFact;
};
console.log(animals)