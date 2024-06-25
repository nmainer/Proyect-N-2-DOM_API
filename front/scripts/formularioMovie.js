const axios = require ("axios");





const enviarFormulario = ()=>{
  

  const titulo = document.getElementById("tituloImput");
  const año= document.getElementById("añoImput");
  const direc = document.getElementById("directorImput");
  const duracion  = document.getElementById("duracionImput");
  const genero = document.getElementById("generoImput");
  const calificacion = document.getElementById("calificacionImput");
  const url = document.getElementById("posterImput");

  const title= titulo.value;
  const year= año.value;
  const director = direc.value;
  const duration = duracion.value;
  const genre = genero.value;
  const rate= calificacion.value;
  const poster = url.value;

  if(!title || !year || !director ||!duration || !genre || !rate || !poster){
    alert ("todos los campos son obligatorios");
   return;
  }

  if (year.toString().length !== 4) {
    alert ("año incorrecto");
    return;
  }
    
  

  const valorPeli = {title,year,director,duration,genre,rate,poster};

return valorPeli;
  
   
};



const envioForm = async() =>{

  try{

  const valorM = enviarFormulario();
   await axios.post("http://localhost:3000/Movies", valorM);
   alert ("pelicula cargada con exito");
   const imputs = document.getElementsByClassName("peliInput");
   for (let i=0 ; i<imputs.length ; i=i+1){
    imputs[i].value = "";
   }
  }catch(err){
    console.error(err.message)
  }
};


const botonEnviar = document.querySelector(".cargarPeli");


botonEnviar.addEventListener("click" , function (event){
  event.preventDefault();
  envioForm();
});