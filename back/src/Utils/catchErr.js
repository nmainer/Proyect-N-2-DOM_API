

const catchErr = (controlador)=>{
    return (req,res,next)=>{
        controlador(req,res).catch((error)=>{
            next(error);
        });
    };
};


module.exports = {catchErr};