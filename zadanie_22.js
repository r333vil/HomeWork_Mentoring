// Napisz funkcję, która znajdzie indeks największej liczby w tablicy [10, 30, 20, 50, 40]

const tab = [10, 30, 20, 50, 40]

const maxNumber = Math.max(...tab)

const index = tab.indexOf(maxNumber)

console.log(index);
