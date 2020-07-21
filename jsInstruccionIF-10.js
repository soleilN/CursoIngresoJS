//Torres SOl ejer 10//



function mostrar()


{
	var numeroRandom;
	var mensaje;
	
	numeroRandom=Math.floor((Math.random() * 10)+1);


	if(numeroRandom>8)
	{
		mensaje="EXCELENTE";
    }
    else
    {
	
		if(numeroRandom>4)
		{
			mensaje="Aprobado";
		}
		else
		{
			mensaje="Vamos, la proxima se puede";
		}	

			alert(numeroRandom+mensaje);
	}
}
function mostrar()


{
	var numeroRandom;
	
	numeroRandom=Math.floor((Math.random() * 10)+1);


	if(numeroRandom>8)
	{
		alert(numeroRandom+"EXCELENTE");
    }
    else
    {
	
		if(numeroRandom>4)
		{
			alert(numeroRandom+"Aprobado");
		}
		else
		{
			alert(numeroRandom+"Vamos, la proxima se puede");
		}
	}
}FIN DE LA FUNCIÓN/*



function mostrar()


{
	var numeroRandom;
	
	numeroRandom=Math.floor((Math.random() * 10)+1);


	if(numeroRandom>8)
	{
		alert(numeroRandom+"EXCELENTE");
    }
    else
    {
	
		if(numeroRandom>4)
		{
			alert(numeroRandom+"Aprobado");
		}
		else
		{
			alert(numeroRandom+"Vamos, la proxima se puede");
		}
	}
}

