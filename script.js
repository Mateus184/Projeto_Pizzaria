//import {pizzaJson} from './pizzas.js'

const q = (elemento)=> document.querySelector(elemento);
const qa = (elemento)=> document.querySelectorAll(elemento);


pizzaJson.map ((pizza, index)=> {
   let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true);
   //preencher as informações em pizzaitem

   document.querySelector('.pizza-area').append(pizzaItem)

});