function mostrar()
{
    var planeta;

    planeta = prompt("Ingrese un planeta");

    switch (planeta) {

        case "tierra":

            alert("Acá vivimos");

            break;

        case "mercurio":
        case "venus":
        
            alert("Acá hace mas calor");

            break;

        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":

            alert("Acá hace mas frío");

            break;

    }
 
}
