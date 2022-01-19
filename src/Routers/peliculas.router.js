const {Router} = require('express')
const router = Router()


const {obtenerPeliculas, unaPelicula, CrearPeliculas, editarPeliculas, eliminarPeliculas} = require('../Controllers/peliculas.controller')


router.route('/peliculas')
.get(obtenerPeliculas)
.post(CrearPeliculas)

router.route('/peliculas/:id')
.get(unaPelicula)
.put(editarPeliculas)
.delete(eliminarPeliculas)


module.exports = router