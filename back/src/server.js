const {rutaPrincipal} = require("./rutas/rutaPrincipal");
const express = require("express");
const cors= require("cors");
const morgan = require ("morgan");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(rutaPrincipal);


module.exports = {app};