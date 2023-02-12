let texto = document.getElementById("texto_lineas");
let botoncito = document.getElementById("botoncin");
botoncito.addEventListener("click", dibujoPorClick);


let d = document.getElementById("dibujito");
let lienzo = d.getContext("2d");
let lineas = 30;
let l = 0;
let yi, xf;

for(l = 0; l < lineas; l++)
{
    yi= 10 * l;
    xf= 10 * (l+1);
    dibujarLinea("pink", 0, yi, xf, 300);
    console.log(l)
}

function dibujoPorClick(){
    let x = texto.value;
    alert(x);
}

/*while(l < lineas)
{
    yi= 10 * l;
    xf= 10 * (l+1);
    dibujarLinea("pink", 0, yi, xf, 300);
    console.log(l)
    l++;
}*/


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
    {
        lienzo.beginPath();
        lienzo.strokeStyle = color;
        lienzo.moveTo(xinicial, yinicial);
        lienzo.lineTo(xfinal, yfinal);
        lienzo.stroke();
        lienzo.closePath();
    }

