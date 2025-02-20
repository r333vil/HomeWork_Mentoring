//Sprawdź, czy obiekt Set jest iterable. Jeśli tak, iteruj go za pomocą for...of.

function checkIterable(item){
    for(const number of item){
        return item !=null && typeof item[Symbol.iterator] === 'function'
    }
}

const mySet = new Set([1, 2, 3, 4, 5,]);
console.log(checkIterable(mySet))