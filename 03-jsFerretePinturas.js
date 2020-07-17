/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperatura;
	var gradosCentigrados;

  temperatura=txtIdTemperatura.value;
  temperatura=parseInt(temperatura);

  gradosCentigrados=(temperatura-32)*5/9;

  alert(temperatura + "Fahrenheit son :" + gradosCentigrados.toFixed(2) + "centígrados");


}

function CentigradosFahrenheit () 
{
	var temperatura;
	var gradosFarenheit;

	temperatura=txtIdTemperatura.value;
    temperatura=parseInt(temperatura);

    gradosFarenheit=(temperatura*5/9)+32;
    alert(temperatura + "centígrados son :" + gradosFarenheit.toFixed(2) + "fahrenheit");
}
