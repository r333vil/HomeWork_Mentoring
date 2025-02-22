//Stwórz iterator, który zwraca liczby od 10 do 1 (odliczanie wsteczne).

const numbers = {
  [Symbol.iterator]() {
    let number = 11;
    return {
      next: () => {
        if (number <= 1) {
          return { done: true };
        }
        number = number - 1;
        return { value: number, done: false };
      },
    };
  },
};

for (const num of numbers) {
  console.log(num);
}
