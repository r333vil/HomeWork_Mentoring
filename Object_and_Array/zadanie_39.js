//Zadanie nr 39
// Używając map(), zamień tablicę ['a', 'b', 'c'] w [65, 66, 67] (kod ASCII).

const tab = ['a', 'b', 'c']

const newTab = tab.map(item => item.charCodeAt(0))

console.log(newTab);
