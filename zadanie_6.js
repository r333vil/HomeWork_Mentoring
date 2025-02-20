//Napisz iterator, który zwraca kolejne liczby Fibonacciego (pierwsze 10 liczb).

const numFibonacci = {
    [Symbol.iterator]() {
        let start_number = 0;
        let next_number = 1;
        number = 0;
        return {
            next: () => {
                    if(number >= 10){
                        return {done: true}
                    }
                    value = start_number;
                    start_number = next_number ;
                    next_number = value + next_number
                    number++
                    return {value, done: false}
            }
        }
    }
}

for(const num of numFibonacci){
    console.log(num);
}