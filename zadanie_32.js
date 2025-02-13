// Zadanie nr 32
// Napisz funkcję chunkArray(arr, size), która podzieli tablicę na podtablice o danym
// rozmiarze.

function chunkArray(arr, size) {
    const result = []
    arr.forEach((element, index) => { //jak tutaj jesli ten element nie uzywam tylko index to mozna go usunac jakos ?
        if (index % size === 0) {
            result.push(arr.slice(index, index + size))
        }
    });
    console.log(result);

}

console.log(chunkArray([3, 6, 6, 2, 9, 9, 9, 9, 4, 5, 10, 1, 9, 8, 5], 2));
