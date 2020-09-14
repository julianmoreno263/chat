//este archivo es el que tendra el esquema de como guardaremos los datos
// en nuestra base de datos de mongo , para esto utilizamos la libreria mongoose
// este sera el modelo para el componente user
const mongoose=require("mongoose")

//utlizamos la clase Schema de mongoose y creamos en esta clase el esquema
// el esquema por ahora solo tendra definido el nombre del usuario,mas adelante
// le podremos pasar una imagen si la necesitamos

const Schema=mongoose.Schema

const mySchema=new Schema({
    name:String,
})


//codigo del modelo del esquema para el archivo store.js del componente

const model=mongoose.model("user",mySchema)
module.exports=model;