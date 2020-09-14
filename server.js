const express=require("express")
const app=express()
const server=require("http").Server(app)
const cors=require("cors")

//codigo para probar el servidor express

// app.use("/",function(req,res){
//     res.send("hola!!")
// })

//usando body parser,este codigo debe estar antes del use(router) para que funcione
const bodyParser=require("body-parser")
app.use(bodyParser.json())

//aqui traemos el socket
const socket=require("./socket")
socket.connect(server)

//codigo de la conexion a la bd de mongo
const db=require("./db")
db("mongodb+srv://db_user_chat:JAMB1177@cluster0.9m2re.mongodb.net/test")

app.use(cors())

// //codigo para enlazar el archivo de response.js
// const response=require("./network/response")

//con este codigo importamos el network del componente message
// const router=require("./components/message/network")

/*con este codigo importamos el servidor de rutas de componentes routes.js,y para
poder sarlo utilizamos el router(app)*/
const router=require("./network/routes")
router(app)


//codigo para crear nuestras peticiones http con router de express
// const router=express.Router()
// app.use(router)







//codigo para usar static() y manejar los archivos estaticos(html,css,js)
app.use("/app",express.static("public"))


server.listen(3000,function(){
    console.log("La app esta escuchando por http://localhost:3000")
})
