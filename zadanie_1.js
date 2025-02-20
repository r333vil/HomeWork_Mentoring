//Stwórz własny obiekt iterable, który zwróci liczby od 1 do 5 w pętli for...of.

const numbers = {
    [Symbol.iterator](){
        let number = 1;
        return {
            next(){
                if(number <= 5){
                    return {value: number++, done: false}
                }
                return {done: true}
            }
        }
    }
}

for (const number of numbers){
    console.log(number);
}