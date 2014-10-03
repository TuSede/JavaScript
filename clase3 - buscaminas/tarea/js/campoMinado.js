//variables globales 
var x , y;
var texto = ["Cesped","Bomba"];
var area = new Array(3);//primer array X ejemplo area[x]

alert("Estas en un campo minado\nElige una posición entre el 0 y el 3 para X y para Y");
x = parseInt(prompt("Escoga la Posición de X? entre 0 - 3"));
y = parseInt(prompt("Escoga la Posición de Y? entre 0 - 3"));

function aletorio ()
{
	var numero = Math.floor(Math.random() * 2);
	return numero;
}
function explocion()
{
	alert("Boon !!!!!");
	document.write("<br />Escogiste mal: Perdiste :'(");
}
function ganaste()
{
	document.write("<br />Falicidades Ganaste :')");
}
//f = fila . c = columna
function campoMinado()
{
	for (var f=0;f<=3;f++) 
	{ 
		area[f] = new Array(3);//array para Y: ejemplo area[y][x]
		for ( var c=0;c<=3;c++)
		{
			area[f][c] = aletorio();
			document.write(area[f][c]);
		}
		document.write("<br />"); 
	}
}
function inicio()
{
	campoMinado();
	if(x <=3 && y <=3)
	{
		var posicion = area[x][y];
		texto = texto[posicion];
		document.write("Escogiste : <b>"+ texto+"</b>");
		if(texto == "Cesped")
		{
			ganaste();
		}
		else
		{
			explocion();
		}
	}
	else
	{
		document.write("Cordenada no existe");
		explocion();
	}
}
inicio();