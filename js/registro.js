function registrar() {
    const nombre = document.getElementById('name').value;
    const apellidos = document.getElementById('apellido').value;
    const fechaDeNacimiento = document.getElementById('fecha').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Guardar en localStorage
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('apellidos', apellidos);
    localStorage.setItem('fecha', fechaDeNacimiento);
    localStorage.setItem('fechaRegistro', new Date());
    localStorage.setItem('email', email);
    localStorage.setItem('pass', password);

    // Recuperar y mostrar todos los datos excepto la contraseña
    const datosRecuperados = {
        nombre: localStorage.getItem('nombre'),
        apellidos: localStorage.getItem('apellidos'),
        fecha: localStorage.getItem('fecha'),
        fechaRegistro: localStorage.getItem('fechaRegistro'),
        email: localStorage.getItem('email')
        // pass: No se incluye la contraseña aquí
    };

    // Mostrar todos los datos recuperados excepto la contraseña
    const displayElement = document.getElementById('displayData');
    displayElement.innerHTML = `
        Datos recuperados:<br>
        Nombre: ${datosRecuperados.nombre}<br>
        Apellidos: ${datosRecuperados.apellidos}<br>
        Fecha de Nacimiento: ${datosRecuperados.fecha} &#128197;<br> <!-- Calendario Unicode -->
        Fecha de Registro: ${datosRecuperados.fechaRegistro}<br>
        Email: ${datosRecuperados.email}<br>
        <!-- Contraseña: ${datosRecuperados.pass} -->
    `;
}
