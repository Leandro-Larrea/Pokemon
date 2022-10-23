const axios = require("axios")
const {Types} = require("../db.js")


const getTypes = async()=>{
    let a = await Types.findAll()
    if(a.length) return a
   let pokeTypes = await axios.get("https://pokeapi.co/api/v2/type")
    pokeTypes = pokeTypes.data.results.map(e=> e.name)
    for(let i = 0; i < pokeTypes.length; i++){
        await Types.create({name:pokeTypes[i]})
    }
    let t = await Types.findAll()
    return t

}

module.exports = getTypes;