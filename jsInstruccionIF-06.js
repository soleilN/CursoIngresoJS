function mostrar()
{
	//tomo la edad  
	
	var edad;

	edad=txtIdEdad.value;
	edad=parseInt(edad);

if(edad>17){

	alert("usted es mayor de edad");


}

 else if(edad<18 && edad>13 )
 {

	alert("usted es un adolescente");

	}

	else{

	alert("usted es un niño");
	}


}//FIN DE LA FUNCIÓN