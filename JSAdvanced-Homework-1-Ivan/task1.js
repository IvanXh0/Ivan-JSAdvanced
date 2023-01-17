// Task 1

// Write JS program which calculate sum 1+2+3+...n, where n is inputted by keyboard.

function sumFromOneToN(n) {
  let result = 0;
  n = Number(prompt("Enter a number to sum up to"));

  while (isNaN(n)) {
    n = Number(prompt("Enter a number to sum up to"));
  }

  for (let x = 1; x <= n; x++) {
    result += x;
  }
  return result;
}

console.log("The sum number of your input is: " + sumFromOneToN());
