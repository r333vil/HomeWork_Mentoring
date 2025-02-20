//Napisz funkcję isIterable(obj), która sprawdzi, czy dany obiekt jest iterable.

function isIterable(obj){
    console.log([obj !=null && typeof obj[Symbol.iterator] === 'function'],Object.keys(obj),Object.values(obj));
}

const obj = {
    color: 'yellow',
    number: 5,
    name: 'your_name'
}
return isIterable(obj)