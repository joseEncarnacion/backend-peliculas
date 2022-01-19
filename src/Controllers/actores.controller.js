const actorCtrl = {}

const pool = require('../Model/database')

actorCtrl.actores = async(req, res) =>{
   
    await pool.query('SELECT *FROM actores', (err, result) => {
        if (!err) {
            res.status(200).json({
                status: 200,
                data: result.rows
            })
        } else {
            res.status(401).json({
                message: 'Error al obtener los datos '
            })
            console.log(err)
        }
    })

}
actorCtrl.crearActor = async(req, res) =>{
   const {nombre_actor, fecha_nacimiento, sexo, foto, movies_id} = req.body

   await pool.query('insert into actores (nombre_actor, fecha_nacimiento, sexo, foto, movies_id) values ($1, $2, $3, $4, $5)', [
        nombre_actor, fecha_nacimiento, sexo, foto, movies_id
   ])

   res.status(200).json({
       message: 'Actor agregado exitosamente', 
       body: {
           Actores: {
               nombre_actor, fecha_nacimiento, sexo, foto, movies_id
           }
       }
   })

}


actorCtrl.actor = async(req, res) =>{
    const  id  = req.params.id

    const respuesta = await pool.query('select * from actores where id = $1', [id] )    
    res.status(200).json(respuesta.rows)
}


actorCtrl.eliminarActor = async(req, res) =>{
    const { id } = req.params
    await pool.query('DELETE from actores where id = $1', [id])

     res.status(200).json({ Status: 'Actor eliminado' })
}


actorCtrl.editarActor = async(req, res) =>{
    const { id } = req.params
    const {nombre_actor, fecha_nacimiento, sexo, foto, movies_id} = req.body
    await pool.query('update actores set id=$1, nombre_actor=$2, fecha_nacimiento=$3, sexo=$4, foto=$5, movies_id=$6', [id, nombre_actor, fecha_nacimiento, sexo, foto, movies_id])

    res.status(200).json({message: 'actor actualizado'})
}





module.exports = actorCtrl