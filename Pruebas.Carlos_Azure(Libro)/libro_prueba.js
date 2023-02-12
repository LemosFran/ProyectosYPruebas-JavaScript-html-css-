var l = 0
var j = 5
/*while(l < j)
{
    document.write("Hola mundo" + "  " );
   
    l++ /*o l+=1
}*/

/*for(l= 0; l < j; l++){
    document.write("Holas macaracas" + " ");
}*/

/*Manipulacion de un objeto*/
let libroAngular = {
    titulo: "Desarrollo js",
    /* A continuacion separamos y anidamos */
    autor:{
       nombre: "Carlos Azure", //importante se van separando con comas las propiedades
       edad: 30,
       /*anidamos uno mas */
       contacto: {
        email: "lemosf199@gmail.com",
        instagram: "@_lemosfran"
       }
    },  /*ATENCION A LA COMA DESPUES DEL CORCHETE */

    paginas: 64,
    formatos: ["PDF, Mobil, ePub"],
    precio: 254.56,
    publicado: false,
    
    /* A Continuacion se vera como meter una funcion en el objeto, entonces se pasa a  llamar metodo */
    leer: function(){
        document.write("he leido el libro");
    }
};

/* A continuacion se modif el array*/ 
libroAngular.autor = "Mengueche Medina";

document.write(("<br>"), libroAngular.titulo, ("<br>"), libroAngular.autor); /*ese punto se llama notacion */
/*¡se puede acceder con variables tambien pero no se puede llamar con la notacion, sino con corchetes!*/
("<br>")
document.write(libroAngular.autor.edad);

libroAngular.leer(); /* se escribe la funcion del metodo */     