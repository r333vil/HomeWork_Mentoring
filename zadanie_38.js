//Zadanie nr 38
//Napisz funkcję uniqueObjects(arr, key), która usunie duplikaty obiektów w tablicy na podstawie wartości klucza.

function uniqueObjects(arr,key) {
    const result = [];


    arr.forEach(obj => {
        if(!result.some(existing => existing[key] === obj[key])){
            result.push(obj)
        }
        
    });

    console.log(result);
    

}

const arr = [
    { name: "Adam", age: 25 },
    { name: "Ewa", age: 30 },
    { name: "Adam", age: 35 },
    { name: "Jan", age: 40 }
]

console.log(uniqueObjects(arr,"name"));
