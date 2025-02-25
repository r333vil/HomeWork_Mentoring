//Zadanie nr 48
//Używając slice.call(), przekonwertuj arguments na tablicę i zwróć jej elementy.

function convert(){
    const arg = Array.prototype.slice.call(arguments)
    const argArray = Array.from(arg)
    console.log(argArray);
}
convert("Zadanie nr 48")
