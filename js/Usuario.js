
//  creamos la clase usuario

class Usuario {

    //  atributos qeu entran por formulario al crear Usuario
    constructor(nombre, apellidos, fNacimiento, email, clave) {

        this._nombre = nombre;
        this._apellidos = apellidos;
        this._fNacimiento = fNacimiento;
        this._email = email;
        this._clave = clave;

        // se rellenará al crear el Usuario
        this._fRegistro = "";
        this._ultimoAcceso = "";
    }

    // metodos getter

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
    set fRegistro(fecha) {
        this._fRegistro = fecha;
    }



}
// fin clase Usuario




///funcion que crea un nuevo usuario cada vez que se rellena el registro y se pulsa el input
function registrar() {

    let nombre = document.getElementById("name").value;
    let apellidos = document.getElementById("apellido").value;
    let fechaNacimiento = document.getElementById("fecha").value;
    let email = document.getElementById("email").value;
    let clave = document.getElementById("password").value;

    // creamos el nuevo usuario con los datos del formulario

    let nuevoUsu = new Usuario(nombre, apellidos, fechaNacimiento, email, clave);
    //introducimos la fecha del dia que se crea el Usuario usando una funcion
    nuevoUsu.fRegistro(fechaHoy());


    //convertimos el usuario en un documento JSON 
    //lo almacenamos en  localStorage con el nombre del email del usuario
    localStorage.setItem(email, nuevoUsu);

    //redireccion a la pag de bienvenida
    location.href = 'bienvenido.html';
    // con return false evitamos que el formualrio se envie al servidor
    return false;

}




// funcion que devuelve la fecha actual en formato D/M/A
function fechaHoy() {
    let h = new Date();
    let d = h.getDate();
    let m = h.getMonth();
    let y = h.getFullYear();
    return fechaRegistro = d + "/" + m + "/" + y + "";
}