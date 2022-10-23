const {Pokemons} = require("../db.js")
const {Types} = require("../db.js")

const createCokemon = async(cokeObj)=>{
    try {
        let {type} = cokeObj
        console.log(cokeObj)
    let cokemon = await Pokemons.create(cokeObj)
    let cokeType = await Types.findAll({where:{
        name: type
    }})
    cokemon.addTypes(cokeType)
    return cokemon
    } catch (error) {
        throw ("somenthing get wrong when creating the cokemon")
    } 
    
}

module.exports = createCokemon
