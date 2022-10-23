const { Router } = require("express");
const router = Router();
const axios = require("axios")
const getCokemones = require("../controllers/pokemons.js")
const getCokemonesDb = require("../controllers/pokemonsDb.js")
const pokeCreate = require("../controllers/pokemonCreate.js")
const pokeDb = require("../controllers/pokemonsDb.js")
const pokeId = require("../controllers/pokemonId.js")
const getNames = require("../controllers/pokeNames.js")
const getByName = require("../controllers/getByName.js")

router.get("/", async (req,res)=>{
    const {name} = req.query
    if(name){
        try {
            let a = await getByName(name)
            return res.status(200).json(a)
        } catch (error) {
           return res.status(404).send("error")
        }
    }
    try {
       let a = await getCokemones()
       return res.status(200).json(a)
    } catch (error) {
        return res.status(404).send("somenthign get wrong")
    } 
})

router.post("/", async (req,res)=>{
    const {name, hp, attack, defense, specialAttack, specialDefense, speed } = req.body
    if(!name || !hp || !attack || !defense || !specialAttack || !specialDefense || !speed){
        return res.status(404).send("insuficent data")
    }
    try {
        let a = await pokeCreate(req.body)
        return res.status(200).send("the cokemon has been created succesfully")
    } catch (error) {
        res.status(404).send("something it's rly bad with u")
    } 
})

router.get("/names", async(req,res)=>{
    let a = await getNames()
    return res.status(200).json(a)
})

router.get("/:asd", async(req,res)=>{
    let id = req.params.asd
   try {
         db = await pokeDb(id)
         return res.status(200).json( db)  
   } catch (error) {
    
   }
    cokemon = await pokeId(id)
    return res.status(200).json(cokemon)
} )



module.exports = router;