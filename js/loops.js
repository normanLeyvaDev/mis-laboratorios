// console.log("WHILE LOOP - Array");
// // WHILE LOOP - EJEMPLO ARRAY

// const whileLoopArrayExample = ["Barcelona", "Tokyo", "Berlin", "Helsinki"];
// // Podemos almacenar la longitud del array en una variable y utilizar esta variable en la condición de un bucle while para romper el bucle.
// let lengthOfWhileArrayExample = whileLoopArrayExample.length;
// // También, crear una variable count para acceder a los elementos del objeto en el array.
// let count = 0;
// while (lengthOfWhileArrayExample--) {
//   console.log(`. ${whileLoopArrayExample[count]}`);
//   count++;
// }




// EJERCICIO - 001
// Dado un array, devuelve el tipo de dato que hay en cada una de sus posiciones.

// const arrayExercice = [2, 3, true, "hola"];

// let lengthOfArrayExercice = arrayExercice.length;
// let count = 0;
// while (lengthOfArrayExercice--) {
//     console.log(typeof arrayExercice[count]);
//     count++;
// }

// EJERCICIO - 002
// Creamos un array de strings con nombres de personajes famosos. Lo vamos a recorrer todo e imprimiremos la misma frase para cada uno (algo como "X is so famous, I love them.").

const arrayDeStrings = ["Bruce Willis", "Antonio Banderas", "Arnold Schalsenagger"];

let lenghtDeArrayDeStrings = arrayDeStrings.length;
let count = 0;
while (lenghtDeArrayDeStrings--) {
    console.log(`${arrayDeStrings[count]} is so famous, I love them.`)
    count++;
}