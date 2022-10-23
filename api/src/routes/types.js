const { Router } = require("express");
const router = Router();
const axios = require("axios")
const getTypes = require("../controllers/types.js")
const getCokeType = require("../controllers/pokeTypes.js")

router.get("/",async(req,res)=>{
    const {type} = req.query;
    if(type){
        try {
            let a = await getCokeType(type)
           return res.status(200).json(a)
        } catch (error) {
           return res.status(404).send("le erraste nadia")
        }
    }
    let a = await getTypes()
    res.status(200).json(a)
})

module.exports = router; 