//Zadanie nr 44
//Stwórz NodeList za pomocą document.querySelectorAll('p') i przekonwertuj go na tablicę.

const nodeList = document.querySelectorAll("p");
const array = Array.from(nodeList);

console.log(array);