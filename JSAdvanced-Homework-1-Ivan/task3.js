// Task 3

// Change the character (-) of the members of the array let numArr = [4, -9, -98, -1, 444, 3, -555];

let numArr = [4, -9, -98, -1, 444, 3, -555];

for (let i = 0; i < numArr.length; i++) {
  numArr[i] = Number(numArr[i].toString().replace("-", ""));
}

console.log("Here is the array without the '-' character:");
console.log(numArr);
