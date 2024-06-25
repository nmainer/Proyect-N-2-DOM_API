const {Peli}= require ("../modelos/Movie");



const Pelis = async ()=>{
    
        const valor =  await Peli.find();
        return valor; 
};

const crearPeli = async (movie)=>{
        const valor = await Peli.create(movie);
        return valor;
    } ;
    








module.exports = {Pelis,crearPeli};