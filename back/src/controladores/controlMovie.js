

const {Pelis,crearPeli} = require ("../servicios/servicioMongoose");
const {catchErr} = require ("../Utils/catchErr");

   const Movies = async (req,res) =>{
        const valor2 = await Pelis();
        res.status(200).send(valor2);
   
    }

    const newMovie = async(req,res)=>{
     const { title,year,director,duration,genre,rate,poster} = req.body;
     const nuevaPeli = await crearPeli({title,year,director,duration,genre,rate,poster});
     res.status(201).json("pelicula cargada correctamente");
    }



    module.exports = {
        Movies:catchErr(Movies),
        newMovie:catchErr(newMovie)
    };