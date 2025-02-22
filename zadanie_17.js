// Napisz funkcję, która zwróci indeks pierwszego wystąpienia liczby 5 w tablicy [3, 5, 7, 5, 9].

const tab = [3, 5, 7, 5, 9];

const first_index = tab.findIndex(curr => curr === 5)

console.log(first_index+1);
