// Es una FUNCION que se llama a si misma
// Consta de 1. caso base(Es el que permite terminar la recursion)
// Y 1. Caso Recursivo (La funcion llamandose)
// Antes cualquier caso identificar bien lo anterior

function recur(n) // n = 3 por ejemplo
{
    if(n <= 1)  // Si n = 1 termina la recursion
    {
        return 1
    }   
      else{
        return n * recur(n -1); // Pone el nro por el nro - 1. Hasta llegar a 1 y retornar el mismo y asi terminar
      }
     // esa es ka sintaxis! se escribe con un if / else y siempre con return; hay muchas maneras de usarlos
}

console.log(recur(6));

    // PRACTICAR LAS DIFERENTES FORMAS DE USARLO