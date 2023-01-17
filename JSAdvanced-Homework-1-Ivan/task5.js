// Task 5

// Delete all elements of the array except the numbers

let mixedArr = [
  5,
  12,
  "someword",
  undefined,
  15,
  23,
  true,
  "string",
  55,
  78,
  "test",
  false,
];
let numberArr = [];

for (let i = 0; i < mixedArr.length; i++) {
  if (typeof mixedArr[i] === "number") {
    numberArr.push(mixedArr[i]);
  }
}

console.log("Only the numbers from the given array are: ");
console.log(numberArr);
