//este archivo tendra toda la informacion para la conexion a la bd mongo

//ya creada la bd en la nube con mongodb,importamos mongoose para utilizar nuestro
// esquema del archivo model.js
// NUESTRA URL DE LA BD  mongodb+srv://db_user_chat:JAMB1177@cluster0.9m2re.mongodb.net/test
const db=require("mongoose")

//CONEXION A LA BD DE MONGO
db.Promise=global.Promise;
async function connect(url){
        await db.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology: true,
        
    })
    console.log("[db] Conexión exitosa!!")

}

module.exports=connect;
