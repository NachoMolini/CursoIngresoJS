function mostrar()
{
    var nombre;
    var peso;
    var temperatura;
    var respuesta;
    var maximo;
    var nombreMax;
    var temperaturaMax;
    var maxBajoCero;
    var minBajoCero;
    var contadorBajoCero=0;
    var contador=0;
    var contadorPar=0;
    var acumulador=0;
    
    do
    {
        nombre = prompt("Ingrese el nombre del animal: ");

        peso = prompt("Ingrese el peso del animal: ");
        peso = parseInt(peso);
        while(isNaN(peso) || peso<1 || peso>1000)
        {
            peso = prompt("Error. Ingrese nuevamente el peso: ");
            peso = parseInt(peso);
        }

        temperatura = prompt("Ingrese la temperatura: ");
        temperatura = parseInt(temperatura);
        while(isNaN(temperatura) || temperatura<-30 || temperatura>30)
        {
            temperatura = prompt("Error. Ingrese nuevamente la temperatura: ");
            temperatura = parseInt(temperatura);
        }

        if(temperatura%2==0)
        {
            contadorPar++;
        }

        if(contador==0)
        {
            maxBajoCero = peso;
            minBajoCero = peso;

            maximo = peso;
            nombreMax = nombre;
            temperaturaMax = temperatura;
        }
        else if(peso>maximo)
        {
            maximo = peso;
            nombreMax = nombre;
            temperaturaMax = temperatura;
        }
        else if(peso>maxBajoCero && temperatura<0)
        {
            maxBajoCero = peso;
        }
        else if(peso<mixBajoCero && temperatura<0)
        {
            minBajoCero = peso;
        }
      
        if(temperatura<0)
        {
            contadorBajoCero++;
        }

        acumulador = acumulador+peso;
        contador++;

        respuesta = confirm("¿Desea seguir?");

    }while(respuesta)

    document.write("La cantidad de temperaturas pares es: " + contadorPar + "<br>");
    document.write("El nombre y temperatura del animal mas pesado es: " + nombreMax + " y " + temperaturaMax + "<br>");
    document.write("La cantidad de animales que viven a menos de 0º es: " + contadorBajoCero + "<br>");
    document.write("El promedio del peso de todos los animales es: " + acumulador/contador + "<br>");
    document.write("El peso máximo es: " + maxBajoCero + " y el mínimo es: " + minBajoCero + "<br>");

}
