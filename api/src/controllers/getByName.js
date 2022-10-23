const axios = require("axios")
const db = require("../db")
const {Pokemons} = require("../db.js")
const {Types} = require("../db.js")

const getByName = async (na) => { 
      try {
          let a = await Pokemons.findOne({
            where:{
                name:na
            },
          include:{
             model: Types,
             attributes:['name'],
             through:{
                 attributes:[]
                 }
             }
         })
         
           if(Object.values(a).length)  return a

           

         }catch(error){

            try {
                let b = await axios.get(`https://pokeapi.co/api/v2/pokemon/${na}`)
               b = {
                    name:b.data.name,
                    ability: b.data.abilities.map(e => e.ability.name),
                    img : b.data.sprites.other["official-artwork"].front_default,
                    id : b.data.id,
                    types : b.data.types
                        }
                    
                
                return b
            } catch (error) {
                throw ("andata a la puta que te re pario tambien")
            }
            
         }
    }


module.exports = getByName;