const peliculaCtr = {}

const pool = require('../Model/database')
// console.log(process.env.C)

peliculaCtr.controller = async(req, res) =>{
    const respuesta  = await pool.query('select * from movies')
    console.log(respuesta.rows)
    res.send('hey')
}

peliculaCtr.obtenerPeliculas = async(req, res) => {
   await pool.query('SELECT *FROM movies', (err, result) => {
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


peliculaCtr.unaPelicula = async (req, res) => {
    const  id  = req.params.id
    const respuesta = await pool.query('select * from movies where id = $1', [id] )
    console.log(respuesta.rows)
    res.status(200).json(respuesta.rows)
}

peliculaCtr.CrearPeliculas = async(req, res) => {

    const { titulo, genero, fecha_estreno, foto } = req.body

    await pool.query('insert into movies (titulo, genero, fecha_estreno, foto) values ($1, $2,$3, $4)', [
        titulo, genero, fecha_estreno, foto
    ] )

    res.status(200).json({
        message: 'Pelicula agregada exitosamente',
        body: {
            pelicula: {
                titulo, genero, fecha_estreno, foto
            }
        }
    })
}


peliculaCtr.editarPeliculas = async(req, res) => {
    const { id } = req.params
    const { titulo, genero, fecha_estreno, foto } = req.body
    const respuesta = await pool.query('update movies set id=$1, titulo=$2, genero= $3, fecha_estreno= $4, foto= $5 ', [ id, titulo, genero, fecha_estreno, foto ])
    console.log()
    res.status(200).json({
        message: 'Usuario actualizado satisfactoriamente',
        respuesta
    })
}
peliculaCtr.eliminarPeliculas = async (req, res) => {
    const { id } = req.params
    await pool.query('delete from movies where id = $1', [id])

     res.status(200).json({ Status: 'Pelicula eliminada' })
   
}




module.exports = peliculaCtr