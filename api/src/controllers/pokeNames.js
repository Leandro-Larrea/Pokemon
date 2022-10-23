const axios = require("axios")

const getNames = async () => {
    let a = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=1249")
    return a.data.results.map(e=> e.name)
}

module.exports = getNames;