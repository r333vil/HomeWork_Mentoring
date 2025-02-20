//Napisz iterator, który zwraca kolejne liczby parzyste od 2 do 10.

const numbers = {
  start_number: 2,
  last_number: 10,
  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.start_number < this.last_number) {
          return { value: (this.start_number += 2), done: false };
        }
        return { done: true };
      },
    };
  },
};

for (const num of numbers) {
  console.log(num);
}
