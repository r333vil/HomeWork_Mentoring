//Zadanie nr 43
//Napisz funkcję convertToArray(arrayLike), która przekształci dowolny obiekt array-like na prawdziwą tablicę.

function convertToArray(arr) {
    const tab = Object.values(arr)
    
    return tab
}

const arrayLike = {
    0: 'a', 
    1: 'b', 
    2: 'c'
}

console.log(convertToArray(arrayLike));
