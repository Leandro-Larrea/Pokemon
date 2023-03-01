const express = require("express");
const { Router } = require("express");
const pokemonsMidleware = require("./pokemons.js");
const typeMidleware = require("./types.js");
const router = Router();

const server = express();

server.use("/types", typeMidleware);
server.use("/pokemons", pokemonsMidleware);
server.use("/poketime", async (req, res) => {
  try {
    let a = new Date(Date.now()).toISOString();
    return res.status(200).json(a);
  } catch (error) {
    return res.status(400).send("algo salio mal con tu fecha");
  }
});
server.get("/", (req, res) => {
  res.status(200).send("asdasdsadsadsad");
});

module.exports = server;
