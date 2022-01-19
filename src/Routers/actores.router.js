const {Router} = require('express')
const router = Router()

const {actores, crearActor, actor, eliminarActor, editarActor} = require('../Controllers/actores.controller')


router.route('/actor')
.get(actores)
.post(crearActor)

router.route('/actor/:id')
.get(actor)
.put(editarActor)
.delete(eliminarActor)

module.exports = router