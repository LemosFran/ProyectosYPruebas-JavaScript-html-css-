function invventario(nombre)
{
    let _nombre = nombre;
    let _articulos = [];

    invventario.prototype = {
        add: function (nombre, cantidad)
        {
            this.articulos[nombre] = cantidad;
        }
    }

    function add(nombre, cantidad)
    {
        _articulos[nombre] = cantidad;
    }

    /*function borrar(nombre)
    {
        delete _articulos[nombre];
    }*/

    function cantidad(nombre)
    {
        return _articulos[nombre];
    }

    function nombre()
    {
        return _nombre;
    }

    return{
        add,
        borrar,
        cantidad,
        nombre
    }

}
//una vez creada la clousure, se pueden usar sus metodos de la sig manera
// asi se puede manipular

let libros = invventario("libros");

document.write(libros.add("angularJS", 3), "<br>");
document.write(libros.add("javaScript", 10), "<br>");
document.write(libros.add("NodeJS", 5), "<br>");
document.write(libros.cantidad("angularJS"), "<br>");
document.write(libros.cantidad("javaScript"), "<br>");
document.write(libros.borrar("angularJS"), "<br>");
document.write(libros.cantidad("angularJS"), "<br>");