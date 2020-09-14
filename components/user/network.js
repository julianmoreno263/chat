//en network creamos las rutas para las peticiones que maneje este componente

const express=require("express")
const response=require("../../network/response")
const controller=require("./controller")
const router=express.Router()

//ruta para la peticion de agregar un usuario con post
router.post("/",function(req,res){
    controller.addUser(req.body.name)
        .then(data=>{
            response.success(req,res,data,201)
        })
        .catch(e=>{
            response.error(req,res,"Internal error",500,e)
        })
})

//ruta para la peticion get y obtener una lista de usuarios
router.get("/",function(req,res){
    controller.getUsers()
        .then(data=>{
            response.success(req,res,data,200)
        })
        .catch(e=>{
            response.error(req,res,"Error inesperado",500,e)
        })
   
})


//aqui exportamos nuestras rutas
module.exports=router;