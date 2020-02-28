function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta= 's';
	var numero; 
	
	
	do{
	numero= parseInt(prompt("ingrese un numero"));
	while (isNaN(numero)){
		numero= parseInt(prompt("No es un numero. Ingrese un numero"));
	} respuesta= prompt("Quiere ingresar otro numero?");
	if (numero < 0 ){
		contador= contador + 1;
		negativo= negativo * numero;
	} else {
		contador + 1;
		positivo= positivo + numero;
	} flag= 1	

	} while(respuesta =='s');


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN