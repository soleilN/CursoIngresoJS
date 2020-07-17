/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var perimetro;
var largoTerreno;
var anchoTerreno;
var alambrado;

largoTerreno=txtIdLargo.value;
largoTerreno=parseInt(largoTerreno);

anchoTerreno=txtIdAncho.value;
anchoTerreno=parseFloat(anchoTerreno);

perimetro=(largoTerreno + anchoTerreno)*2;

alambrado=perimetro*3;

alert("la cantidad de alambre necesario es:" +alambrado+ "metros de alambre");


}
function Circulo () 
{
var radioTerreno;
var alambrado;

radioTerreno=txtIdRadio.value;
radioTerreno=parseFloat(radioTerreno);

radioTerreno = (radioTerreno*2)*Math.PI;
alambrado =radioTerreno*3;
 alert("la cantidad de almbre necesaria es:" +alambrado+ "metros");

	
}
function Materiales () 
{
	var largo;
	var ancho;
	var cemento;
	var cal;

     largo=txtIdLargo.value;
     largo=parseFloat(largo);

     ancho=txtIdAncho.value;
     ancho=parseFloat(ancho);

     cemento= (largo*ancho)*2;
     cemento=parseFloat(cemento);

     cal=(largo*ancho)*2;
     cal=parseFloat(cal);

     alert("se necesitan" +cemento+ " bolsas de cemento y se necesitan" +cal+ "bolsas de cal");

}