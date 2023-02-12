let imagenes = [];                          // array asociativo, con varios valores
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";           // estas iamgenes se muestran poruqe estan en la misma carpeta

// ** aqui iria la clase si fuera de una pagina sola. **

 /*var cauchin = new pakiman("Cauchin", 100, 30) ;
    //instancia // new objeto // de tipo pakiman, tipo tiera en este caso
let pokacho = new pakiman("Pokacho", 80, 50);
let tocinauro = ;*/

/*console.log(cauchin, pokacho, tocinauro);
cauchin.hablar();*/

let coleccion = [];

coleccion.push(new pakiman("Cauchin", 100, 30));
coleccion.push( new pakiman("Pokacho", 80, 50));
coleccion.push(new pakiman("Tocinauro", 120, 40));

// para mostrarlos con ciclo for especial for(blaBla in u of coleccion)

/*for(blaBla in coleccion)
{
    console.log(coleccion[blaBla]);
}*/

for( var blaBla of coleccion)        // console.log a las dos maneras del bucle igual  // blaBla es el nombre de la var, da lo mismo
{
    blaBla.mostrar(); 
}

