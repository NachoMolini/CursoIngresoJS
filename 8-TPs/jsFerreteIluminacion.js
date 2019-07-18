/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
/*{
    var cantidad;
    var precio=35;
    var precioSinDescuento;
    var precioConDescuento;
    var marca;
    var iibb;

    marca = document.getElementById("Marca").value;

    cantidad = document.getElementById("Cantidad").value;

    if(cantidad>5){
        precioSinDescuento = cantidad*precio;
        precioConDescuento = precioSinDescuento*50/100;
        document.getElementById("precioDescuento").value = precioConDescuento;      
    }
    else if(cantidad == 5){

        if(marca == "ArgentinaLuz"){
            precioSinDescuento = cantidad*precio;
            precioConDescuento = precioSinDescuento - precioSinDescuento*40/100;
            document.getElementById("precioDescuento").value = precioConDescuento;
        }
        else{
            precioSinDescuento = cantidad*precio;
            precioConDescuento = precioSinDescuento - precioSinDescuento*30/100;
            document.getElementById("precioDescuento").value = precioConDescuento;              
        }
    }
    else if(cantidad == 4){

        if(marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
            precioSinDescuento = cantidad*precio;
            precioConDescuento = precioSinDescuento - precioSinDescuento*25/100;
            document.getElementById("precioDescuento").value = precioConDescuento;
        }
        else{
                precioSinDescuento = cantidad*precio;
                precioConDescuento = precioSinDescuento - precioSinDescuento*20/100;
                document.getElementById("precioDescuento").value = precioConDescuento;
            }
    }
    else if(cantidad == 3){

        if(marca == "ArgentinaLuz"){
            precioSinDescuento = cantidad*precio;
            precioConDescuento = precioSinDescuento - precioSinDescuento*15/100;
            document.getElementById("precioDescuento").value = precioConDescuento;
        }
        else if(marca == "FelipeLamparas"){

                precioSinDescuento = cantidad*precio;
                precioConDescuento = precioSinDescuento - precioSinDescuento*10/100;
                document.getElementById("precioDescuento").value = precioConDescuento;
        }
        else{
            precioSinDescuento = cantidad*precio;
            precioConDescuento = precioSinDescuento - precioSinDescuento*5/100;
            document.getElementById("precioDescuento").value = precioConDescuento;
        }
    }
    else{
        precioConDescuento = cantidad*precio;
        document.getElementById("precioDescuento").value = precioConDescuento;
    }
    precioConDescuento = document.getElementById("precioDescuento").value;

    if(precioConDescuento > 120){
        iibb = precioConDescuento*10/100;
        alert("Usted pago $"+iibb+" de IIBB");
    }
}*/

{
    var cantidad;
    var precio=35;
    var precioSinDescuento;
    var precioConDescuento;
    var marca;
    var iibb;

    marca = document.getElementById("Marca").value;

    cantidad = document.getElementById("Cantidad").value;

    switch(cantidad){

        case "5":
            switch(marca){

                case "ArgentinaLuz":
                    precioSinDescuento = cantidad*precio;
                    precioConDescuento = precioSinDescuento - precioSinDescuento*40/100;
                    document.getElementById("precioDescuento").value = precioConDescuento;
                    break;
                                                
                default:
                    precioSinDescuento = cantidad*precio;
                    precioConDescuento = precioSinDescuento - precioSinDescuento*30/100;
                    document.getElementById("precioDescuento").value = precioConDescuento;  
                    break;

            }
        case "4":
            switch(marca){

                case "ArgentinaLuz":
                case "FelipeLamparas":
                    precioSinDescuento = cantidad*precio;
                    precioConDescuento = precioSinDescuento - precioSinDescuento*25/100;
                    document.getElementById("precioDescuento").value = precioConDescuento;
                    break;

                default:
                    precioSinDescuento = cantidad*precio;
                    precioConDescuento = precioSinDescuento - precioSinDescuento*20/100;
                    document.getElementById("precioDescuento").value = precioConDescuento;
                    break;
            }
        case "3":
            switch(marca){

                case "ArgentinaLuz":
                    precioSinDescuento = cantidad*precio;
                    precioConDescuento = precioSinDescuento - precioSinDescuento*15/100;
                    document.getElementById("precioDescuento").value = precioConDescuento;
                    break;

                case "FelipeLamparas":
                    precioSinDescuento = cantidad*precio;
                    precioConDescuento = precioSinDescuento - precioSinDescuento*10/100;
                    document.getElementById("precioDescuento").value = precioConDescuento;
                    break;

                default:
                    precioSinDescuento = cantidad*precio;
                    precioConDescuento = precioSinDescuento - precioSinDescuento*5/100;
                    document.getElementById("precioDescuento").value = precioConDescuento;
                    break;                
            }
        case "2":
        case "1":
            precioConDescuento = cantidad*precio;
            document.getElementById("precioDescuento").value = precioConDescuento;
            break;         
    }
}
