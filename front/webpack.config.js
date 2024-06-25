module.exports ={
    entry:{
        index:"./scripts/index.js",
        formulario: "./scripts/formularioMovie.js"
    } ,
  
    output: {
        path: __dirname + "/public",
        filename: "[name].bundle.js"
    }
}