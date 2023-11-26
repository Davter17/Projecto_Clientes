class Mensage {
    constructor(emisor, receptor, contenido, marcaTemporal) {

        this._emisor = emisor;
        this._receptor = receptor;
        this._contenido = contenido;
        this._marcaTemporal = marcaTemporal;
    }

    // metodos getters

    get emisor() {
        return this._emisor;
    }

    get receptor() {
        return this._receptor;
    }

    get contenido() {
        return this._contenido;
    }

    get marcaTemporal() {
        return this._marcaTemporal;
    }

    // metodos setters

    set emisor(emisor) {
        this._emisor = emisor;
    }

    set receptor(receptor) {
        this._receptor = receptor;
    }

    set contenido(contenido) {
        this._contenido = contenido;
    }

    set marcaTemporal(marcaTemporal) {
        this._marcaTemporal = marcaTemporal;
    }

    // Lógica para mostrar un mensaje en el documento
    mostrarMensaje(posicion) {
        let mensaje = "<div class='mensaje'>";
        if (posicion == "LD") {
            mensaje = "<div class='posicion_derecha'>";
        } else {
            mensaje = "<div class='posicion_derecha'>";
        }
        mensaje += this._marcaTemporal + "<p>" + this._contenido + "</p></div></div>";
        return mensaje;
    }
}