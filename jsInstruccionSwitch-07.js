/*Torres Sol ejercicio 7 
Enunciado:
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
*/
function mostrar()
{
	var Destino;
	Destino =txtIdDestino.value;
	
	switch(Destino)
	{
		case"Bariloche":
			alert("se encuentra en el Oeste de Argentina");
			break;
		case"Cataratas":
			alert("se encuentra en el Norte de Argentina");
			break;
		case"Mar del Plata":
			alert("se ecuentra al Esta de Argentina");
			break;
		case"Usuhaia":
			alert("se encuentra al Sur de Argentina");
			break;
	}

}//FIN DE LA FUNCIÓN