/*archivo para separar las respuestas de las consultas que
tenemos en nuestro server.js*/

exports.success=function(req,res,message,status){
    res.status(status|| 200).send({
        error:"",
        body:message
    })
}


//codigo para manejar errores
exports.error=function(req,res,message,status,details){
    console.error("[response error]" + details)
    res.status(status|| 200).send({
        error:message,
        body:""
    })
}