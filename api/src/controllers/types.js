const axios = require("axios")

const getTypes = async()=>{
   let types = await axios.get("https://pokeapi.co/api/v2/type")
    return types.data
}

module.exports = getTypes;