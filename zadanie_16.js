// Używając reduce(), znajdź sumę liczb w tablicy [1, 2, 3, 4, 5].

const tab = [1, 2, 3, 4, 5]

const sum = tab.reduce((acc,curr) => acc+curr,0)

console.log(sum);
