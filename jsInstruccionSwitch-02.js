/*Torres Sol ejercico 2:
Enunciado:
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.*/
function mostrar()
{
	//tomo el mes
	var Mes;
	Mes=txtIdMes.value;
	
	switch(Mes)
	{
		case"Marzo":
		case"Abril":
		case"Mayo":
		case"Junio":
			alert("Falta para el invierno.");
			break;
		case"Julio":
		case"Agosto":
			alert("Abrigate que hace frio.");
			break;
		default:
			alert("Ya pasamos el frio, ahora calor!!!.");
			break;
	}
}//FIN DE LA FUNCIÓN