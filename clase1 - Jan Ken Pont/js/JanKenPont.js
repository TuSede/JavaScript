//Generar numeros aletorios entre rangos enteros
function aleatorio(minimo, maximo){
	var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
	return numero;
//Math = es un objeto(colecciones de funciones o variables)
//Math.floor = redondear lso numeros decimales
/*Math.random() = genera un numero de 0 -1 %
   funcionamiento resuelve (maximo - )*/
}

var piedra = 0;
var papel = 1;
var tijera = 2;

var opcionUsuario;
var opcionMaquina = aleatorio(0,2);//azar(0,2);
var opciones =["piedra","papel","tijera"]; //arreglo las cadenas van con "", los numero no necesitan ""

opcionUsuario = parseInt(prompt("Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2",0));


if (opcionUsuario >=0 && opcionUsuario <=2) 
{
	alert("Escogiste :" + opciones[opcionUsuario]);
	alert("JavaScript escogio :" + opciones[opcionMaquina]);
	
	if (opciones[opcionMaquina] == opciones[opcionUsuario]) 
	{
		alert("Empate!");
	}
	
	else if ((opcionUsuario == piedra && opcionMaquina == tijera) || (opcionUsuario == papel && opcionMaquina == piedra) || (opcionUsuario == tijera && opcionMaquina == papel)) 
	{
		alert("Ganaste :)");
	}
	
	else if ((opcionUsuario == papel && opcionMaquina == tijera) || (opcionUsuario == piedra && opcionMaquina == papel) || (opcionUsuario == tijera && opcionMaquina == piedra)) 
	{
			alert("Perdiste :(");
	}
}

else 
{
	alert("Que ha pasado !");
}