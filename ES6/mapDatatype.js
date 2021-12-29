let pikachu = {
    name: 'I am pikachu',
    power: 'I can electrify'
}

let clifary = {
    name: 'I am clifary',
    power: 'I can cute'
}
let charmendor = {
    name: 'I am charmendor',
    power: 'I thow fire'
}
const pokemon = new Map();
pokemon.set('pika',pikachu);
pokemon.set('clif',clifary);
pokemon.set('char',charmendor);

console.log(pokemon.size);
console.log(pokemon);
console.log(typeof pokemon.get('pika'))


for (const key of pokemon.keys()) {
    console.log(key);
}
for (const val of pokemon.values()) {
    console.log(val);
    // console.log(val.name + ' ' + val.power);
}

for (const itr of pokemon) {
    console.log(itr);
}