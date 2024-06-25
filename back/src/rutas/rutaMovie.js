
const {Router} = require("express");
const {Movies, newMovie} = require("../controladores/controlMovie");
const { validacionMovie } = require("../Middlewears/validacionMovie");

const rutaMovie = Router();

rutaMovie.get("/",Movies);
rutaMovie.post("/",validacionMovie,newMovie);

module.exports = {rutaMovie}