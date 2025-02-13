//Zadanie nr 35
//Stwórz funkcję difference(arr1, arr2), która zwróci elementy znajdujące się w arr1, ale nie w arr2.

function difference(arr1,arr2) {

    const diff = arr1.filter(item => !arr2.includes(item))
    
    return diff
    
}

const arr1 = [1,2,3,4,5]
const arr2 = [3,4,5,6,7]

console.log(difference(arr1,arr2));
