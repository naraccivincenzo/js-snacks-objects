/*A partire da un array di stringhe, crea un secondo arrau formattando le stringhe del primo array
in minuscono con l'iniziale maiuscola*/

'use strict'
const strings = ['pippo', 'PLUTO', 'miNNie', 'PaPErino'];
const result = [];

for (let i = 0; i < strings.length; i++) {
    result.push(strings[i].charAt(0).toUpperCase() + strings[i].slice(1).toLowerCase());
}
console.log(result);