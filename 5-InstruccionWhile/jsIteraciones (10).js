function mostrar()
{ 
    var acumuladorPos=0 ;
    var acumuladorNeg=0;
    var contadorPos=0;
    var contadorNeg=0;
    var contadorCeros=0;
    var contadorPares=0;
    var promPos;
    var promNeg;
    var diferencia;
    var numero;
    var respuesta='s';
    do{ numero= parseInt(prompt("Ingrese un numero:"));
    while(isNaN(numero)){
        numero=parseInt(prompt("No es un numero, reingrese:"));
    } respuesta= prompt("Quiere ingresar otro numero?");
    if (numero < 0){
        contadorNeg= contadorNeg + 1;
        acumuladorNeg=acumuladorNeg + numero;

    }  if(numero > 0){
        contadorPos= contadorPos + 1;
        acumuladorPos= acumuladorPos + numero;

    } if(numero== 0){
        contadorCeros= contadorCeros + 1;
    } if (numero % 2 == 0 ){
        contadorPares= contadorPares + 1;
    }
    

    } while(respuesta == 's');
     promPos= acumuladorPos / contadorPos;
     promNeg= acumuladorNeg / contadorNeg;
     diferencia= acumuladorPos + acumuladorNeg;

     document.write("La suma de los negativos es: "+ acumuladorNeg + "<br>" )
     document.write("La suma de los positivos es: "+ acumuladorPos + "<br>")
     document.write("La cantidad de positivos es: "+contadorPos + "<br>")
     document.write("La cantidad de negativos es: "+contadorNeg+"<br>")
     document.write("la cantidad de ceros es: "+contadorCeros+ "<br>")
     document.write("La cantidad de numeros pares es: "+contadorPares+"<br>")
     document.write("El promedio de positivos es: "+promPos+"<br>")
     document.write("El promedio de negativos es: "+promNeg+"<br>")
     document.write("La diferencia entre positivos y negativos es: "+diferencia+"<br>")




    




	




}//FIN DE LA FUNCIÓN
/* 1- Suma de los negativos
   2- Suma de los positivos
   3- Cantidad de positivos
   4- Cantidad de negativos
   5- Cantidad de ceros
   6- Cantidad de numeros pares
   7- Promedio de positivos
   8- Promedio de negativos
   9 Diferencia entre positivos y negativos
   */
