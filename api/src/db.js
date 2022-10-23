require('dotenv').config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const {DB_USER, DB_PASSWORD, DB_HOST} = process.env;
const modelPokemons = require("./models/pokemons.js");
const modelTypes = require("./models/types.js")

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/pokemon`,{
    logging: false,
    native: false
})

modelTypes(sequelize);
modelPokemons(sequelize);

const {Pokemons, Types} = sequelize.models;

Pokemons.belongsToMany(Types, {through:"pokemonType"})
Types.belongsToMany(Pokemons, {through:"pokemonType"})



module.exports = {
    ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
    conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
  };