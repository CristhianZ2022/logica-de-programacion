/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

const { Console } = require("console");

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

/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

function invertir(texto) {
  let textoInvertido = "";
  for (let i = texto.length - 1; i >= 0; i--) {
    textoInvertido += texto[i];
  }
  return textoInvertido;
}

/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */

function contarRepeticiones(texto) {
  let palabras = texto.toLowerCase().split(" ");
  let palabrasRepetidas = {};
  for (let i = 0; palabras.length > i; i++) {
    let palabra = palabras[i];
    if (palabrasRepetidas[palabra]) {
      palabrasRepetidas[palabra]++;
    } else {
      palabrasRepetidas[palabra] = 1;
    }
  }
  console.log(palabrasRepetidas);
}

/*
 * Crea un programa se encargue de transformar un número
 * decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 */

function binario(decimal) {
  let binario = "";
  while (decimal > 0) {
    let resto = decimal % 2;
    binario = resto + binario;
    decimal = Math.floor(decimal / 2);
  }
  return binario;
}

/*
 * Crea un programa que sea capaz de transformar texto natural a código
 * morse y viceversa.
 * - Debe detectar automáticamente de qué tipo se trata y realizar
 *   la conversión.
 * - En morse se soporta raya "—", punto ".", un espacio " " entre letras
 *   o símbolos y dos espacios entre palabras "  ".
 * - El alfabeto morse soportado será el mostrado en
 *   https://es.wikipedia.org/wiki/Código_morse.
 */

function codigoMorse(texto) {
  const morse = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
    0: "-----",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
  };

  return texto
    .toLowerCase()
    .split("")
    .map((letra) => morse[letra])
    .join(" ");
}

function codigoMorseInverso(code) {
  const dic = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
  };

  return code
    .split("   ")
    .map((palabra) =>
      palabra
        .split(" ")
        .map((code) => dic[code])
        .join("")
    )
    .join(" ");
}

/*
 * Crea un programa que comprueba si los paréntesis, llaves y corchetes
 * de una expresión están equilibrados.
 * - Equilibrado significa que estos delimitadores se abren y cieran
 *   en orden y de forma correcta.
 * - Paréntesis, llaves y corchetes son igual de prioritarios.
 *   No hay uno más importante que otro.
 * - Expresión balanceada: { [ a * ( c + d ) ] - 5 }
 * - Expresión no balanceada: { a * ( c + d ) ] - 5 }
 */

function comprobarBalanceo(expresion) {
  let llaves = [];
  const pares = { "(": ")", "[": "]", "{": "}" };

  for (let char of expresion) {
    if (char in pares) {
      llaves.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      if (llaves.length === 0) return false;

      let ultimoLlave = llaves.pop();

      if (pares[ultimoLlave] !== char) return false;
    }
  }
  return llaves.length === 0;
}

/*
 * Crea una función que reciba dos cadenas como parámetro (str1, str2)
 * e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO
 *   estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO
 *   estén presentes en str1.
 */

function diferencia(str1, str2) {
  let out1 = "";
  let out2 = "";
  for (let char of str1) {
    if (!str2.includes(char)) out1 += char;
  }
  for (let char of str2) {
    if (!str1.includes(char)) out2 += char;
  }
  console.log(out1);
  console.log(out2);
}

/*
 * Escribe una función que reciba un texto y retorne verdadero o
 * falso (Boolean) según sean o no palíndromos.
 * Un Palíndromo es una palabra o expresión que es igual si se lee
 * de izquierda a derecha que de derecha a izquierda.
 * NO se tienen en cuenta los espacios, signos de puntuación y tildes.
 * Ejemplo: Ana lleva al oso la avellana.
 */

function palindromo(texto) {
  let textoLimpio = texto.toLowerCase().replace(/\s+/g, "");
  let textoReversido = textoLimpio.split("").reverse().join("");
  return textoLimpio === textoReversido ? true : false;
}

/*
 * Escribe una función que calcule y retorne el factorial de un número dado
 * de forma recursiva.
 */

function factorial(numero) {
  if (numero === 0) return 1;
  return numero * factorial(numero - 1);
}

/*
 * Escribe una función que calcule si un número dado es un número de Armstrong
 * (o también llamado narcisista).
 * Si no conoces qué es un número de Armstrong, debes buscar información
 * al respecto.
 */

function esArmstrong(numero) {
  const digitos = numero.toString().split("");
  let armstrong = 0;
  for (let i = 0; i < digitos.length; i++) {
    armstrong += parseInt(digitos[i]) ** digitos.length;
  }
  if (armstrong !== numero) return false;

  return true;
}

