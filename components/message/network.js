//archivo que maneja las peticiones del componente message


const express=require("express")
//paquete que maneja la transmision de archivos de tipo imagen,pdf,etc
const multer=require("multer")


//codigo para enlazar el archivo de response.js
const response=require("../../network/response")
const controller=require("./controller")
const router=express.Router()


//codigo para usar el multer para guardar los archivos de imagen,pdf,etc
// const upload=multer({
//     dest:"uploads/",
// })

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '.jpg') //Appending .jpg
    }
})




const upload = multer({
    storage: storage
})


//peticion get
router.get("/",function(req,res){
    /*con este codigo le indico al controlador como debe de filtrar los mensajes,
    en este caso se deben filtrar por usuario*/
    const filterMessages=req.query.user||null;

    controller.getMessage(filterMessages)
        .then((messageList)=>{
            response.success(req,res,messageList,200)
        })
        .catch(e=>{
            response.error(req,res,"Error inesperado",500,e)
        })
   
})

//peticion post
router.post("/",upload.single('file'),function(req,res){
    // res.send("Mensaje nuevo añadido!!")
    // res.status(201).send({error:"",body:"Creado ok!!"})
 
    //asi llamamos a la primera funcion del controlador del componente
    controller.addMessage(req.body.chat,req.body.user,req.body.message)
    .then((fullMessage)=>{
        response.success(req,res,fullMessage,201)
    })
    .catch((e)=>{
        response.error(req,res,"Información erronea",400,"Error en el controllerMessage")
        
        
    })
  
    
})

//peticion delete
router.delete("/:id",function(req,res){
    
    controller.deleteMessage(req.params.id)
        .then(()=>{
            response.success(req,res,`Mensaje ${req.params.id} eliminado`,200)
        })
        .catch(e=>{
            response.error(req,res,"Error interno",500,e)
        })

})



//codigo para la ruta de modificar mensajes,se usa la consulta patch
router.patch("/:id",function(req,res){
    
    controller.updateMessage(req.params.id, req.body.message)
        .then((data)=>{
            response.success(req,res,data,200)
        })
        .catch(e=>{
            response.error(req,res,"Error interno",500,e)
        })

})




//exportamos estas consultas
module.exports=router;
