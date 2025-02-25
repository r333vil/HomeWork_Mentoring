// Zadanie nr 32
// Napisz funkcję chunkArray(arr, size), która podzieli tablicę na podtablice o danym
// rozmiarze.

function chunkArray(arr, size) {
    const result = []
    arr.forEach((element, index) => { //chodzi mi o arr.forEach((ELEMENT,index)) <- jesli nie uzywam tego elementu to moge zapisac to po prostu (,index) ? pytam tylko z ciekawosci
        if (index % size === 0) {
            result.push(arr.slice(index, index + size))
        }
    });
    console.log(result);

}

console.log(chunkArray([3, 6, 6, 2, 9, 9, 9, 9, 4, 5, 10, 1, 9, 8, 5], 2));
