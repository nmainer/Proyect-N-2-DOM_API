require("dotenv").config();

const mongoose = require("mongoose");


const conexionBase = async ()=>{
    mongoose.connect(process.env.mongo_uri);
};

module.exports = {conexionBase};