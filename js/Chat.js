class Chat {
    constructor() {
        this._usuarios = [];
        this._mensajes = [];
    }


    // metodos getter

    get usuarios(){
        return this._usuarios;
    }

    get mensajes(){
        return this._mensajes;
    }

    // metodos setters

    set usuarios(usuarios){
        this._usuarios = usuarios;
    }

    set mensajes(mensajes){
        this._mensajes = mensajes;
    }

    // función que añade un ususario
    addUsuario(usuario) {
        this._usuarios.push(usuario);
        this.guardarUsuarios();
    }

    //función que elimina un usuario
    borrarUsuario(usuario) {
        this._usuarios.splice(usuario, 1);
    }

    //función que envia un mensaje
    enviarMensaje(mensaje) {
        this.mensajes.push(mensaje);
    }

    //función que muestra la conversación entre dos usuarios
    mostrarChat(emisor,receptor){
        let cadena="";
        this._mensajes.forEach(mensaje => {
            if(mensaje.emisor == emisor && mensaje.receptor == receptor){
                cadena += mensaje.mostrarMensaje("derecha");
            }
            if(mensaje.emisor == receptor && mensaje.receptor == emisor){
                cadena += mensaje.mostrarMensaje("izquierda");
            }
        });
        return cadena;
    }
    //función que muestra los usuarios del chat en el docucmento
    mostrarUsuarios(){
        let cadena = "";
        
        for(let i=0;i<this._usuarios.length;i++){
                cadena += "<span><button id='"+i+"' onclick='mostrarChat("+i+")'>Chatear con "+this._usuarios[i].username+"</button></span>";
        }
        return cadena;
    }

    //funcion que guarda los mensajes en el localstorage
    guardarMensajes(){
        let mensajesJSON = JSON.stringify(this._mensajes);
        localStorage.setItem("mensajes", mensajesJSON);
    }
    
    //funcion que guarda los usuarios en el localstorage
    guardarUsuarios(){
        let usuariosJSON = JSON.stringify(this._usuarios);
        localStorage.setItem("usuarios", usuariosJSON);
    }

    //funcion que lee los mensajes guardados en el localStorage
    leerMensajes(){
        let mensajesGuardados = new Array();
        let mensajesJSON = localStorage.getItem("mensajes");
        mensajesGuardados = JSON.parse(mensajesJSON);
        if (mensajesGuardados != null) {
    
            mensajesGuardados.forEach(element => {
                element.__proto__ = new Mensaje();
            });
        }
        this._mensajes = mensajesGuardados;
    }


    //funcion que lee los usuarios guardados en el localStorage
    leerUsuarios(){
        let usuariosGuardados = new Array();
        let usuariosJSON = localStorage.getItem("usuarios");
        usuariosGuardados = JSON.parse(usuariosJSON);
        if (usuariosGuardados != null) {
    
            usuariosGuardados.forEach(element => {
                element.__proto__ = new Usuario();
            });
        }
        this._usuarios = usuariosGuardados;
    }

    //función que guarda el chat al localstorage
    guardarChat() {
        this.guardarMensajes();
        this.guardarUsuarios();
    }

    //función que lee el chat del localstorage
    leerChat(){
        this.leerUsuarios();
        this.leerMensajes();
    }



}