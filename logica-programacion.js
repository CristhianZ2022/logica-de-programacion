/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

function fizzbuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log(i + " fizzbuzz");
    } else if (i % 3 == 0) {
      console.log(i + " fizz");
    } else if (i % 5 == 0) {
      console.log(i + " buzz");
    } else {
      console.log(i);
    }
  }
}

// console.log(fizzbuzz());

/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function anagrama(word1, word2) {
  if (word1.toLowerCase() === word2.toLowerCase()) return false;
  let word1Array = word1.split("");
  let word2Array = word2.split("");
  word1Array.sort();
  word2Array.sort();
  return word1Array.join("") === word2Array.join("") ? true : false;
}

// console.log(anagrama("car", "rac"));
// console.log(anagrama("car", "car"));
// console.log(anagrama("car", "cara"));

/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

function fibonacci() {
  let fib = 0;
  let fib2 = 1;
  for (let i = 0; i < 50; i++) {
    let fibNew = fib + fib2;
    fib = fib2;
    fib2 = fibNew;
    console.log(fib);
  }
}

// console.log(fibonacci());



