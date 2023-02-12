class pokemones
{
    constructor(nomb, tip, fuer)
    {
        this.imagen = new Image();
        this.nombre = nomb;
        this.tipo = tip;
        this.fuerza = fuer;

        this.imagen.src = imagenes[this.nombre];
        // Subir las imagenes
    }

    mostrar()
    {
       document.body.appendChild(this.imagen);
        document.write("<br>", "Nombre: ", this.nombre, "<br>", "Tipo: ", this.tipo, "<br>", "Fuerza: ", this.fuerza, "<hr>");
      
       document.write();

    }

}

let coleccion = [];



coleccion.push(new pokemones("Cubone", "Tierra", 60));
coleccion.push(new pokemones("Charmander", "fuego", 118));
coleccion.push(new pokemones("Psyduck", "Agua", 20));

for(let chiquiTapia of coleccion)
{
    mostrar(c)
}