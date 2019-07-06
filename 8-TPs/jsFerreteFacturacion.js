/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{ 
    var precio1;
    var precio2;
    var precio3;
    var suma;

    precio1=document.getElementById("PrecioUno").value;
    precio2=document.getElementById("PrecioDos").value;
    precio3=document.getElementById("PrecioTres").value;

    precio1=parseInt(precio1);
    precio2=parseInt(precio2);
    precio3=parseInt(precio3);

    suma=precio1+precio2+precio3;

    alert(suma);
	
}
function Promedio () 
{
    var precio1;
    var precio2;
    var precio3;
    var suma;
    var promedio;

    precio1=document.getElementById("PrecioUno").value;
    precio2=document.getElementById("PrecioDos").value;
    precio3=document.getElementById("PrecioTres").value;

    precio1=parseInt(precio1);
    precio2=parseInt(precio2);
    precio3=parseInt(precio3);

    suma=precio1+precio2+precio3;
    promedio=suma/3;

    alert(promedio);
	
}
function PrecioFinal () 
{
    var precio1;
    var precio2;
    var precio3;
    var suma;
    var suma_final;

    precio1=document.getElementById("PrecioUno").value;
    precio2=document.getElementById("PrecioDos").value;
    precio3=document.getElementById("PrecioTres").value;

    precio1=parseInt(precio1);
    precio2=parseInt(precio2);
    precio3=parseInt(precio3);

    suma=precio1+precio2+precio3;
    suma_final=suma+suma*21/100;

    alert(suma_final);
	
}