function mostrar()
{
	var edad;
	var estadoCivil;
    

	edad=txtIdEdad.value;
	

	estadoCivil=document.getElementById("estadoCivil").value;
    
    if(edad>17&&estadoCivil=="Soltero")
    {
    		alert("Es soltero y no es menor.");
	}
}//FIN DE LA FUNCIÓN