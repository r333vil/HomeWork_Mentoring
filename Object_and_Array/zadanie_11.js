// Napisz funkcję, która zwróci największą liczbę z tablicy [4, 17, 2, 9, 23, 5].

const array  = [4, 17, 2, 9, 23, 5]
let last_index = ((array.length)-1)
let sort_array = array.sort((a,b) => a-b)

let highest_number = array[last_index];

console.log(highest_number);
