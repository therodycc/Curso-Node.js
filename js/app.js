/*Esta varible frutero se convierte en la varible frutas del otro documento */
const frutero = require('../Frutas.js');
const {Asperitivos, comidas} = require('../Comidas.js');

/*Forma de hacer el foreach */
frutero.forEach(item =>{
    console.count("Cantidad de " + item);
})

console.log('-');
console.log('-');
console.log('-');
console.log('-');

console.log('Todas las comidas');
comidas.forEach(item =>{
    console.log('------' + item);
})

console.log('-');
console.log('-');
console.log('-');
console.log('-');

console.log('Todos los asperitivos');
Asperitivos.forEach(item3 =>{
    console.log('------' + item3);
})

/*para crear nuestro paquete json ejecutamos el siguiente comando: npm init -y */
