function mostrar()
{
	var contador=0;
	var acumulador=0;
	var numero;

	/*for(var i=0; i<5; i++)
	{
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		acumulador += numero;
	}*/
	
	while(contador<5){

		contador = contador+1;
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		while(isNaN(numero)==true || numero<0 || numero>10){

			numero = prompt("Ingrese correctamente un numero");
			numero = parseInt(numero);
		}
		acumulador = acumulador+numero; //acumulador += numero  es lo mismo
	}
	
	document.getElementById("suma").value = "La suma es " + acumulador;
	document.getElementById("promedio").value = "El promedio es " + acumulador/contador;

}