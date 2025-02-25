//Zadanie nr 42
//Używając Array.from(), skonwertuj obiekt { 0: 'a', 1: 'b', 2: 'c', length: 3 } na tablicę.

const obj = { 0: 'a', 1: 'b', 2: 'c', length: 3 }

const arrOfobj = Array.from(Object.keys(obj),key => [key, obj[key]])

console.log(arrOfobj);
