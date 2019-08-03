function mostrar()
{
    var nota;
    var sexo;
    var minima;
    var sexoMin;
    var contadorMasc=0;
    var contador=0;
    var acumulador=0;

    while(contador<5)
    {
        nota = prompt("Ingresar la nota");
        nota = parseInt(nota);
        while(isNaN(nota) || nota<0 || nota>10)
        {
            nota = prompt("Reingrese la nota correctamente");
            nota = parseInt(nota);
        }

        sexo = prompt("Ingrese el sexo: f o m");
        while(sexo!="f" && sexo!="m")
        {
            sexo = prompt("Ingrese correctamente el sexo: f o m");
        }

        acumulador = acumulador+nota;

        if(contador==0)
        {
            minima = nota;
            sexoMin = sexo;
        }
        else if(nota<minima)
        {
            minima = nota;
            sexoMin = sexo;
        }

        if(sexo=="m" && nota>=6)
        {
            contadorMasc++;

        }

        contador++;
    }

    alert("El promedio de las notas es: " +acumulador/contador);
    alert("La nota mas baja es: " +minima+ " y el sexo de la persona es: " +sexoMin);
    alert("La cantidad de varones con nota mayor o igual a 6 es: " +contadorMasc);
}
