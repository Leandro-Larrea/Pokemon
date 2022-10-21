const axios = require("axios")

const getCokemones = async()=> { 
   let cokemones = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=10")
   let cokeCajas = cokemones.data.results.map(e => e.url)
    cokeCajasOk = []
    cokeCajas.forEach(e => {
        cokeCajasOk.push(axios.get(e))
    });
    cokeListos = await Promise.all(cokeCajasOk)
    .then(a => a.map(e => {
        return{
        name:e.data.name,
        ability: e.data.abilities.map(e => e.ability.name),
        img : e.data.sprites.other["official-artwork"].front_default,
        id : e.data.id,
        types : e.data.types
            }
        }
    ))
    return cokeListos
}

module.exports = getCokemones