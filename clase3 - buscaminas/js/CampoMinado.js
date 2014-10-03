function explocion()
{
	alert("Boon !!!!!");
	document.write("Escogiste mal: Perdiste :'(");
}
function ganaste()
{
	document.write("Falicidades Ganaste :')");
}

//1 = Bomba - 0 = No hay Bomba
var campo = [ [ 1 , 0 , 0 ],
			  [ 0 , 1 , 0 ],
			  [ 1 , 1 , 1 ] ];

var texto = ["Cesped" , "Bomba"];
var x , y;

alert("Estas en un campo minado\nElige una posición entre el 0 y el 2 para X y para Y");
x = parseInt(prompt("Elige la posición  X? entre 0 - 2"));
y = parseInt(prompt("Elige la posición  Y? entre 0 - 2"));

if (x <=2 && y <=2) 
{
	var posicion = campo[x][y];
	document.write("Escogiste :"+texto[posicion]+"<br />");
	if (posicion == 1) 
	{
		explocion();
	}
	else 
	{
		ganaste();
	}
}
else
{
	document.write("¡Te saliste del campo!");
	explocion();
}