let myArray = [3, 2 ,1 ,4];

//son los mas utiles y menos conocidos por supuesto 
// .pop .push .shift .unshift ya son conocidos

document.write("Los elementos del array son: ", myArray, ("<br>"));
document.write(myArray.sort(), "<br>"); //todos ordenados
document.write(myArray.join(" "), "<br>"); //sirve para colocar un string, espacios, puntos y comas, etc. en todos los lugares.
// es mas eficiente que andar agregando espacios individualmente
// por ej= [3, + " ", 4, + " "];
// sobre todo si se usan bucles
document.write(myArray.map(Math.sqrt), "<br>"); // raiz cuadrada a todos
let resultado = myArray.map(function(elemento){ //Ver bien el uso de elementos, que signfica
    document.write(elemento *=2);
});
document.write(resultado, "<br>"); // con lo anterior
// multiplico los elementos por 2, y aparto las comas al final

//filter es muy usado tambien, para no crear un bucle
// ej siguiente son los nros divisibles
let divisibles = myArray.filter(function(elemento){
    return elemento % 2 == 0;
});
document.write(divisibles, "<br>");//como el anterior se crea una funcion
document.write(myArray.slice(1, -1)); //selecciona algunos datos
// el -1 es de atras para adelante


