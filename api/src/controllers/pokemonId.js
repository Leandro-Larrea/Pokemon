const axios = require("axios");
 
const getCokeId = async(id)=>{
   let a = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return a .data
}

module.exports = getCokeId;