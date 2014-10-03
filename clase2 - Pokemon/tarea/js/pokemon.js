function Pokemon(n,v,a,g)
{
	this.grito = g,
	this.nombre = n ,
	this.vida = v,
	this.ataque = a ,
	this.tipo = ["Electrico","Planta/Veneno","Agua"],
	this.gritar = function ()
	{
		alert(this.grito);
	}
}

var opcion = ["pikachu","bolbasaur","squirtle"];
var eleccion = parseInt(prompt("Escoja su pokemon favorito:\n0.- pikachu\n1.- bolbasaur\n2.- squirtle"));

function inicio()
{
	pikachu = new Pokemon("Pikachu",100,55,"Pika!");
	bolbasaur = new Pokemon("Bolbasaur",85,50,"Bamm Sayyy!");
	squirtle = new Pokemon("Squirtle",100,53,"Escuero");
	if (eleccion <=2) 
	{
		eleccion = opcion[eleccion];
		if (eleccion == "pikachu") 
		{
			document.write("<img src='./img/pikachu.jpg'/>");
			pikachu.vida = pikachu.vida -11;
			nombrePokemon.textContent = "Nombre Pokemon : " + pikachu.nombre
			vidaPokemon.textContent = "Numeros de Vida : " + pikachu.vida
			ataquePokemon.textContent = "Fuerza de Ataque : " + pikachu.ataque
			gritoPokemon.textContent = "Su Grito es : " + pikachu.grito
			tipoPokemon.textContent = "Tipo : " +pikachu.tipo[0]
		}
	else if (eleccion == "bolbasaur") 
		{
			document.write("<img src='./img/bolbasaur.jpg'");
			bolbasaur.vida = bolbasaur.vida -10;
			nombrePokemon.textContent = "Nombre Pokemon : " + bolbasaur.nombre
			vidaPokemon.textContent = "Numeros de Vida : " + bolbasaur.vida
			ataquePokemon.textContent = "Fuerza de Ataque :" + bolbasaur.ataque
			gritoPokemon.textContent = "Su Grito es : " + bolbasaur.grito
			tipoPokemon.textContent = "Tipo : " + bolbasaur.tipo[1]
		}
		else
		{
			document.write("<img src='./img/squirtle.jpg'/>");
			squirtle.vida = squirtle.vida -20;
			nombrePokemon.textContent = "Nombre Pokemon : " + squirtle.nombre
			vidaPokemon.textContent = "Numeros de Vida :" + squirtle.vida
			ataquePokemon.textContent = "Fuerza de Ataque : " + squirtle.ataque
			gritoPokemon.textContent = "Su Grito es : " + squirtle.grito
			tipoPokemon.textContent = "Tipo : " + squirtle.tipo[2]
		}
	}
	else
	{
		alert("Ups! Sorry\nNo contamos con informacion de este pokemon");
	}
}