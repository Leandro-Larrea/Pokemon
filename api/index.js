const server = require( "./src/app.js");
require('dotenv').config();

const { conn } = require("./src/db.js")

conn.sync({force:false}).then(()=>{
server.listen(process.env.PORT || 3001, ()=>{
    console.log("listening the best server in the world =D")
        });
    });