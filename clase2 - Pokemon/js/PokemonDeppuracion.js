function Pokemon(n,v,a)//n= nombre, v= vida, a = ataque
{
	this.grito = "Pika!"
	this.nombre = n;
	this.vida = v;
	this.ataque = a;
	this.gritar = function () //Metodo
	{
		alert(this.grito);
	}
}
function inicio()
{
	var pikachu = new Pokemon("Pikachu",100,55);
	pikachu.vida = pikachu.vida - 13;
	nombrePokemon.textContent = pikachu.nombre
}
/*  deber 
llenar datos de prueba 
* Vida 
* Ataque 
* grito
en base al nombre aparesca la imagen del pokemon
*/

//var bolbasaur = new Pokemon("Bolbasaur",90,50);
//Metodo = Funcion - un metodo es una funcion metida dentro de un objeto
//Atriburo = Variable - cuan