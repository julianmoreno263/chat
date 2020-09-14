//en este controlador se crea la funcion para crear un usuario y ses usuario
// se le envia a la bd por medio del store.js

const store=require("./store")

//funcion para crear un usuario,necesita el name del usuario
function addUser(name){
    if(!name){
        return Promise.reject("Invalid name!!")
    }
    
    const user ={
        name,
    }

    return store.add(user)

}


//funcion para capturar la lista de usuarios
function getUsers(){
    return store.list()
}




//aqui exportamos las funciones
module.exports={
    addUser,
    getUsers,
    
}