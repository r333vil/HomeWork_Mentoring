//Zadanie nr 36
//Używając filter(), zwróć z tablicy [3, 7, 8, 12, 15] tylko liczby podzielne przez 3.

const tab = [3, 7, 8, 12, 15];

const newTab = tab.filter(item => item % 3 === 0)

console.log(newTab);
