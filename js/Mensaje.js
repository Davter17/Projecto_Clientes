class Mensaje {
    constructor(emisor, receptor, contenido) {

        this._emisor = emisor;
        this._receptor = receptor;
        this._contenido = contenido;
        this._marcaTemporal = this.tiempo();
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
        this._marcaTemporal = new Date();
    }

    tiempo() {
        let h = new Date();
        return  h.getUTCHours().toString().padStart(2,"0") + ":" + h.getUTCMinutes().toString().padStart(2,"0");
    }

    // Lógica para mostrar un mensaje en el documento
    mostrarMensaje(posicion) {
        let mensaje = "<div class='mensaje ";
        mensaje += posicion+"'>";
        mensaje += "<div>"+ this._marcaTemporal+ "</div><p>" + this._contenido + "</p></div>";
        return mensaje;
    }
}