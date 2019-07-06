/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{ 
    var numero_dividendo;
    var numero_divisor;
    var resto;

    numero_dividendo=document.getElementById("numeroDividendo").value;
    numero_divisor=document.getElementById("numeroDivisor").value;

    numero_dividendo=parseInt(numero_dividendo);
    numero_divisor=parseInt(numero_divisor);

    resto=numero_dividendo%numero_divisor;

    alert("El resto de la division es "+resto);
    
}
