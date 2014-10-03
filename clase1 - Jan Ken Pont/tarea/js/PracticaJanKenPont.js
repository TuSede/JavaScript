function aletorio(minimo, maximo)
{
	var numero = Math.floor(Math.random() * (maximo - minimo +1) + minimo);
	return numero;
} 
var piedra = 0;
var papel = 1;
var tijera =2;
var lagarto =3;
var spock = 4;

var opUsuario;
var opMaquina = aletorio(0,4);
var opciones = ["piedra","papel","tijera","lagarto","spock"];
var opUsuario = parseInt(prompt("Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2\nLagarto: 3\nSpock: 4", 0));

if (opUsuario >=0 && opUsuario <=4) {

	alert("Escogiste :" + opciones[opUsuario]);
	alert("La Maquina escogio :" + opciones[opMaquina]);

	if (opciones[opUsuario] == opciones[opMaquina]) 
	{
		alert("Empate !");
	}
	
	else if (((opUsuario == piedra) && (opMaquina == papel | opMaquina == spock)) || ((opUsuario == papel) && (opMaquina == tijera | lagarto)) || ((opUsuario = tijera) && (opMaquina == piedra | opMaquina==spock)) || ((opUsuario = lagarto) && (opMaquina == piedra | opMaquina==tijera)) || ((opUsuario = spock) && (opMaquina == papel | opMaquina==spock))) 
	{
		alert("Has Perdido :)");
	}
	
	else if (((opUsuario == piedra) && (opMaquina == tijera | opMaquina == lagarto)) || ((opUsuario == papel) && (opMaquina == piedra | opMaquina == spock)) || ((opUsuario = tijera) && (opMaquina == papel | opMaquina == lagarto)) || ((opUsuario = lagarto) && (opMaquina == papel | opMaquina == spock)) || ((opUsuario = spock) && (opMaquina == tijera | opMaquina == piedra)))
	{
		alert("Has Ganado :)");
	}
}
else
{
	alert("Que ha pasado!");
}