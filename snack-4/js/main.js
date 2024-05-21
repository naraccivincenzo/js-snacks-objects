/*Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome 
e l’indicazione se può guidare, in base all’età.
Es risultato finale:
[
  { nome: 'Tizio', cognome: 'Caio', eta: 20, info:'Tizio Caio può guidare' },
  { nome: 'Pippo', cognome: 'pluto', eta: 15, info:'Pippo Pluto NON può guidare' }
]*/

'use strict'
//initialize the generic array
const people = [{
  name: 'Tizio',
  surname: 'Caio',
  age: 20,
}, {
  name: 'Pippo',
  surname: 'pluto',
  age: 15,
}, {
  name: 'Pluto',
  surname: 'Paperino',
  age: 25,
}, {
  name: 'Paperino',
  surname: 'Pluto',
  age: 30,
}, {
  name: 'Topolino',
  surname: 'Paperino',
  age: 17,
}
];

//initialize the result array
const result = [];

/*loop through the people array
and push the info into the result*/
for (let i = 0; i < people.length; i++) {
  if (people[i].age >= 18) {
    result.push(people[i]);
    result[i].info = `${result[i].name} ${result[i].surname} può guidare`;
  } else {
    result.push(people[i]);
    result[i].info = `${result[i].name} ${result[i].surname} NON può guidare`;
  }
}


//print the arrays
console.log('People:', people);
console.log('Result:', result);
