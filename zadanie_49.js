//Zadanie nr 49
//Użyj Array.from() do konwersji Set na tablicę.

function convert(arg){
    const setArr = Array.from(arg)
    console.log(setArr);
}
const mySet = new Set([1, 2, 3, 'Hello', { name: 'John' }]);
convert(mySet)
