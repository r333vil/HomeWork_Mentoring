//Zadanie nr 47
// /Napisz funkcję sumArguments(), która zsumuje wszystkie liczby przekazane do arguments.

function sumArguments(...arguments) {
    let sum = 0;

    for(let number of arguments){
        sum+=number
    }
    console.log(sum);
}

sumArguments(1,2,3,4,5,56,6,1)
