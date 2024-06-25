const mongoose = require("mongoose");

const movieEsquema = new mongoose.Schema({
    title : String,
    year: Number,
    director: String,
    duration:String,
    genre:Array,
    rate: Number,
    poster:String
}
);

const Peli = mongoose.model("Movie" , movieEsquema);

module.exports = {Peli};