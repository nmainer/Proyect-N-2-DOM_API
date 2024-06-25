let {contenedor}= require("./index3");


function valor (obj){
   

        let titulo = document.createElement("a");
        let año = document.createElement("p");
        let dir = document.createElement("p");
        let durac = document.createElement("p");
        let gen= document.createElement("p");
        let ra = document.createElement("p");
        let pos = document.createElement("img");
        let tarjeta = document.createElement("div");
       
        
        titulo.href=
        titulo.textContent= obj.title;
        año.innerHTML = obj.year;
        dir.innerHTML= obj.director;
        durac.innerHTML= obj.duration;
        gen.innerHTML= obj.genre;
        ra.innerHTML= obj.rate;
        pos.src= obj.poster;


        
        
        tarjeta.classList.add("tar");
        titulo.classList.add("tit1");
        año.classList.add("tit2");
        dir.classList.add("tit2");
        durac.classList.add("tit2");
        gen.classList.add("tit2");
        ra.classList.add("tit2");
        pos.classList.add("imgtarjeta");


        
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(pos);
        tarjeta.appendChild(año);
        tarjeta.appendChild(dir);
        tarjeta.appendChild(durac);
        tarjeta.appendChild(gen);
        tarjeta.appendChild(ra);
        

        contenedor(tarjeta);
       
  };

  module.exports= {valor};