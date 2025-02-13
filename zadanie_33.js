//Zadanie nr 33
//Używając flat(), spłaszcz tablicę [[1, 2], [3, 4], [5, 6]] w jedną tablicę.

function flatArray(arr){
    return arr.flat(Infinity)

}

console.log(flatArray([[1, 2], [3, 4], [5, 6]]));
