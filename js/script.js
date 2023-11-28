function crearUsuariosPruebas(){

//funcion que realiza una carga de prueba de usuarios en la web
    let usuariosPruebas = new Array();

    usuariosPruebas.push(new Usuario("usuario1", "apellidos1", "12-12-2000", "usuario1@email.es", "1234"));
    usuariosPruebas.push(new Usuario("usuario2", "apellidos2", "12-12-2000", "usuario2@email.es", "1234"));
    usuariosPruebas.push(new Usuario("usuario3", "apellidos3", "12-12-2000", "usuario3@email.es", "1234"));

    return usuariosPruebas;
}

function crearMensajesPruebas(){

    //funcion que realiza una carga de prueba de mensajes del chat
        let mensajesPruebas = new Array();
    
        mensajesPruebas.push(new Mensaje("usuario1", "usuario2", "Hola!!"));
        mensajesPruebas.push(new Mensaje("usuario2", "usuario1", "Hola Que tal"));
        mensajesPruebas.push(new Mensaje("usuario1", "usuario2", "Me haces un favor?"));
        mensajesPruebas.push(new Mensaje("usuario2", "usuario1", "cuenta?"));
        mensajesPruebas.push(new Mensaje("usuario1", "usuario2", "Necesito que me prestes los apuntes de interfaces"));
        mensajesPruebas.push(new Mensaje("usuario2", "usuario1", "cuenta con ello"));
        return mensajesPruebas;
    }


let chatroom = new Chat();
chatroom.usuarios = crearUsuariosPruebas();
chatroom.mensajes = crearMensajesPruebas();
// chatroom.mensajes(crearMensajes());

let usuarioActual = chatroom.usuarios[0];

let displayUsers = document.getElementById("salidaUsuarios");
displayUsers.innerHTML = chatroom.mostrarUsuarios();
let displayMensajes = document.getElementById("salidaMensajes");
displayMensajes.innerHTML = chatroom.mostrarChat(usuarioActual,chatroom.usuarios[1]);
