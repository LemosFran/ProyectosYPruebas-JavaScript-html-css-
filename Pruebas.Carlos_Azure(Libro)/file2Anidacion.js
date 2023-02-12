let libro = {
    titulo: "Aprendiendo JavaScript",
    /*primer anidacion */
    autor: {
        nombre: "Franquito Ariel",
        nacionalidad: "Burkina Faso",
        edad: 28,
        /*Otra anidacion */
        contacto: {
            email: "lemosf199@gmail.com",
            instagram: "@_lemosfran"
        }
    }, /*atencion a esa coma cerrada la llave; para continuar */
    editorial:{
        nombre: "Carlosazustre.es Books",
        web: "https://francoalemos.com.ar"
    }
}; /*ahora si cierra */

document.write(libro.autor.nacionalidad, " ", libro.editorial.web);

/*a continuacion se comparan dos objetos */
let auto1 = {
    marca: "Ford",
    modelos: "Falcon"
};
let auto2 = {
    marca: "Ford",
    modelos: "Falcon"
};

/*aca lo hice con funcion pero es lo mismo */
function compararObj() 
{document.write(auto1.marca === auto2.modelos);};


compararObj(); /*Da true o false */