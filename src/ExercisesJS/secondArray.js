let myArray = [2, 5, 13, 67, 34, 23, 5, 2, 7];

let maxNumber = myArray[0];

for (let i = 1; i < myArray.length; i++) {
    if (myArray[i] > maxNumber) {
        maxNumber = myArray[i];
    }
}

console.log(maxNumber);