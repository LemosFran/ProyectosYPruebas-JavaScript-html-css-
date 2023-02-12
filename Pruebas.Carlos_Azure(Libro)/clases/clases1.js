class inventario{
    constructor(nombre)
    {
        this.nombre = nombre;
        this.articulos = [];
    }

    add (nombre, cantidad)
    {
        this.articulos[nombre] = cantidad;
    }

    borrar (nombre)
    {
        delete this.articulos[nombre]
    }

    cantidad (nombre)
    {
        return this.articulos[nombre]
    }

    getNombre ()
        {
            return this.nombre;
        }
    
}