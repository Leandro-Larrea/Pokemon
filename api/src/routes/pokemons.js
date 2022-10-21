const { Router } = require("express");
const router = Router();
const axios = require("axios")
const getCokemones = require("../controllers/pokemons.js")

router.get("/", async (req,res)=>{
    try {
       let a = await getCokemones()
       return res.status(200).json(a)
    } catch (error) {
        return res.status(404).send("somenthign get wrong")
    }
    
})

module.exports = router;