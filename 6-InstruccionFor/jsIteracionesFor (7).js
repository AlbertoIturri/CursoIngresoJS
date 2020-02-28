function mostrar()
{ var numero;
    var contadorDivisores= 0;
    numero= parseInt(prompt("Ingrese un numero"));
    while (isNaN(numero)){
        numero=parseInt(prompt("No es un numero, reingrese"));
    } for (var i= 1; i<= numero; i++ ){
        if (numero % i == 0){
          console.log(i);
          contadorDivisores++;  
  
        }
    } console.log("Divisores encontrados: "+ contadorDivisores);




}//FIN DE LA FUNCIÓN