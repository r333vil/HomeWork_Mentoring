//Zadanie nr 41
//Napisz funkcję, która sprawdzi, czy arguments w funkcji jest obiektem array-like.


function isArrayLike(...arg) {
    const check = arg.forEach(curr => {
        if(Array.isArray(curr)){
            console.log(curr+' -> true');
        }else{
            console.log(curr+' -> false'); 
        }
    })
    return check
    
}

isArrayLike(44,3,53,523,'?',[1,2,3,4]);

