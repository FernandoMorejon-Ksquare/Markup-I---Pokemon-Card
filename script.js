
function pokemon(name, hp, attack, defense, spattack, spdefense, speed){
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.spattack = spattack;
    this.spdefense = spdefense;
    this.speed = speed;


    this.pokemonCard = function(){
        console.log('Hi im '+ this.name)
    }
}

const pokemon1 = new pokemon('Bulbasaur');
console.log(pokemon1.name);
pokemon1.pokemonCard();