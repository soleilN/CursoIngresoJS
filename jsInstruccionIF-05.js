function mostrar()
{
	var edad;

	edad=txtIdEdad.value;
	edad=parseInt(edad);

 	if(!(edad<18 && edad>12) )
 	{

		alert("usted  no es un adolescente");
	}

}//FIN DE LA FUNCIÓN

/* version 2

function mostrar()
{
	var edad;

	edad=txtIdEdad.value;
	edad=parseInt(edad);

 if(edad>17||edad<13) {

	alert("usted  no es un adolescente");

	}

}

/* version 3

function mostrar()
{
	var edad;

	edad=txtIdEdad.value;
	edad=parseInt(edad);

 if(edad<18) {

 	if(edad>12) {

	alert("usted  no es un adolescente");


	}
	}


}