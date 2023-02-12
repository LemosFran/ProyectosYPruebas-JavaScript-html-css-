/*let saludar = function(){       //funcion Expresada: func como obj, como var
    console.log("Hola")
}

saludar();*/

// Funcion declarada: es la funcion normal

const saludar = nombre => console.log(`Hola ${nombre}`);       //SE PUEDEN SACAR LAS {} LLAVES
    
// el simbolo $ sirve como el + , entre {} el parametro
//con comillas ` => alt + }

saludar("Franco");   

// ahora con dos valores

/*let suma = (a, b) => { //se puede optimizar el codigo
    return  a + b;
}

console.log(suma(6, 9));*/
 
let suma = (a, b) => a + b;

console.log(suma(9,56));

let funcionDeVariasLineas = () => { // con varias lineas se respeta la estructura de arrow f normal

    console.log("uno");
    console.log("dos");
    console.log("tres");
}

funcionDeVariasLineas();

// tambien se usa en un bucle for each

// let numeros = [1, 2, 3, 4, 5];  //estructura normal

// numeros.forEach(function(el, index){
//     console.log(`el nro ${el} esta en la posicion ${index}`)
// });

// AHORA EN EL FOR EACH OPTIMIZADO arrow function 

let numeros = [1, 2, 3, 4];

numeros.forEach((el, index) => console.log(`${el} esta en la posicion ${index}`));
// vale destacar que no se usa {} porque es una sola linea
