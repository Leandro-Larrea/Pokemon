const { Router } = require("express");
const router = Router();
const axios = require("axios")
const getTypes = require("../controllers/types.js")

router.get("/",async(req,res)=>{
    let a= await getTypes()
    res.status(200).json(a)
})

module.exports = router; 