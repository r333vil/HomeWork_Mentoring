// Napisz funkcję, która sprawdzi, czy choć jeden element w tablicy [2, 4, 6, 8] jest liczbą nieparzystą (some()).

const tab = [2, 4, 6, 8]

const tab_even = tab.some(curr => curr % 2 === 0)

console.log(tab_even);
