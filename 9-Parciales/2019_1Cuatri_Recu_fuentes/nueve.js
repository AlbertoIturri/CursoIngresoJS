function mostrar()
{ var nombre;
  var edad;
  var sexo;
  var nota;
  var respuesta;
  var contadorVaronesAprobados=0;
  var contadorMenores= 0;
  var contadorAdolescentes= 0;
  var contadorMayores= 0;
  var contadorNotasF=0;
  var contadorNotasM=0;
  var acumuladorMenores= 0;
  var acumuladorAdolescentes= 0;
  var acumuladorMayores= 0;
  var acumuladorF= 0;
  var acumuladorM= 0;
  var promedioMenores= 0;
  var promedioAdolescentes= 0;
  var promedioMayores= 0;
  var promedioF= 0;
  var promedioM= 0;
   // ----------------------- Repito hasta que el usuario quiera ------------------------
   // ------------------------ Pido datos ---------------------------------
    do{
        nombre = prompt("Ingrese un nombre");
         while(!(isNaN(nombre))){
             nombre = prompt("No es un nombre. Ingrese un nombre");
         } edad = parseInt(prompt("Ingrese una edad"));
          while(isNaN(edad) || edad <= 0 ){
              edad = parseInt(prompt("Edad invalida. Ingrese una edad"));
          } sexo = prompt("Ingrese sexo (f o m ) ");
           while(sexo != 'f' && sexo != 'm'){
               sexo= prompt("Sexo invalido. Ingrese sexo (f o m) ");
           } nota = parseInt(prompt("Ingrese una nota "));
            while(isNaN(nota)){
                nota = parseInt(prompt("Nota Invalida. Ingrese una nota"));
            } if (sexo == 'm' && nota >= 4){
                contadorVaronesAprobados++;

            } if (edad < 13 ){
                acumuladorMenores= acumuladorMenores + nota;
                contadorMenores++
            } else if (edad >= 13 && edad <= 17 ){
                acumuladorAdolescentes = acumuladorAdolescentes + nota;
                contadorAdolescentes++;
            } else {
                acumuladorMayores = acumuladorMayores + nota;
                contadorMayores++;
            }
            respuesta = prompt("Quiere continuar?");

    } while(respuesta == 's' );
    // ---------------------- Promedios------------------------
     

}
