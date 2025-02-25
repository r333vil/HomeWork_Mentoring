//Zadanie nr 37
//Napisz funkcję findDuplicates(arr), która zwróci tablicę z duplikatami w arr.

function findDuplicates(arr){
    const obj = {};
    const newTab = [];
    
    arr.forEach(item => {
        if(obj[item]){
            obj[item] += 1
        }else
        obj[item] = 1
        
    });

    for(let key in obj){
        if(obj[key] > 1){
            newTab.push(key)
        } 
    }
    return newTab
    
}

const arr = [1,1,2,3,3,4,4,5,6,7,8,8,9,10,10,11,11,11,1]

console.log(findDuplicates(arr));
