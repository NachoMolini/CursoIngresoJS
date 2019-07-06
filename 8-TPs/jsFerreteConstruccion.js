/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var total;

    largo=document.getElementById("Largo").value;
    ancho=document.getElementById("Ancho").value;
   
    largo=parseInt(largo);
    ancho=parseInt(ancho);
    
    total=largo*2+ancho*2;
  
    alert(total);
}

function Circulo () 
{
    var radio;
    var total;

    radio=document.getElementById("Radio").value;
    radio=parseInt(radio);

    total=radio*2*3.14*3;

    alert(total);
}

function Materiales () 
{
    var largo;
    var ancho;
    var cemento;
    var cal;

    largo=document.getElementById("Largo").value;
    ancho=document.getElementById("Ancho").value;
   
    largo=parseInt(largo);
    ancho=parseInt(ancho);
    
    cemento=largo*2+ancho*2;

    cal=cemento*3/2;

    alert("bolsas de cemento: "+cemento+" bolsas de cal: "+cal);

}