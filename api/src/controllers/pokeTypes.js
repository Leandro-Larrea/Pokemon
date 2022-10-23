const getCokemones = require("./pokemons.js");
const { Types } = require("../db.js");


const cokeTypes = async(type)=>{
    let a = await getCokemones()
    if(type === "todos") return a
     let cokemones = a.filter((e) => {  
         if(e.types.map(a => a.type.name).includes(type))  return e
        }) 
    return cokemones
}

module.exports = cokeTypes;