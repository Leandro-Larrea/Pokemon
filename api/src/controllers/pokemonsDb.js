const { Pokemons } = require("../db.js");
const { Types } = require("../db.js");


const cokeDb = async(id)=>{
    let cokemones = await Pokemons.findAll({
        include:{
            model: Types,
            attributes: ["name"],
            through:{
                attributes:[]
            }
        }
    }
    )
    if(id){
            let a = cokemones.filter(e => e.id === id)
            if(a.length) return a[0]
            throw ("error")
        }
    return cokemones
}

module.exports = cokeDb;