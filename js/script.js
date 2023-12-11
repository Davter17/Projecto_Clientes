
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
    let encontrado = -1;
    for(i=0; i < chatroom.usuarios.length ;i++){
        if (chatroom.usuarios[i].email == email){
            encontrado = i;
            break;
        }
    }
    if(encontrado == -1){
        let usuario = new Usuario(username,nombre,apellidos,fechaDeNacimiento,email,password);
        chatroom.addUsuario(usuario);
        alert("Usuario registrado");
        location.href = 'login.html';
    }else{
        alert("El email ya existe.");
    }
    
}

function logout() {
    localStorage.removeItem("userLogin");
    location.href = 'index.html';

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
            location.href = 'experiencias.html';
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
    displayLogin.innerHTML = "Chatrooom de "+ usuarioLogin;
    displayUsuario.innerHTML = "<h3>Chat con: "+receptor+"</h3>";
    localStorage.setItem("receptor",receptor)
    displayMensajes.innerHTML = chatroom.mostrarChat(usuarioLogin,receptor);
}

function comprobarLogin(){
    let usuarioLogin  = localStorage.getItem("userLogin");
    if(usuarioLogin!=null){
        enlacesSesion();
        return usuarioLogin;
    }
    return null;
}

function verificarAcceso(){
    if(localStorage.getItem("userLogin")==null)
        location.href = 'login.html';
}


function enlacesSesion(){
    let enlaces = document.getElementById("enlaces-session");
    let cadena = '<a href="nueva_experiencia.html"><button type="button">Añadir Experiencia</button></a>';
    cadena += '<a href="chat.html"><button type="button">Chat Usuarios</button></a>';
    cadena += '<a href="#" onclick="logout();"><button type="button">Cerrar Sesión</button></a>';
    enlaces.innerHTML = cadena;
}


let chatroom = new Chat();
let usuarioLogin = comprobarLogin();
//leemos los datos del localstorage
chatroom.leerUsuarios(); 
chatroom.leerMensajes();