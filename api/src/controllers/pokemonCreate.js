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
     await cokemon.addTypes(cokeType)
       let a = await Pokemons.findOne({
           where:{
               id:cokemon.id
           },
           include:{
              model:Types,
              attributes:["name"],
              through:{
               attributes:[]
              } 
           }
   })
return a
    } catch (error) {
        throw ("somenthing went wrong when creating the cokemon")
    } 
    
}

module.exports = createCokemon
