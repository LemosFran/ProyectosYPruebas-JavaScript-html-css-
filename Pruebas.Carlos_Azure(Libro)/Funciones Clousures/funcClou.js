// cuando una funcion se encuentra del lado del = de una variable
//osea le da valor a una variable, la misma es llamada con el nombre
//de la variable y luego el(), ej variable1(franco);

let a = "OLA";

function global()
{
    let b = "K";
        function local()
            {
                let c = "ASE";
                return a + b +c;
            }
    return local;
}

document.write(global(), "<br>");
document.write(global()(), "<br>"); // Devuelve olakase

let clousure = global();
document.write(clousure(), "<br>"); //tambien devuelve olakase
// vaia bruheria

let miCintador = (function() {
    let _contador = 0;

    function incrementar()
    {
        return _contador++;
    }
    function decrementar()
    {
        return _contador--;
    }
        function valor()
        {
            return _contador;
        }
            return {
                incrementar: incrementar,       //esta todo el clousure, pero no se estaba devolviendo nada
                decrementar: decrementar,       // con esto estas devolviendo los valores ant. parte fundamental devuelve los metodos de funcion
                valor: valor                    // Se puede poner sin los dos puntos tambien
            }
})();
document.write(miCintador.valor(), "<br>");
document.write(miCintador.incrementar(), "<br>");
document.write(miCintador.incrementar(), "<br>");
document.write(miCintador.valor(), "<br>");
document.write(miCintador.decrementar(), "<br>");
document.write(miCintador.valor(), "<br>");
document.write("Todo, esto digo todo esto, es todo amigos");






