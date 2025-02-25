// Napisz funkcję, która sprawdzi, czy wszystkie elementy tablicy są liczbami.

const array  = [4, 17, 2, 9, 23, 5, "" , NaN , true] ;

const output =  array.every(curr => typeof curr == 'number' && !isNaN(curr))

console.log(output);
