/* 1- VERIFICA LA PARIDAD DEL NÚMERO INGRESADO */

function verificarParidad(num) {
    if (num % 2 === 0) {
        console.log(num + ' es un número par');
    }
    else {
        console.log(num + ' es un número impar')
    }
}

console.log('Ejercicio Nº 1')
verificarParidad(12)
verificarParidad(31)
console.log('')


/* 2- IDENTIFICA EL MAYOR ENTRE DOS NÚMEROS O SI SON IGUALES */

function identificarMayor(num1, num2) {
    if (num1 > num2) {
        console.log(num1 + ' es mayor que ' + num2)
    }
    if (num1 < num2) {
        console.log(num2 + ' es mayor que ' + num1)
    }
    if (num1 == num2) {
        console.log(num1 + ' y ' + num2 + ' son iguales')
    }
}

console.log('Ejercicio Nº 2')
identificarMayor(86, 98)
identificarMayor(21, 22)
identificarMayor(3, 3)
console.log('')

/* 3- INDICA SI EL NÚMERO INGRESADO ES MÚLTIPLO DE 5 */

function multiploCinco(num) {
    if (num % 5 === 0) {
        console.log(num + ' es múltiplo de 5');
    } else {
        console.log(num + ' no es múltiplo de 5');
    }
}

console.log('Ejercicio Nº 3')
multiploCinco(17)
multiploCinco(70105)
console.log('')

/* 4- IMPRIME LOS NÚMEROS DESDE EL CERO HASTA EL INGRESADO  */

function numerosHasta(num) {
    for (let i = 0; i <= num; i++) {
        console.log(i)
    }
}

console.log('Ejercicio Nº 4')
numerosHasta(4)
console.log('')


/* 5- IMPRIME UNA PALABRA LA CANTIDAD DE VECES INDICADA */

function imprimirPalabra(palabra, cantidad) {
    for (let i = 0; i < cantidad; i++) {
        console.log(i + 1 + '. ' + palabra)
    }
}

console.log('Ejercicio Nº 5')
imprimirPalabra('PUNCHI', 8)
console.log('')

/* 6- IMPRIME TODOS LOS VALORES DE LA ARRAY */

function imprimirArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

console.log('Ejercicio Nº 6')
const myArray = ['Aceituna', 'Aceitun', 'Aceitu', 'Aceit', 'Acei', 'Ace'];
imprimirArray(myArray);
console.log('')

/* 7- IMPRIME TODOS LOS 10 NÚMEROS DE LA ARRAY EXCEPTO EL QUINTO */

function imprimirArrayExceptoQuinto(array) {
    for (let i = 0; i < array.length; i++) {
        if ( i !== 4) {
            console.log(array[i]);
        }
    }
}

console.log('Ejercicio Nº 7')
const newArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
imprimirArrayExceptoQuinto(newArray);
console.log('')

/* 8- IMPRIME LOS VALORES DE UNA ARRAY POR EL INDICADO EN LA SEGUNDA ARRAY */

function multiplicarArray(array, numero) {
    array.forEach(function(multiplicar) {
        console.log(multiplicar * numero);
    });
}

console.log('Ejercicio Nº 8')
const lastArray = [31, 212, 64, 314, 223];
const multiplicador = 3;
multiplicarArray(lastArray, multiplicador);