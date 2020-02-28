function mostrar()
{ var nota;
  var sexo;
   for (i= 0; i < 5 ; i++){
       nota= parseInt(prompt("Ingrese una nota (1-10)"));
       while(nota < 1 || nota > 10 || isNaN(nota) ){
           nota= parseInt(prompt("No es una nota valida, ingrese nota (1-10)"));
       } sexo= prompt("Ingrese sexo (f-m)");
         while(sexo != 'f' && sexo != 'm' ){
          sexo= prompt("Sexo invalido, ingrese sexo (f-m)");   
         } 
   }

}
