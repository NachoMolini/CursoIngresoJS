function mostrar()
{
	var contador=0;
	var acumulador=0;
	var numero;
	var promedio;

	while(contador<5){

		contador = contador+1;
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		while(isNaN(numero)==true || numero<0 || numero>10){

			numero = prompt("Ingrese correctamente un numero");
			numero = parseInt(numero);
		}
		acumulador = acumulador+numero;

	}
	promedio = acumulador/contador;
	alert(acumulador);
	alert(promedio);
	




}