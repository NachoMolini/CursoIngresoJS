function mostrar()
{
    var letra;
    var numero;
    var respuesta;
    var letraMax;
    var letraMin;
    var contador=0;
    var contadorPar=0;
    var contadorImpar=0;
    var contadorCero=0;
    var contadorPositivo=0;   
    var acumuladorPositivo=0;
    var acumuladorNegativo=0;

    do
    {
        letra = prompt("Ingrese una letra: ");
        while(isNaN(letra)==false)
        {
            letra = prompt("Error. Ingrese una letra: ");
        }

        numero = prompt("Ingrese un numero entre -100 y 100: ");
        numero = parseInt(numero);
        while(isNaN(numero) || numero<-100 || numero>100)
        {
            numero = prompt("Error. Ingrese un numero entre -100 y 100: ");
            numero = parseInt(numero);
        }

        if(numero%2==0 && numero!=0)
        {
            contadorPar++;
        }
        else if(numero%2!=0 && numero!=0)
        {
            contadorImpar++;
        }

        if(numero>0)
        {
            contadorPositivo++;
            acumuladorPositivo = acumuladorPositivo+numero;
        }
        else if(numero<0)
        {
            acumuladorNegativo = acumuladorNegativo+numero;
        }
        else
        {
            contadorCero++;
        }

        if(contador==0)
        {
            maximo = numero;
            minimo = numero;
            letraMax = letra;
            letraMin = letra;
        }
        else if(numero>maximo)
        {
            maximo = numero;
            letraMax = letra;
        }
        else if(numero<minimo)
        {
            minimo = numero;
            letraMin = letra;
        }

        contador++;
        respuesta = confirm("¿Desea ingresar mas datos?");

    }while(respuesta)

    document.write("La cantidad de números pares es: " + contadorPar + "<br>");
    document.write("La cantidad de números impares es: " + contadorImpar + "<br>");
    document.write("La cantidad de ceros es: " + contadorCero + "<br>");
    document.write("El promedio de todos los números positivos ingresados es: " + acumuladorPositivo/contadorPositivo + "<br>");
    document.write("La suma de todos los números negativos es: " + acumuladorNegativo + "<br>");
    document.write("El numero y letra del maximo son: " + maximo + "-" + letraMax + " y del minimo: " + minimo + "-" + letraMin + "<br>");
 
}
