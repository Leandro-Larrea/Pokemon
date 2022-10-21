const express = require("express")
const { Router } = require('express');
const pokemonsMidleware = require("./pokemons.js")
const typeMidleware = require("./types.js")
const router = Router();

const server = express();

server.use("/types", typeMidleware)
server.use("/pokemons", pokemonsMidleware)

server.get("/",(req,res)=>{
    res.status(200).send("asdasdsadsadsad")
})


module.exports = server;