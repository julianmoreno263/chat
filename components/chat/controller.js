const store = require('./store');


//funcion para enviar un chat a la bd
function addChat(users) {
    if (!users || !Array.isArray(users)) {
        return Promise.reject('Invalid user list');
    }

    const chat = {
        users: users,
    };
    return store.add(chat);
}

//funcion para sacar la lista de chats

function listChats(userId) {
    return store.list(userId);
}

module.exports = {
    addChat,
    listChats,
}