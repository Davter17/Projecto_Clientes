function crearUsuarios(){

//funcion que realiza una carga de prueba de usuarios en la web
    let usuarios = new Array();

    usuarios.push(new("usuario1", "apellidos1", "12-12-2000", "usuario1@email.es", "1234"));
    usuarios.push(new("usuario2", "apellidos2", "12-12-2000", "usuario1@email.es", "1234"));
    usuarios.push(new("usuario3", "apellidos3", "12-12-2000", "usuario1@email.es", "1234"));

    return usuarios;
}


let chatroom = new Chat();
chatroom.usuarios(crearUsusarios());
// chatroom.mensajes(crearMensajes());

let usuarioActual = chatroom.usuarios[0];
chatroom.mostrarUsuarios();
chatroom.mostrarChat(usuarioActual,chatroom.usuarios[1]);
