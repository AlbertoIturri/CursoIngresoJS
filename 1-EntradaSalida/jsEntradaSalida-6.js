/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
//paso 1
{var numeroUno;
 var numeroDos;
 var resultado;
 //paso 2
 numeroUno= document.getElementById("numeroUno").value;
 numeroUno= parseInt(numeroUno);
 numeroDos= document.getElementById("numeroDos").value;
 numeroDos=parseInt(numeroDos);
 resultado= numeroUno + numeroDos;
 alert("el numero es "+ resultado);


}

