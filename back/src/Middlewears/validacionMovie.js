
const validacionMovie =(req,res,next)=>{
const { title,year,director,duration,genre,rate,poster} = req.body;
if (!title||!year||!director||!duration||!genre||!rate||!poster){
 return res.status(400).json("debe ingresar todos los datos");
 
}
if(year.toString().length !== 4) {
 return res.status(400).json("año ingresado incorrecto");
}
console.log ("datos correctos")
next();
}



module.exports = {validacionMovie};