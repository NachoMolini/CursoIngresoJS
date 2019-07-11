function mostrar()
{
	var nota;

	alert(nota=Math.floor(Math.random()*(10-1))+1);
	
	if(nota>=4 && nota<9){

		alert("APROBÓ");
	}
	else{
		if(nota>=9){

			alert("EXCELENTE");
		}
		else{

			alert("Vamos, la proxima se puede");
		}
	}
}