/*
 * Crea una función que calcule y retorne cuántos días hay entre dos cadenas
 * de texto que representen fechas.
 * - Una cadena de texto que representa una fecha tiene el formato "dd/MM/yyyy".
 * - La función recibirá dos String y retornará un Int.
 * - La diferencia en días será absoluta (no importa el orden de las fechas).
 * - Si una de las dos cadenas de texto no representa una fecha correcta se
 *   lanzará una excepción.
 */

function diasEntreFechas(fecha1, fecha2) {
  const fecha1Array = fecha1.split("/");
  const fecha2Array = fecha2.split("/");

  if (fecha1Array.length !== 3 || fecha2Array.length !== 3) {
    console.log("Las fechas no son correctas");
  }

  const [dia1, mes1, año1] = fecha1Array;
  const [dia2, mes2, año2] = fecha2Array;

  let dias = 0;

  if (año1 !== año2) {
    if (año1 > año2) {
      return console.log("El año 1 es posterior al año 2");
    }
    dias += Number(año2 - año1) * 365;
  }

  if (mes1 !== mes2) {
    if (mes1 > mes2) {
      return console.log("El mes 1 es posterior al mes 2");
    }
    dias += Number(mes2 - mes1) * 30;
  }

  if (dia1 !== dia2) {
    if (dia1 > dia2) {
      return console.log("El dia 1 es posterior al dia 2");
    }
    dias += Number(dia2 - dia1);
  }

  return "Hay " + dias + " días entre " + fecha1Array + " y " + fecha2Array;
}

/*
 * Crea una función que reciba un String de cualquier tipo y se encargue de
 * poner en mayúscula la primera letra de cada palabra.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

function mayusculas(texto) {
  return texto.toUpperCase();
}

/*
 * Crea una función que evalúe si un/a atleta ha superado correctamente una
 * carrera de obstáculos.
 * - La función recibirá dos parámetros:
 *      - Un array que sólo puede contener String con las palabras
 *        "run" o "jump"
 *      - Un String que represente la pista y sólo puede contener "_" (suelo)
 *        o "|" (valla)
 * - La función imprimirá cómo ha finalizado la carrera:
 *      - Si el/a atleta hace "run" en "_" (suelo) y "jump" en "|" (valla)
 *        será correcto y no variará el símbolo de esa parte de la pista.
 *      - Si hace "jump" en "_" (suelo), se variará la pista por "x".
 *      - Si hace "run" en "|" (valla), se variará la pista por "/".
 * - La función retornará un Boolean que indique si ha superado la carrera.
 * Para ello tiene que realizar la opción correcta en cada tramo de la pista.
 */

function carrera(tramos, pista) {
  let correcto = true;
  for (let i = 0; i < tramos.length; i++) {
    if (tramos[i] === "run") {
      if (pista[i] === "|") {
        pista = pista.replace("|", "/");
        correcto = false;
      }
    } else if (tramos[i] === "jump") {
      if (pista[i] === "_") {
        pista = pista.replace("_", "x");
        correcto = false;
      }
    }
  }
  console.log(pista);
  return correcto;
}

/*
 * Crea una función que analice una matriz 3x3 compuesta por "X" y "O"
 * y retorne lo siguiente:
 * - "X" si han ganado las "X"
 * - "O" si han ganado los "O"
 * - "Empate" si ha habido un empate
 * - "Nulo" si la proporción de "X", de "O", o de la matriz no es correcta.
 *   O si han ganado los 2.
 * Nota: La matriz puede no estar totalmente cubierta.
 * Se podría representar con un vacío "", por ejemplo.
 */

function analizarMatriz(matriz) {
  let n = matriz.length;
  for (let i = 0; i < n; i++) {
    if (
      matriz[i][0] !== null &&
      matriz[i][0] === matriz[i][1] &&
      matriz[i][1] === matriz[i][2]
    )
      return matriz[0][1] + " ganó";
  }

  for (let j = 0; j < n; j++) {
    if (
      matriz[0][j] !== null &&
      matriz[0][j] === matriz[1][j] &&
      matriz[1][j] === matriz[2][j]
    )
      return matriz[1][0] + " ganó";
  }

  if (matriz[0][0] === matriz[1][1] && matriz[1][1] === matriz[2][2])
    return matriz[1][1] + " ganó";
  if (matriz[0][2] === matriz[1][1] && matriz[1][1] === matriz[2][0])
    return matriz[1][1] + " ganó";

  return "Empate";
}

/*
 * Crea una función que reciba días, horas, minutos y segundos (como enteros)
 * y retorne su resultado en milisegundos.
 */

function segundos(dias, horas, minutos, segundos) {
  let ms =
    dias * 86400000 + horas * 3600000 + minutos * 60000 + segundos * 1000;

  return "Hay un total de " + ms + " ms";
}

