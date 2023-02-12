let cadena = "javaScript"

// Los modulos mas conocidos no estan, como el .length
document.write(cadena.charCodeAt(3), "<br>"); //es el codigo de la letra indicada por la posicion
document.write(cadena.indexOf("vasc"), "<br>"); // indica donde comienza la parte, una boludez
document.write(cadena.substring(2, 8), "<br>"); // fragmento entre las posiciones indicadas
// A continuacion veremos como un string se hace array
var fecha = new Date();
fecha = fecha.toString();
fecha = fecha.split(" ");
document.write(fecha[1], "<br>", "<br>"); //se convirtio en un array, esa es una ubicacion
document.write("Eso fue todo amigos"); 