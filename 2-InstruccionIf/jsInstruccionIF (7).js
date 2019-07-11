function mostrar()
{
    var edad;

    edad=document.getElementById("edad").value;
    
    if(edad<18 && document.getElementById("estadoCivil").value!="Soltero"){

        alert("Es muy pequeño para NO ser soltero");
    }

}