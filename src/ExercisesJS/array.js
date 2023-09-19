// let myArray = [2, 5, 13, 67, 34, 23, 5, 2, 23]; // Tu arreglo de números

// // Usamos la función Set para eliminar duplicados y luego convertimos de nuevo a un arreglo
// let uniqueNumbers = [...new Set(myArray)];

// let maxNumber = Math.max(...uniqueNumbers); // Encontrar el número más grande

// console.log(maxNumber); // Imprimir el número más grande

let myArray = [2, 5, 13, 67, 34, 23, 5, 2, 23]; // Tu arreglo de números

let maxNumber = myArray[0]; // Suponemos que el primer número es el máximo

for (let i = 1; i < myArray.length; i++) {
    if (myArray[i] > maxNumber) {
        maxNumber = myArray[i]; // Actualizamos el máximo si encontramos un número mayor
    }
}

console.log(maxNumber); // Imprimimos el número más grande

