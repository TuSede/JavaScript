//Los objetos se declaran la PRIMERA LETRA EN mAYUSCULA
//eN LOS OBJETOS ES CREAN BLOQUES var Objeto {};

//variables de asignacion por valor
//variables de asignacion por referencia

function Pokemon(nomPoke,vidaPoke,ataPoke) //variables de parametros se asigna a variables de estructura
{
	var estructuraPokemon = //bloque los bloque van con };
	{
	//variables y funciones
	//1.- nombre: "Pikachu",tipo:"Electrico" ,vida: 100 ,	ataque: 55
		nombre: nomPoke ,
		vida: vidaPoke ,
		ataque: vidaPoke ,
		datos: 
		{
			tipo: "Tierra", debilidad: "Fuego"
		}
	};
	return estructuraPokemon;
}
//var pikachu 0= estructuraPokemon; //intancia de la variabel tipo referencia
var pikachu = Pokemon("Pikachu",100,55); //INSTANCIO WL OBJETO
var bolbasaur = Pokemon("Bolbasaur",90,50);//cuando se llama a un objeto se lo hace con ()
//bolbasaur.nombre = "Bolbasaur";
//bolbasaur.tipo = "Tierra";
//bolbasaur.vida = 90;
//bolbasaur.ataque = 50;

console.log(bolbasaur.datos.tipo)