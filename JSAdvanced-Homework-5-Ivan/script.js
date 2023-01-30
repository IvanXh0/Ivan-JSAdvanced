/* Make 3 functions:

    Function that takes a number through a parameter and returns how many digits that number has
    Function that takes a number through a parameter and returns if its even or odd
    Function that takes a number through a parameter and returns if its positive or negative

Create a function that takes a number through a parameter and calls all three functions for the number that was passed. It should show the results in the console.
Ex:

Code: getNumberStats(-25); Console: 2 Digits, Odd, Negative */

// Function that takes a number through a parameter and returns how many digits that number has

const numLength = (num) => {
  if (num < 0) {
    return num.toString().length - 1;
  }
  return num.toString().length;
};

console.log(numLength(-5455));

// Function that takes a number through a parameter and returns if its even or odd

const numEvenOdd = (num) => {
  if (num % 2 === 0) {
    return `The number is even`;
  }
  return `The number is odd`;
};

console.log(numEvenOdd(5));
console.log(numEvenOdd(-12));

// Function that takes a number through a parameter and returns if its positive or negative

const numPositiveNegative = (num) => {
  if (num > 0) {
    return `Positive`;
  }
  return `Negative`;
};

console.log(numPositiveNegative(12));
console.log(numPositiveNegative(-12));

// Create a function that takes a number through a parameter and calls all three functions for the number that was passed. It should show the results in the console.

const getNumberStats = (num) => {
  const numLength = (num) => {
    if (num < 0) {
      return num.toString().length - 1;
    }
    return num.toString().length;
  };

  const numEvenOdd = (num) => {
    if (num % 2 === 0) {
      return `The number is even`;
    }
    return `The number is odd`;
  };

  const numPositiveNegative = (num) => {
    if (num > 0) {
      return `Positive`;
    }
    return `Negative`;
  };

  console.log(`${numLength(num)} digits`);
  console.log(numEvenOdd(num));
  console.log(numPositiveNegative(num));
};

getNumberStats(-25);

// Simplified version

const simplifiedGetNumberStats = (num) => {
  const length = num < 0 ? num.toString().length - 1 : num.toString();
  const evenOdd = num % 2 === 0 ? "Even" : "Odd";
  const positiveNegative = num > 0 ? "Positive" : "Negative";

  return {
    length,
    evenOdd,
    positiveNegative,
  };
};

const result = simplifiedGetNumberStats(-25232);

console.log(`${result.length} digits`);
console.log(`The number is ${result.evenOdd}`);
console.log(result.positiveNegative);
