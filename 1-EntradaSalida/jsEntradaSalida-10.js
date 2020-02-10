/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{   var sueldo;
    var aumento;
    
    sueldo=parseInt(document.getElementById("importe").value);
    aumento=parseInt(sueldo)-parseInt((sueldo*25/100));
    document.getElementById("resultado").value= aumento;
	
}
