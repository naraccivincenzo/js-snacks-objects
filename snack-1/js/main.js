/*crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello, alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array.*/

'use strict';
//initialize the array
const cars = [{
    marca: 'Audi',
    modello: 'A5',
    alimentazione: 'benzina',
}, {
    marca: 'BMW',
    modello: 'X5',
    alimentazione: 'diesel',
}, {
    marca: 'Mercedes',
    modello: 'C63',
    alimentazione: 'gpl',
}, {
    marca: 'Fiat',
    modello: 'Panda',
    alimentazione: 'elettrico',
}, {
    marca: 'Volkswagen',
    modello: 'Golf',
    alimentazione: 'metano',
}, {
    marca: 'Ford',
    modello: 'Mustang',
    alimentazione: 'benzina',
}, {
    marca: 'Nissan',
    modello: 'Qashqai',
    alimentazione: 'diesel',
}, {
    marca: 'Toyota',
    modello: 'Yaris',
    alimentazione: 'gpl',
}, {
    marca: 'Renault',
    modello: 'Clio',
    alimentazione: 'elettrico',
}, {
    marca: 'Peugeot',
    modello: '308',
    alimentazione: 'metano',
}];

//initialize the arrays for the cars by fuel
const benzina = [];
const diesel = [];
const altro = [];

//push cars in the arrays
for (let i = 0; i < cars.length; i++) {
    if (cars[i].alimentazione === 'benzina') {
        benzina.push(cars[i]);
    } else if (cars[i].alimentazione === 'diesel') {
        diesel.push(cars[i]);
    } else {
        altro.push(cars[i]);
    }
}

//print the arrays
console.log(cars);
console.log('Benzina:', benzina);
console.log('Diesel:', diesel);
console.log('Altro:', altro);