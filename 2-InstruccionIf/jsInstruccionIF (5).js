function mostrar()
{
    var edad;

    edad=document.getElementById("edad").value;

    if(edad<13 || edad>17){ //tambien se puede hace asi: if(!(edad>=13 && edad<=17)) el ! niega lo del parentesis

        alert("No es adolescente");
    }

}