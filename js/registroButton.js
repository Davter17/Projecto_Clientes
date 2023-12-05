document.addEventListener("DOMContentLoaded", function() {
    var botonAltaUsuario = document.getElementById("registroUsuario");

    botonAltaUsuario.addEventListener("click", function() {
        // Redirigir a registro.html al hacer clic en "Alta usuario"
        window.location.href = "iniciarSesion.html";
    });
});

