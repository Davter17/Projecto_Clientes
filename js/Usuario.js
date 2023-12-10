
//  creamos la clase usuario

class Usuario {

    //  atributos qeu entran por formulario al crear Usuario
    constructor(username,nombre, apellidos, fNacimiento, email, clave) {
        this._username = username;
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._fNacimiento = fNacimiento;
        this._email = email;
        this._clave = clave;

        // se rellenará al crear el Usuario
        this._fRegistro = this.fecha();
        this._ultimoAcceso = "";
    }

    // metodos getter
    get username(){
        return this._username;
    }
    get nombre() {
        return this._nombre;
    }
    get apellidos() {
        return this.apellidos
    }
    get fNacimiento() {
        return this._fNacimiento;
    }
    get email() {
        return this._email;
    }
    get clave() {
        return this._clave;
    }

    // métodos setter
    // set fRegistro(fecha = 0) {
    //     this._fRegistro = this.fecha();
    // }

    registrarAcceso(){
        this._ultimoAcceso = this.fecha();
    }
    // Lógica para mostrar el usuarios 
    // mostrarUsuario() {
    //     let usuario = this._username;
    //     return usuario; 
    // }   

    // funcion que devuelve la fecha actual en formato D/M/A
    fecha() {
        let h = new Date();
        return  h.getDate() + "/" + h.getMonth() + "/" + h.getFullYear()+ "";
}

}
// fin clase Usuario







