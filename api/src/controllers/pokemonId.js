const axios = require("axios");
 
const getCokeId = async(id)=>{
   let a = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    let p = a.data
   
   let pokemon = {
    name: p.name,
    id: p.id,
    abilities: p.abilities.map(e=> { return {name:e.ability.name}}),
    types: p.types.map(e=> { return {name:e.type.name}}),
    height:p.height,
    weight:p.weight,
    image: p.sprites.other["official-artwork"].front_default
   }
   p.stats.forEach(e => {
        pokemon[e.stat.name] = e.base_stat
        }
    );
    return pokemon
}

module.exports = getCokeId;