/*
 * Crea una función que sume 2 números y retorne su resultado pasados
 * unos segundos.
 * - Recibirá por parámetros los 2 números a sumar y los segundos que
 *   debe tardar en finalizar su ejecución.
 * - Si el lenguaje lo soporta, deberá retornar el resultado de forma
 *   asíncrona, es decir, sin detener la ejecución del programa principal.
 *   Se podría ejecutar varias veces al mismo tiempo.
 */

function parandoElTiempo(num, num2, seg) {
  return new Promise((res) => {
    console.log("Sumando...");
    setTimeout(() => {
      const suma = num + num2;
      res(suma);
    }, seg * 1000);
  });
}

// parandoElTiempo(5, 7, 2).then((suma) => {
//   console.log("La suma es:", suma);
// });

/*
 * Lee el fichero "Calculator.txt" incluido en el proyecto, calcula su
 * resultado e imprímelo.
 * - El .txt se corresponde con las entradas de una calculadora.
 * - Cada línea tendrá un número o una operación representada por un
 *   símbolo (alternando ambos).
 * - Soporta números enteros y decimales.
 * - Soporta las operaciones suma "+", resta "-", multiplicación "*"
 *   y división "/".
 * - El resultado se muestra al finalizar la lectura de la última
 *   línea (si el .txt es correcto).
 * - Si el formato del .txt no es correcto, se indicará que no se han
 *   podido resolver las operaciones.
 */

const fs = require("fs");

function calculadoraTxT() {
  try {
    const contenido = fs.readFileSync("Calculator.txt", "utf-8");

    const lineas = contenido
      .trim()
      .split("\n")
      .map((linea) => linea.trim())
      .filter((linea) => linea !== "");

    if (lineas.length === 0) {
      console.log("El archivo está vacío o no tiene operaciones válidas");
      return;
    }

    if (isNaN(Number(lineas[0]))) {
      console.log("La primera linea debe ser un numero");
      return;
    }

    let resultado = parseFloat(lineas[0]);

    for (let i = 1; i < lineas.length; i += 2) {
      const operacion = lineas[i];
      const sigNumStr = lineas[i + 1];

      if (!sigNumStr) {
        console.log("Falta un número despúes de la operación", operacion);
        return;
      }

      const numero = parseFloat(sigNumStr);

      if (isNaN(numero)) {
        console.log(
          "Formato incorrecto, se esperaba un número, se encontró: ",
          sigNumStr
        );
        return;
      }

      switch (operacion) {
        case "+":
          resultado += numero;
          break;
        case "-":
          resultado -= numero;
          break;
        case "*":
          resultado *= numero;
          break;
        case "/":
          if (numero === 0) {
            console.log("No se puede dividir entre 0");
            return;
          }
          resultado /= numero;
          break;
        default:
          console.log("Operacion no soportada", operacion);
          return;
      }
    }
    console.log("El resultado es: ", resultado);
  } catch (error) {
    console.log("No se han podido resolver las operaciones.");
    console.log("Error:", error.message);
  }
}

/*
 * Crea una función que reciba dos array, un booleano y retorne un array.
 * - Si el booleano es verdadero buscará y retornará los elementos comunes
 *   de los dos array.
 * - Si el booleano es falso buscará y retornará los elementos no comunes
 *   de los dos array.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

function conjuntos(toArray, toArray2, toBoolean) {
  if (toBoolean) {
    const comunes = toArray.filter((elemento) => toArray2.includes(elemento));
    return "Los elementos comunes son " + comunes;
  } else {
    const noComunes1 = toArray
      .filter((elemento) => !toArray2.includes(elemento))
      .concat(toArray2.filter((elemento) => !toArray.includes(elemento)));
    return "Los elementos no comunes son " + noComunes1;
  }
}

/*
 * Crea dos funciones, una que calcule el máximo común divisor (MCD) y otra
 * que calcule el mínimo común múltiplo (mcm) de dos números enteros.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

function MCD(a, b) {
  while (b !== 0) {
    let residuo = a % b;
    a = b;
    b = residuo;
  }
  return a;
}

function MCM(a, b) {
  let multipoA = a;
  let i = 1;

  while (true) {
    if (multipoA % b === 0) return "El Mínimo común múltiplo es ", multipoA;
    i++;
    multipoA = a * i;
  }
}

/*
 * Quiero contar del 1 al 100 de uno en uno (imprimiendo cada uno).
 * ¿De cuántas maneras eres capaz de hacerlo?
 * Crea el código para cada una de ellas.
 */

function iteracionMaster() {
  let iWhile = 1;
  let idoWhile = 1;

  for (let i = 1; i <= 100; i++) console.log("i", i);

  while (iWhile <= 100) {
    console.log("iWhile", iWhile);
    iWhile++;
  }

  do {
    console.log("idoWhile", idoWhile);
    idoWhile++;
  } while (idoWhile <= 100);

  Array(100)
    .fill(0)
    .forEach((_, i) => console.log(i + 1));
};