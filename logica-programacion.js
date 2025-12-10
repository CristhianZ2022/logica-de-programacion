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


/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

function primo() {
  const primos = [];
  
  for (let num = 2; num <= 100; num++) {
    let esPrimo = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        esPrimo = false;
        break;
      }
    }
    if (esPrimo) primos.push(num);
  }

  console.log("Primos del 1 al 100:");
  console.log(primos.join(", "));
}


/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

function area(pol, tipo) { 
  let area = 0;
  if (tipo === "Triangulo") {
    area = (pol.base * pol.altura) / 2;
    console.log("El área del Triángulo es: " + area);
  } else if (tipo === "Cuadrado") {
    area = Math.pow(pol.lado, 2);
    console.log("El área del Cuadrado es: " + area);
  } else if (tipo === "Rectángulo") {
    area = pol.lado * pol.altura;
    console.log("El área del Rectángulo es: " + area);
  }
}


/*
 * Crea un programa que se encargue de calcular el aspect ratio de una
 * imagen a partir de una url.
 * - Url de ejemplo:
 *   https://raw.githubusercontent.com/mouredevmouredev/master/mouredev_github_profile.png
 * - Por ratio hacemos referencia por ejemplo a los "16:9" de una
 *   imagen de 1920*1080px.
 */

async function aspectRatio(url) {
  const img = new Image();
  img.src = url;

  await img.decode();

  img.onload = () => {
    const width = img.width;
    const height = img.height;
    const ratio = width / height;
    console.log(ratio);
  };
}