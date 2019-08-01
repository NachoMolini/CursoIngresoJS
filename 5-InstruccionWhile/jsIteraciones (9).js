function mostrar()
{
	var respuesta;
	var numero;
	var maximo;
	var minimo;
	var esPrimeraIteracion=true;

	do
	{
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);

		while(isNaN(numero) || numero<-10 || numero>10)
		{
			numero = prompt("Error. Debe ingresar un numero entre -10 y 10");
			numero = parseInt(numero);
		}
		
		if(esPrimeraIteracion===true)
		{
			minimo = numero;
			maximo = numero;
			esPrimeraIteracion = false;
		}
		else if(numero>maximo)
		{
			maximo = numero;			
		}
		else if(numero<minimo)
		{
			minimo = numero;
		}
	
		respuesta = confirm("¿Desea continuar?")
		
	}while(respuesta)

	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;

	//document.write("Maximo: " + maximo + "<br>");
}

/*{
	var contador=0;
	var respuesta="si";
	var numero;
	var maximo;

	while(respuesta!="no")
	{
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);

		if(contador==0)
		{
			maximo = numero;
		}
		else if(numero>maximo)
		{
			maximo = numero;			
		}

		contador++;

		respuesta = prompt("Ingrese no para finalizar");	
	}
}*/
/* Los flags tienen dos estados  true / 1 / "S"
								 false / 0 / "N"
*/