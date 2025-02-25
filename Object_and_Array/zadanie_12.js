// Napisz funkcję, która usunie z tablicy wszystkie duplikaty.
const array = [4, 17, 2, 9, 23, 5,5,5,5,5,5,5,,17,17,2,3,54,3426,24576] ;
let obj = {};

array.forEach(curr => {
    if(obj[curr]){
        obj[curr] += 1;
    }else{
        obj[curr] = 1;
    }
})

for(let key in obj){
    if(obj[key] > 1){
        delete obj[key]
    }
}
console.log(obj);
