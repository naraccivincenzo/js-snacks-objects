/*Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Es:
[
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]
Crea un nuovo array con la lista dei mammiferi.*/

'use strict'
//initialize the generic array animals
const animals = [{
    name: 'leone',
    family: 'felidi',
    class: 'mammiferi',
}, {
    name: 'cane',
    family: 'canidi',
    class: 'mammiferi',
}, {
    name: 'gallina',
    family: 'fantasia',
    class: 'uccelli',
}, {
    name: 'cavallo',
    family: 'equidi',
    class: 'mammiferi',
}, {
    name: 'gatto',
    family: 'felidi',
    class: 'mammiferi',
}, {
    name: 'oca',
    family: 'paperedi',
    class: 'uccelli',
}, {
    name: 'poiana',
    family: 'fantasia',
    class: 'uccelli',
}
];

//initialize the array mammals
const mammals = [];

//create the loop for the array animals and push the animals with the class 'mammiferi' in the array mammals
for (let i = 0; i < animals.length; i++) {
    if (animals[i].class === 'mammiferi') {
        mammals.push(animals[i]);
    }
}

//print the arrays in console
console.log(animals);
console.log(mammals);