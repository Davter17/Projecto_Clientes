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


    addUsuario(usuario) {
        this.usuarios.push(usuario);
    }

    borrarUsuario(idUsuario) {
        this.usuario = this.usuario.filter(user => usuario.id !== idUsuario);
    }

    enviarMensaje(mensaje) {
        this.mensajes.push(mensaje);
    }

    mostrarChat(emisor,receptor){
        this._mensajes.forEach(mensaje => {
            if(mensaje.emisor == emisor && mensaje.receptor == receptor){
                mensaje.mostrarMensaje();
            }
        });
    }

}