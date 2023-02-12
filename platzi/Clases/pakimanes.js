class pakiman
 {
    constructor(n, v, a)        // Bloque donde estan todos los elementos, donde se los nombra
                                // donde se le da valor
    {

        this.imagen = new Image();
        this.nombre = n;
        this.vida = v;
        this.ataque = a;
        this.tipo = "tierra";               // this es una referencia a la instancia, a cauchin.
             //tipo es el nombre de la variable.

        this.imagen.src = imagenes[this.nombre];   // aca se le da valor a la imagen poniendole la ruta.
            }                       // el src la trae desde la variable de la otra hoja, la img esta en la misma carp

    mostrar()
    {
        document.body.appendChild(this.imagen);     // para mostrar la img es necesario esta funcion y mostrar donde esta (bo)
        document.write("<p>");
        document.write("<strong>" + this.nombre + "</strong> </br>");       //ver como hacer con template
        document.write("vida: " + this.vida + "</br>");
        document.write("Poder : " + this.ataque + "<hr/>");                 // hr hace una linea negra
        document.write("</p>");
    }


    hablar()      //funcion, no hace falta escribir "function"
        {
            document.write(this.nombre);
        }
 }   
