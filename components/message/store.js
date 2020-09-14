/*archivo para el almacenamiento de la informacion del componente,esta es 
la capa de almacenamiento de los datos,osea de los mensajes que recibira
la app*/

const Model = require("./model")


// const list=[]


//funcion para almacenar los mensajes en el array
function addMessage(message){
    
    const myMessage=new Model(message)
    myMessage.save()
}


//funcion para capturar los mensajes que esten en el array,relacionado con el
// componente user
async function getMessages(filterUser){
    return new Promise((resolve,reject)=>{
        let filter={}
        if(filterUser!==null){
            filter={user:filterUser}
        }
        Model.find(filter)
            .populate("user")
            .exec((e,populated)=>{
                if(e){
                    reject(e)
                    return false
                }
                resolve(populated)
            })
        })
    
}

//funcion para actualizar los mensajes segun su id
async function updateText(id,message){
    const foundMessage= await Model.findOne({
        _id:id
    })
    foundMessage.message=message;//aca se actualiza el mensaje
    const newMessage= await foundMessage.save()//aca esperamos a que se guarde
    return newMessage;//aca devolvemos ese nuevo mensaje actualizado
}

//funcion para eliminar un mensaje
function removeMessage(id){
    return Model.deleteOne({
        _id:id
    })
}







//exporto las funciones por medio de un objeto,esto permite ir exportando
// varias a medida que las vaya creando

module.exports={
    add:addMessage,
    list:getMessages,
    updateText:updateText,
    remove:removeMessage,
}

