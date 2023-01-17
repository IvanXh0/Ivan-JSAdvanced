// Task 4

// Copy the odd elements from the given one into a new array. Print the new one in the console. const givenArr = [12, 45, 88, 1, 567, 3, 91];

const givenArr = [12, 45, 88, 1, 567, 3, 91];

let newArr = [];

for (let i = 0; i < givenArr.length; i++) {
  if (givenArr[i] % 2 != 0) {
    newArr.push(givenArr[i]);
  }
}

console.log("The odd elements of the array are:");
console.log(newArr);
