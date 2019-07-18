function mostrar()
{ 
    var mesDelAnio; //se puede usar la ñ, pero no conviene a futuro

    mesDelAnio = document.getElementById("mes").value;

    switch(mesDelAnio){

        case "Enero":
            alert("Que comiences bien el año!!");
            break;

        case "Marzo":
            alert("A clases!!");
            break;

        case "Julio":
            alert("Se vienen las vacaciones!!");
            break;
            
        case "Diciembre":
            alert("Felices fiestas!!");
            break;
    }
}