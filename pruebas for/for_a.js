var sisi = [1, 2, 3, 2 * 2, 5, 6];
let soso = ["Franco", "Ariel", "Lemos", "Mengueche", "Macaraca", "jojota"];

/*Asi se recorre un array con for ANIDADOS */

for(i = 0; i < sisi.length; i++){
    for(j = 0; j < soso.length; j++){
        document.write(("<br>"), sisi[i], ("<br>")); /*Asi se hace los saltos de lineas en el doc.write */
      
        document.write(soso[j], ("<br>"));
    }
}

     /*Pero se repiten todos los valores el numero indicado en i<9 */