function mostrar()
{

    var sexo = prompt("Ingrese f ó m");

    while(sexo!="f" && sexo!="m"){

        sexo = prompt("Ingrese f ó m");
           
    }
    if(sexo=="f"){

        sexo = "femenino";
    }
    else{

        sexo = "masculino";
    }

    document.getElementById("Sexo").value = sexo;

}