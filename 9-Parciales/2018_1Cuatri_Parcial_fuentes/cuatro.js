function mostrar()
{
    var primerNumero;
    var segundoNumero;
    var resultado;

    primerNumero = prompt("Ingrese el primer numero");
    segundoNumero = prompt("Ingrese el segundo numero");

    if(primerNumero==segundoNumero){

        resultado = primerNumero+segundoNumero;
    }
    else{
        
        if(primerNumero>segundoNumero){

           resultado = primerNumero-segundoNumero;
        }
        else{

            primerNumero = parseInt(primerNumero);
            segundoNumero = parseInt(segundoNumero);

            resultado = primerNumero+segundoNumero;

            if(resultado>10){
                
               resultado = "La suma es "+resultado+" y supero el 10";
            }
        }
    }

    alert(resultado);
}
