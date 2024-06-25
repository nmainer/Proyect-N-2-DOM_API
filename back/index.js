const {app} = require("../back/src/server");
const {conexionBase} = require ("./src/configBase/baseMongoose");


conexionBase().then( () =>{
  app.listen(3000, ()=>{
    console.log ("Servidor activo");
  });
});




