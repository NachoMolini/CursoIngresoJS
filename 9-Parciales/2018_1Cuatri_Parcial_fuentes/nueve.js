function mostrar()
{
    var marca;
    var peso;
    var temperatura;
    var respuesta;
    var resto;
    var contadorPar;
    var contadorBajoCero;

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

        resto = temperatura%2;
        while(resto==0){
            
            contadorPar++;
        }
        
        while(temperatura<0){

            contadorBajoCero++;
        }

        respuesta = confirm("¿Desea ingresar mas datos?");

    }while(respuesta)

    

    


}
