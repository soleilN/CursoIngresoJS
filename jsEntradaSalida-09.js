/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var resultado;

    sueldo=txtIdSueldo.value;
    sueldo=parseInt(sueldo);
    


    
    resultado=sueldo*10/100+ sueldo; 
    txtIdResultado.value = resultado;

	
}
/*function mostrarAumento() manera correcta
{
	var sueldo;
	var resultado;
	var porcentaje;

    sueldo=txtIdSueldo.value;
    sueldo=parseInt(sueldo);
    
    porcentaje= sueldo*10/100;

    
    resultado=sueldo+porcentaje; 
    txtIdResultado.value = resultado;

	alert(resultado);
}*/
