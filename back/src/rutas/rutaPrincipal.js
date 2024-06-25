const {Router} = require("express");
const {rutaMovie} = require("./rutaMovie");


const rutaPrincipal = Router();


rutaPrincipal.use("/Movies",rutaMovie);



module.exports = {rutaPrincipal}