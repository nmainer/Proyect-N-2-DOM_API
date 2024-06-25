
const {valor}= require("./index2");
const axios = require("axios");


  const promise = axios.get("http://localhost:3000/Movies");
   

promise.then((res)=>{
res.data.forEach((movie)=>{
valor(movie);
});

})
.catch((error)=>{
return error.mesagge;
});



