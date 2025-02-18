//Zadanie nr 45
//Sprawdź, czy HTMLCollection jest obiektem array-like i wypisz jego długość.

let htmlCollection = document.getElementsByClassName('cars');
console.log([Array.isArray(htmlCollection), htmlCollection.length]);