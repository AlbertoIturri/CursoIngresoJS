function mostrar()
{

var sexo = prompt("ingrese f ó m .").toLowerCase();
while(sexo != "f" && sexo != "m" ) {
    sexo = prompt("Sexo invalido. el sexo debe ser femenino o masculino")

} 



document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN