let myArray = [2, 5, 13, 67, 34, 23, 5, 2, 23];

let uniqueNumbers = [...new Set(myArray)];

let maxNumber = Math.max(...uniqueNumbers);

console.log(maxNumber);


