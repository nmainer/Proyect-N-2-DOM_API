

/*
class Movie {
    constructor({title,year,director,duration,genre,rate,poster}){
        if(!title || !poster || !director){
            throw new Error ("los campos title, poster y director son obligatorios");
        }
        if (typeof title !== "string" || typeof poster !== "string" || typeof director !== "string"){
            throw new Error ("complete correctamente los campos");
        }
     this.title = title,
     this.year= year,
     this.director= director,
     this.duration=duration,
     this.genre=genre,
     this.rate=rate,
     this.poster=poster
    }
};



class RepositorioMovie {
    constructor(){
    }
    valores = async (Url)=>{
        try{
            const peliculas = await fetch(Url);
            const dato = await peliculas.json();
            const listaPelis =  dato.map((peli)=>{ return new Movie({...peli})})
            return listaPelis ;
        }catch(error){
            console.error ("ha ocurrido el sig error: " + error);
            throw error;
        }

    }
     
};

const valor =  new RepositorioMovie();

const functionValor = valor.valores(Pelis2);

*/

