function mostrar()
{
	var contador=0;
	var acumulador=0;
	var respuesta;
	var numero;

	do
	{
		numero = prompt("Ingrese un numero:");
		while(isNaN(numero))
		{
			numero = prompt("Error. Ingrese un numero");
		}
		numero = parseInt(numero);
		acumulador = acumulador+numero;
		contador++;

		respuesta = prompt("¿Desea seguir? S/N:");
		while(respuesta!="S" && respuesta!="N")
		{ 
			respuesta = prompt("Error. Ingrese S/N");
		}
		
	}while(respuesta=="S")

	document.getElementById("suma").value = acumulador;
	document.getElementById("promedio").value = acumulador/contador;

}