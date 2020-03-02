function mostrar()
{ var marca;
  var peso;
  var temperatura;
  var respuesta;
  var contadorTemPares= 0;
  var pesoMaximoNoCongelado;
  var marcaPesada;
  var flag= 0;
  var contadorProductosCongelados= 0;

  
  

  // --------------------  Repito mientras el usuario quiera -----------------------
  do { 
      // ---------------------- Pido datos --------------------------
      marca = prompt("Ingrese una marca");
          
        peso = parseInt(prompt("Ingrese el peso entre 1 y 100 "));
        while (peso < 1 || peso > 100 || isNaN(peso) ){
          peso = parseInt(prompt("Peso invalido. Ingrese el peso entre 1 y 100"));
        } temperatura = parseInt(prompt("Ingrese una temperatura entre -30 y 30 "));
           while(temperatura < -30 || temperatura > 30 || isNaN(temperatura) ){
               temperatura = parseInt(prompt("Temperatura invalida. Ingrese una temperatura entre -30 y 30"));
           } // ----------------------- Pregunto si quiere continuar ---------------------------
            respuesta = prompt("Quiere seguir ingresando?");
            // ----------------------- Paridad -------------------------------------------
            if (temperatura % 2 == 0 ){
                contadorTemPares++;
            } // ----------------------- Marca del producto mas pesado no congelado  ------------------------
             if ((flag == 0 || peso > pesoMaximoNoCongelado )&& temperatura > 0 ){
                 pesoMaximoNoCongelado = peso;
                 marcaPesada = marca;
                 flag = 1;
             } // --------------------- Productos Congelados -------------------------
              if (temperatura < 0 ){
                  contadorProductosCongelados++;
              }
             
             

  } while (respuesta == 's' ); 
 alert =(contadorProductosCongelados);
}
