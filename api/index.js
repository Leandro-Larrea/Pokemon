const server = require( "./src/app.js");
require('dotenv').config();

const { conn } = require("./src/db.js")
const port = process.env.PORT || 3001;

conn.sync({force:true}).then(()=>{
server.listen( port , ()=>{
        });
    });