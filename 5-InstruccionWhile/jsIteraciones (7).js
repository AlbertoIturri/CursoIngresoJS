function mostrar()
{

	var contador=0;
	var acumulador=0;
	var seguir='s'
	var promedio;
	var numero;

	do{ 
	numero=parseInt(prompt("Ingrese un numero"));
	while(isNaN(numero)){
	numero=parseInt(prompt("No es un numero, ingrese un numero"));
	} seguir= prompt("Quiere ingresar otro numero?");
	contador= contador + 1;
	acumulador= acumulador + numero;
} while (seguir == 's'){
	

} promedio = acumulador / contador;
	   




	  
	  
		 
	
	
		
		
	
	
		


		
	

	
	
		
	
	
		

		 
	
	

	


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN