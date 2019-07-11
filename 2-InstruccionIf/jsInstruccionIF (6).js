function mostrar()
{
    var edad;
    
    edad=document.getElementById("edad").value;

    if(edad<13){

        alert("Es niño");
    }
    else{
        if(edad>17){

            alert("Es adulto");

        }
        else{
            
            alert("Es adolescente");
        }

    }   
}


/* 
    if(edad<13){
        
        alert("Es niño");
    }
    else if(edad>18){

        alert("Es adulto");
    }
    else{

        alert("Es adolescente");
            } ***otra forma de hacerlo***
    
        

    if(edad>=13 && edad<=17){

        alert("Es adolescente");
    }
    if(edad<13){

        alert("Es un niño");
    }
    if(edad>17){

        alert("Es mayor de edad");
    } ***asi esta mal hecho***
*/
 
