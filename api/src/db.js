require('dotenv').config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const {DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME} = process.env;
const modelPokemons = require("./models/pokemons.js");
const modelTypes = require("./models/types.js")

const sequelize = process.env.NODE_ENV === "production"? new Sequelize({
    database: DB_NAME,
    dialect: "postgres",
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USER,
    password: DB_PASSWORD,
    pool: {
      max: 3,
      min: 1,
      idle: 10000,
    },
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
      keepAlive: true,
    },
    ssl: true,
  }):
new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/pokemon`,{
    logging: false,
    native: false
})

modelTypes(sequelize);
modelPokemons(sequelize);

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const {Pokemons, Types} = sequelize.models;



Pokemons.belongsToMany(Types, {through:"pokemonType"})
Types.belongsToMany(Pokemons, {through:"pokemonType"})



module.exports = {
    ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
    conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
  };