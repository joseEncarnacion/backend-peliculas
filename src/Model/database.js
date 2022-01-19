const {Pool} = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: "jose1234*",
    database: 'peliculas',
    port: '5432' 
})



module.exports = pool