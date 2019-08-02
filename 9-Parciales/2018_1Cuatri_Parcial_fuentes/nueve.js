function mostrar()
{
    var marca;
    var peso;
    var temperatura;
    var respuesta;
    var maximo;
    var minimo;
    var maxPeso;
    var contador=0;
    var acumulador=0;
    var contadorPar=0;
    var contadorBajoCero=0;

    do
    {
        marca = prompt("Ingrese la marca");

        peso = prompt("Ingrese el peso");
        peso = parseInt(peso);
        while(isNaN(peso) || peso<1 || peso>100)
        {
            peso = prompt("Error. Ingrese nuevamente el peso");
            peso = parseInt(peso);
        }

        temperatura = prompt("Ingrese la temperatura");
        temperatura = parseInt(temperatura);
        while(isNaN(temperatura) || temperatura<-30 || temperatura >30)
        {
            temperatura = prompt("Error. Ingrese nuevamente la temperatura");
            temperatura = parseInt(temperatura);
        }

        if(contador==0)
        {
            maximo = peso;
            minimo = peso;
            maxPeso = marca;
        }
        else if(peso>maximo)
        {
            maximo = peso;
            maxPeso = marca;
        }
        else if(peso<minimo)
        {
            minimo = peso;
        }

        acumulador = acumulador+peso;
        contador++;

        if(temperatura%2==0)
        {
            contadorPar++;
        }
        
        if(temperatura<0)
        {
            contadorBajoCero++;
        }

        respuesta = confirm("¿Desea ingresar mas datos?");

    }while(respuesta)

    document.write("La cantidad de temperaturas pares es: " + contadorPar + "<br>");
    document.write("La marca del producto más pesado: " + maxPeso + "<br>");
    document.write("La cantidad de productos que se conservan a menos de 0 grados es: " + contadorBajoCero + "<br>");
    document.write("El promedio del peso de todos los productos es: " + acumulador/contador + "<br>");
    document.write("El peso máximo es: " + maximo + " y el mínimo es: " + minimo + "<br>");
        
}
