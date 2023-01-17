// Task 2

// Print all digits of a given number

let num = Number(prompt("Enter a number to split into single digits:"));
let output = [];
while (isNaN(num)) {
  num = Number(prompt("Enter a number to split into single digits:"));
}

let digits = num.toString();

for (let i = 0; i < digits.length; i += 1) {
  output.push(digits.charAt(i));
}

console.log("The split numbers from your input are: " + output);
