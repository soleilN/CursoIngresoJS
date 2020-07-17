/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;

	precioUno=txtIdPrecioUno.value;
	precioUno=parseInt(precioUno);

	precioDos=txtIdPrecioDos.value;
	precioDos=parseInt(precioDos);

	precioTres=txtIdPrecioTres.value;
	precioTres=parseInt(precioTres);

	suma= precioUno+precioDos+precioTres;

	alert(suma);
}
function Promedio () 
{

	var precioUno;
	var precioDos;
	var precioTres;
	var suma;
	var promedio;

	precioUno=txtIdPrecioUno.value;
	precioUno=parseInt(precioUno);

	precioDos=txtIdPrecioDos.value;
	precioDos=parseInt(precioDos);

	precioTres=txtIdPrecioTres.value;
	precioTres=parseInt(precioTres);

	suma= precioUno+precioDos+precioTres;
	
	promedio= suma / 3;
	alert(promedio);
}
function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;
	var PrecioFinal

	precioUno=txtIdPrecioUno.value;
	precioUno=parseInt(precioUno);

	precioDos=txtIdPrecioDos.value;
	precioDos=parseInt(precioDos);

	precioTres=txtIdPrecioTres.value;
	precioTres=parseInt(precioTres);

	suma= precioUno+precioDos+precioTres;
	PrecioFinal= suma*21/100+suma;

	alert(PrecioFinal);

	
}