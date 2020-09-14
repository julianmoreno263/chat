//este archivo es el que tendra el esquema de como guardaremos los datos
// en nuestra base de datos de mongo , para esto utilizamos la libreria mongoose

const mongoose=require("mongoose");
const { schema } = require("../user/model");

//utlizamos la clase Schema de mongoose y creamos en esta clase el esquema

const Schema=mongoose.Schema

const mySchema=new Schema({
    chat:{
        type:Schema.ObjectId,
        ref:"Chat",
    },
    user:{
        type:Schema.ObjectId,
        ref:"user"
    },
    message:{
        type:String,
        required:true,
    },
    date:Date,
    
})


//codigo del modelo del esquema para el archivo store.js del componente

const model=mongoose.model("message",mySchema)
module.exports=model;