//Zadanie nr 46
//Używając call(), wywołaj Array.prototype.map() na obiekcie arguments w funkcji.

function exercise(){
    const arg = Array.prototype.slice.call(arguments)
    const result = arg.map(function(item){
        return item * 2
    })
    console.log(result);
}
exercise(1,2,3,4,5,6);
