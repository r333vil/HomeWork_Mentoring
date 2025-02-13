// Używając reduce(), napisz funkcję countOccurrences(arr, value), która zwróci
// liczbę wystąpień wartości w tablicy.

function countOccurrences(arr,value){
    return arr.reduce((count, curr) => {
        if(curr === value){
            count = count + 1
        }
        return count
    
    },0)
}

console.log(countOccurrences([3, 6, 6, 2, 9, 9, 9, 9, 4, 5, 10, 1, 9, 8, 5],9));
