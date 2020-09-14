/*archivo controlador del componente message, aqui van todas
las funciones que la app necesita para trabajar.

1-la primera funcion sera para enviar el mensaje del usuario al servidor de la app*/

const socket = require("../../socket").socket;
const store=require("./store")


function addMessage(chat,user,message){
    return new Promise((resolve,reject)=>{
        if(!chat||!user || !message){
            console.error("[messageController] Falta el usuario,chat o el mensaje")
            reject("Datos incompletos!!")
            return false;//esto es para que no se siga ejecutando el codigo
        }

        

        const fullMessage={
            chat:user,
            user:user,
            message:message,
            date:new Date(),
            
        }

        store.add(fullMessage);

        //aqui enviamos un mensaje por socket
        socket.io.emit("message",fullMessage)


        resolve(fullMessage);
    })
   
   
}


//funcion para capturar los mensajes que tenemos en nuestro archivo store.js que
// 
function getMessage(filterUser){
    return new Promise((resolve,reject)=>{
        resolve(store.list(filterUser))
    })
}


//funcion para actualizar nuestros mensajes con patch
 function updateMessage(id,message){
    return new Promise(async(resolve,reject)=>{
        if(!id || !message){
            reject("Invalid data")
            return false
        }
        const result=await store.updateText(id,message)
        resolve(result)
    })
}



//funcion para eliminar mensajes
function deleteMessage(id){
    return new Promise((resolve,reject)=>{
        if(!id){
            reject("id inválido")
            return false
        }
        store.remove(id)
            .then(()=>{
                resolve()
            })
            .catch(e=>{
                reject(e)
            })
    })
}






//asi creamos un objeto donde podemos ir añadiendo las funciones a exportar

module.exports={
    addMessage,
    getMessage,
    updateMessage,
    deleteMessage,
}