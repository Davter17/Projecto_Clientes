// function crearUsuariosPruebas(chatroom){

// //funcion que realiza una carga de prueba de usuarios en la web
//     // let usuariosPruebas = new Array();

//     chatroom.addUsuario(new Usuario("usu1","usuario1", "apellidos1", "12-12-2000", "usuario1@email.es", "1234"));
//     chatroom.addUsuario(new Usuario("usu2","usuario2", "apellidos2", "12-12-2000", "usuario2@email.es", "1234"));
//     chatroom.addUsuario(new Usuario("usu4","usuario3", "apellidos3", "12-12-2000", "usuario3@email.es", "1234"));
//     chatroom.guardarUsuarios();
// }

// function crearMensajesPruebas(chatroom){

//     //funcion que realiza una carga de prueba de mensajes del chat
//         // let mensajesPruebas = new Array();
    
//         chatroom.push(new Mensaje(chatroom.usuarios[0], chatroom.usuarios[1], "Hola!!"));
//         chatroom.push(new Mensaje(chatroom.usuarios[1], chatroom.usuarios[0], "Hola Que tal"));
//         chatroom.push(new Mensaje(chatroom.usuarios[0], chatroom.usuarios[1], "Me haces un favor?"));
//         chatroom.push(new Mensaje(chatroom.usuarios[1], chatroom.usuarios[0], "cuenta?"));
//         chatroom.push(new Mensaje(chatroom.usuarios[0], chatroom.usuarios[1], "Necesito que me prestes los apuntes de interfaces"));
//         chatroom.push(new Mensaje(chatroom.usuarios[1], chatroom.usuarios[0], "cuenta con ello"));

//         chatroom.guardarMensajes();
//     }


function enviarMensaje(){
    let mnsj = document.getElementById("mensaje").value;
    let usuarioReceptor = localStorage.getItem("receptor");
    let usuarioLogin = localStorage.getItem("userLogin");
    chatroom.enviarMensaje(new  Mensaje(usuarioLogin, usuarioReceptor,mnsj));
    let displayMensajes = document.getElementById("salidaMensajes");

    displayMensajes.innerHTML = chatroom.mostrarChat(usuarioLogin,usuarioReceptor);

}

///funcion que crea un nuevo usuario cada vez que se rellena el registro y se pulsa el input
function registrar() {

    const username = document.getElementById('username').value;
    const nombre = document.getElementById('name').value;
    const apellidos = document.getElementById('apellido').value;
    const fechaDeNacimiento = document.getElementById('fecha').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let usuario = new Usuario(username,nombre,apellidos,fechaDeNacimiento,email,password);
    chatroom.addUsuario(usuario);
    alert("Usuario registrado");
    // location.href = 'login.html';
    return false;
}

function login() {

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    let encontrado = -1;
    for(i=0; i < chatroom.usuarios.length ;i++){
        if (chatroom.usuarios[i].username == username){
            encontrado = i;
            break;
        }
    }

    if(encontrado != -1){
        if(chatroom.usuarios[i].password = password){
            usuarioLogin = chatroom.usuarios[i];
            localStorage.setItem("userLogin",usuarioLogin.username);
            location.href = 'chat.html';
        }else{
            alert("Password incorrecto");
        }
    }
    else{
        alert("Nombre de usuario incorrecto");
    }
}


function mostrarUsuarios(){
    let displayUsers = document.getElementById("salidaUsuarios");
    displayUsers.innerHTML = chatroom.mostrarUsuarios();
}


function mostrarChat(id){
    let usuarioLogin = comprobarLogin();    
    let displayLogin = document.getElementById("tituloChat");
    let displayUsuario = document.getElementById("displayUsuario");
    let displayMensajes = document.getElementById("salidaMensajes");
    let receptor = chatroom.getUsuario(id).username;
    displayLogin.innerHTML = "Chatroom de "+ usuarioLogin;
    displayUsuario.innerHTML = receptor;
    localStorage.setItem("receptor",receptor)
    displayMensajes.innerHTML = chatroom.mostrarChat(usuarioLogin,receptor);
}

function comprobarLogin(){
    let usuarioLogin  = localStorage.getItem("userLogin");
    if(usuarioLogin!=null){
        return usuarioLogin;
    }
    location.href = 'login.html';   
}

let chatroom = new Chat();

//leemos los datos del localstorage
chatroom.leerUsuarios(); 
chatroom.leerMensajes();