const express = require('express');
const cors = require('cors');
const morgan = require('morgan')
const path = require('path')


// Inizialization 
const app = express();



// Settings 
app.set('port', process.env.PORT || 3003)
require('dotenv').config()

// MmiddlerWare
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))



//   Routes
app.use('/api', require('./Routers/peliculas.router'))
app.use('/api', require('./Routers/actores.router'))


// statics
app.use(express.static(path.join(__dirname, 'public')))

// Error 500 y 400
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('server error status: 500!');
  });

  app.use(function(req, res, next) {
    res.status(404).send('Lo sentimos Ruta incorrecta! error 404');
  });

// server
const main = async() =>{
    await app.listen(app.set('port'))
    console.log('Server on port', app.set('port'))
    
}
main()