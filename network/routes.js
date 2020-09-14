//archivo para manejar las rutas de los componentes,este es el servidor de rutas

const express=require("express")
const message=require("../components/message/network")
const user=require("../components/user/network")
const chat=require("../components/chat/network")

const routes=function(server){
    server.use("/message",message)
    server.use("/user",user)
    server.use("/chat",chat)
}

module.exports=routes;