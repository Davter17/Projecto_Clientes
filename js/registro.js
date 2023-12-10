//Variables
loginForm = document.getElementById("loginForm");
bienvenida = document.getElementById("bienvenida");
pbienvenida = document.getElementById("pbienvenida");

//LocalStorage
function cargar (clave){
    datos = localStorage.getItem(clave);
    return datos ? JSON.parse(datos) : null;
}

function guardar(clave, datos){
    localStorage.setItem(clave, JSON.stringify(datos));
}


//Cargar LocalStorage nada más iniciar
document.addEventListener("DOMContentLoaded", () => {
    usuarios = cargar('usuarios') || [];

    for (let i = 0; i < usuarios.length; i++) {
        usuarios[i]._proto = new Usuario();
    }

    usuarioActual = cargar('usuarioActual') || null;
    if (usuarioActual !== null){
        darBienvenida();
    }
});


//Función registrar nuevos usuarios
function registrar() {
    nombre = document.getElementById('name').value;
    apellidos = document.getElementById('apellido').value;
    fechaDeNacimiento = document.getElementById('fecha').value;
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;

    posibilidadCrearUsuario = true;

    for (i = 0; i < usuarios.length; i++){

        if (email == usuarios[i]._email){
            posibilidadCrearUsuario = false;
            break;
        }
    }

    if (posibilidadCrearUsuario == true){
        usuarioNuevo = new Usuario(nombre, apellidos, fechaDeNacimiento, email, password);
        usuarios.push(usuarioNuevo);
        guardar("usuarios", usuarios);

        alert("Usuario creado con éxito");

        window.location.href = "iniciarSesion.html";
    } else{
        alert("Lo siento, este email ya está registrado.");
    }

}

function iniciarSesion() {
    emailIniciar = document.getElementById('emailIniciar').value;
    passwordIniciar = document.getElementById('passwordIniciar').value;

    Login = false;

    for (i = 0; i < usuarios.length; i++){

        if (emailIniciar == usuarios[i]._email && passwordIniciar == usuarios[i]._clave){
            Login = true;

            usuarioActual = usuarios[i];
            guardar("usuarioActual", usuarioActual);
            
            break;
        }
    }

    if (Login == true){
        darBienvenida();

        return false;
    } else{
        alert("Email o contraseña incorrectas. Vuelva a probar");
    }

}

function darBienvenida(){

    loginForm.style.display = "none";
    bienvenida.style.display = "block";

    pbienvenida.innerHTML = "Bienvenido " + usuarioActual._nombre;
}

function Desconectar (){
    loginForm.style.display = "block";
    bienvenida.style.display = "none";

    pbienvenida.innerHTML = " ";

    usuarioActual = null;
    guardar("usuarioActual", usuarioActual);

    alert("Usuario desconectado con éxito");
}