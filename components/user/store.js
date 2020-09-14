//store del componente que gestionara los datos que van a la bd,aqui se crea
// la funcion para guardar un usuario en la bd

const Model=require("./model")


//funcion para añadir un usuario,myUser es una promesa,por eso se pone return
function addUser(user){
    const myUser=new Model(user)
    return myUser.save()
}


//funcion para encontrar la lista de usuarios en la bd
async function getUsers(){
    const users=await Model.find();
    return users
}





//aqui exportaremos las funciones que creamos
module.exports={
    add:addUser,
    list:getUsers,
    
}