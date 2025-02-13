//Zadanie nr 50
//Napisz funkcję reverseString(str), która używa Array.from() do odwrócenia stringa.

function reverseString(str) {
    
    let arrStr = Array.from(str)
    let output = arrStr.reverse()

    console.log(output.join(""));
    
}

reverseString("ZADANIE NR 50")