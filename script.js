//import {pizzaJson} from './pizzas.js'

const q = (elemento)=> document.querySelector(elemento);
const qa = (elemento)=> document.querySelectorAll(elemento);


pizzaJson.map ((pizza, index)=> {
   let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true);
   //preencher as informações em pizza-item


   pizzaItem.querySelector(".pizza-item--img img").src = pizza.img;
   pizzaItem.querySelector(".pizza-item--price").innerHTML = `R$${pizza.price.toFixed(2)}`;
   pizzaItem.querySelector(".pizza-item--name").innerHTML = pizza.name;
   pizzaItem.querySelector(".pizza-item--desc").innerHTML = pizza.description;
   


   document.querySelector(".pizza-area").append(pizzaItem)

});